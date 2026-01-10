import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";
import * as schema from "@shared/schema";

// Configure WebSocket for local development
if (process.env.NODE_ENV !== "production") {
  neonConfig.webSocketConstructor = ws;
}

// Create a singleton connection pool
let pool: Pool | null = null;

export function getDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL environment variable is not set");
  }

  if (!pool) {
    // Create pool with connection pooling optimized for serverless
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      // Serverless-friendly settings
      max: 1, // Maximum connections per serverless instance
      idleTimeoutMillis: 30000, // Close idle connections after 30 seconds
      connectionTimeoutMillis: 10000, // Timeout for establishing connection
    });
  }

  return drizzle(pool, { schema });
}

// Export db instance
export const db = getDb();

// For serverless cleanup (optional, but good practice)
export async function closeDb() {
  if (pool) {
    await pool.end();
    pool = null;
  }
}
