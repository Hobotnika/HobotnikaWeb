# Vercel Migration Guide

This document outlines the migration from Express.js server to Vercel serverless functions.

## What Changed

### 1. Database Connection (`server/db.ts`)
- Created a new database utility with connection pooling optimized for serverless
- Uses Neon Serverless with proper pool configuration
- Maximum 1 connection per serverless instance to avoid connection limits
- Includes connection timeout and idle timeout settings

### 2. Storage Layer (`server/storage.ts`)
- Migrated from in-memory storage (`MemStorage`) to database storage (`DbStorage`)
- Now uses Drizzle ORM to interact with PostgreSQL
- All CRUD operations now persist to the database

### 3. API Routes (`/api` folder)
Created Vercel serverless functions:
- `/api/health.ts` - Health check endpoint (GET)
- `/api/users/index.ts` - Create user endpoint (POST)
- `/api/users/[id].ts` - Get user by ID endpoint (GET)

### 4. Vercel Configuration (`vercel.json`)
- Added rewrites for API routes
- Configured static file serving
- Frontend SPA routing handled by catch-all route

### 5. Package Configuration (`package.json`)
- Simplified build script (removed esbuild for server)
- Added `@vercel/node` for TypeScript types
- Kept Express server for local development

## Architecture

### Local Development
The Express server (`server/index.ts`) is still used for local development:
```bash
npm run dev
```

### Production (Vercel)
- Frontend built with Vite → `/dist/public`
- API routes served as serverless functions → `/api/*.ts`
- Each API route is a separate serverless function

## Serverless Considerations

### Cold Starts
- First request to a function may take longer
- Subsequent requests are faster due to function reuse
- Connection pooling helps maintain performance

### Database Connections
- Limited to 1 connection per serverless instance
- Pool settings optimize for serverless environment
- Idle connections closed after 30 seconds

### Environment Variables
Required in Vercel:
- `DATABASE_URL` - PostgreSQL connection string

## Testing the Migration

### Local Testing
1. Ensure DATABASE_URL is set in `.env`
2. Run migrations: `npm run db:push`
3. Start dev server: `npm run dev`
4. Test endpoints:
   - Health: `curl http://localhost:5000/api/health`
   - Create user: `curl -X POST http://localhost:5000/api/users -H "Content-Type: application/json" -d '{"username":"test","password":"test123"}'`

### Vercel Deployment
1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel`
3. Set environment variable: `vercel env add DATABASE_URL`
4. Test production endpoints

## API Endpoints

### GET /api/health
Returns server health status.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2026-01-10T12:00:00.000Z"
}
```

### POST /api/users
Create a new user.

**Request Body:**
```json
{
  "username": "john",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "id": "uuid",
  "username": "john"
}
```

### GET /api/users/:id
Get user by ID.

**Response:**
```json
{
  "id": "uuid",
  "username": "john"
}
```

## Next Steps

1. Add authentication endpoints (login, logout, session management)
2. Add password hashing (bcrypt or argon2)
3. Implement middleware for authentication
4. Add rate limiting
5. Add input validation and sanitization
6. Set up monitoring and error tracking
7. Add tests for API endpoints

## Development vs Production

### Local Development
- Uses Express server
- Hot reload with tsx
- Full error stack traces
- Direct database connections

### Production (Vercel)
- Serverless functions
- Automatic scaling
- Edge network distribution
- Optimized cold start performance
- Connection pooling

## Troubleshooting

### "DATABASE_URL not set" Error
Ensure the environment variable is set in Vercel dashboard or `.env` file locally.

### Connection Pool Exhausted
Increase the idle timeout or reduce connection pool size in `server/db.ts`.

### API Route Not Found
Check that the file structure matches Vercel's convention:
- `/api/route.ts` → `/api/route`
- `/api/folder/route.ts` → `/api/folder/route`
- `/api/folder/[param].ts` → `/api/folder/:param`
