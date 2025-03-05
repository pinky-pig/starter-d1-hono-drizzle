import type { DrizzleD1Database } from "drizzle-orm/d1";

export interface Bindings {
  DB: D1Database;
  JWT_SECRET: string;
}

export interface Variables {
  db: DrizzleD1Database;
  jwtPayload?: { id: string };
}

export interface Env {
  Bindings: Bindings;
  Variables: Variables;
}
