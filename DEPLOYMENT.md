# HobotnikaWeb - Deployment Guide

This guide covers deploying your HobotnikaWeb application after migration from Replit.

## Table of Contents
- [Changes Made for Migration](#changes-made-for-migration)
- [Local Development Setup](#local-development-setup)
- [Deployment Options](#deployment-options)
- [Vercel Deployment](#vercel-deployment)
- [Alternative Deployment Options](#alternative-deployment-options)

## Changes Made for Migration

### Replit-Specific Code Removed/Modified

1. **server/index.ts:64-67** - Removed Replit-specific `reusePort: true` option
   - Changed from: `server.listen({ port, host: "0.0.0.0", reusePort: true })`
   - Changed to: `server.listen(port, () => {...})`

2. **vite.config.ts:4,10-17** - Replit Vite plugins (should be removed for production)
   - `@replit/vite-plugin-runtime-error-modal`
   - `@replit/vite-plugin-cartographer`
   - These plugins are conditionally loaded only when `REPL_ID` is present

3. **.replit file** - Replit configuration file (can be ignored/deleted for non-Replit deployments)

### Files Added

- `.env.example` - Template for environment variables
- `.gitignore` - Updated to include `.env` files
- `vercel.json` - Vercel deployment configuration (static frontend only)
- `DEPLOYMENT.md` - This file

## Local Development Setup

### Prerequisites

- Node.js 20+ installed
- PostgreSQL database (local or cloud-hosted like Neon)
- npm or yarn package manager

### Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and configure:
   - `DATABASE_URL` - Your PostgreSQL connection string
   - `PORT` - Server port (default: 5000)
   - `NODE_ENV` - Set to `development`

3. **Push database schema:**
   ```bash
   npm run db:push
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5000`

## Deployment Options

Your application has a full-stack architecture (Express + React), which requires different deployment strategies depending on the platform.

### Current Architecture

- **Frontend:** React + Vite (builds to `dist/public`)
- **Backend:** Express.js server (builds to `dist/index.js`)
- **Database:** PostgreSQL (using Drizzle ORM)

## Vercel Deployment

**⚠️ Important Limitation:** The current `vercel.json` configuration only deploys the **static frontend**. The Express backend will NOT be deployed to Vercel with this setup.

### Static Frontend Only (Current Setup)

This is suitable if you're deploying the backend separately or if your app is primarily static.

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Configure environment variables in Vercel dashboard:**
   - Go to your project settings
   - Add `DATABASE_URL` and other required environment variables

### Full-Stack Vercel Deployment (Requires Refactoring)

To deploy both frontend and backend to Vercel, you need to convert your Express app to Vercel serverless functions:

**Option 1: Serverless API Routes**
1. Create `api/` directory in project root
2. Convert Express routes to Vercel API route format
3. Each route becomes a file in `api/` (e.g., `api/users.js`)
4. Update `vercel.json` to route API calls properly

**Option 2: Use Vercel's Node.js Runtime**
1. Refactor `server/index.ts` to export the Express app (don't call `listen()`)
2. Create `api/index.js` that imports and exports the Express app
3. Update `vercel.json` to use `@vercel/node` for the API

Example refactored `server/index.ts`:
```typescript
// Export the app instead of calling listen()
export default app;

// Only listen if running directly (not in Vercel)
if (import.meta.url === `file://${process.argv[1]}`) {
  const port = parseInt(process.env.PORT || '5000', 10);
  server.listen(port, () => {
    log(`serving on port ${port}`);
  });
}
```

## Alternative Deployment Options

### Recommended: Railway, Render, or Fly.io

These platforms are better suited for full-stack Node.js applications with persistent servers:

#### **Railway**
1. Connect your GitHub repository
2. Add environment variables (DATABASE_URL, etc.)
3. Railway auto-detects Node.js and runs `npm run build` and `npm start`
4. Deploy automatically on git push

#### **Render**
1. Create a new Web Service
2. Connect your repository
3. Configure:
   - Build Command: `npm run build`
   - Start Command: `npm start`
4. Add environment variables
5. Deploy

#### **Fly.io**
1. Install Fly CLI: `curl -L https://fly.io/install.sh | sh`
2. Run: `fly launch` (follow prompts)
3. Configure DATABASE_URL in Fly dashboard
4. Deploy: `fly deploy`

### Docker Deployment

For containerized deployment (works with AWS, Google Cloud, Azure, DigitalOcean):

Create `Dockerfile`:
```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t hobotnikaweb .
docker run -p 5000:5000 -e DATABASE_URL=your_db_url hobotnikaweb
```

## Database Setup

### Using Neon Database (Recommended)

1. Sign up at [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string
4. Add to your deployment platform's environment variables as `DATABASE_URL`
5. Run `npm run db:push` to push your schema

### Using Other PostgreSQL Providers

- **Supabase:** Provides PostgreSQL + additional features
- **AWS RDS:** Managed PostgreSQL on AWS
- **Railway PostgreSQL:** Built-in database service
- **DigitalOcean Managed Database:** Easy PostgreSQL setup

## Environment Variables Reference

Required environment variables for production:

```
DATABASE_URL=postgresql://user:password@host:port/database
NODE_ENV=production
PORT=5000  # Optional, defaults to 5000
```

## Post-Deployment Checklist

- [ ] Database schema pushed (`npm run db:push`)
- [ ] Environment variables configured
- [ ] Frontend accessible and loads correctly
- [ ] API endpoints responding (if backend deployed)
- [ ] SSL/HTTPS enabled
- [ ] Custom domain configured (optional)
- [ ] Remove or comment out Replit-specific dependencies in production

## Troubleshooting

### "listen ENOTSUP" error
- This was caused by `reusePort: true` in server/index.ts (already fixed)

### Database connection fails
- Verify DATABASE_URL is correctly formatted
- Check firewall rules allow connections from deployment platform
- Ensure database is accessible from the internet

### Build fails on deployment platform
- Check Node.js version matches requirements (20+)
- Verify all dependencies are in package.json
- Review build logs for specific errors

### Frontend works but API returns 404
- Verify API routes are properly configured
- Check that backend is deployed (not just frontend)
- Review deployment platform routing configuration

## Need Help?

- Check deployment platform's documentation
- Review error logs in deployment dashboard
- Ensure all Replit-specific code has been removed/adapted
