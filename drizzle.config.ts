import type { Config } from "drizzle-kit";

export default {
  driver: "d1",
  schema: "./src/core/database/schema/*",
  out: "./migrations",
} satisfies Config;
