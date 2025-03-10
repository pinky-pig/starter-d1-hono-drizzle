import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";
import { UsersRoutes } from "./api/users/users.routes";
import { Bindings, Variables } from "./core/configs/workers";
import { DrizzleDB } from "./core/database/drizzle";
import { ToiletsRoutes } from "./api/toilets/toilets.routes";

const app = new OpenAPIHono<{ Bindings: Bindings; Variables: Variables }>();

app.openAPIRegistry.registerComponent("securitySchemes", "Bearer", {
  type: "http",
  scheme: "bearer",
});
app.doc("/openapi", {
  info: { title: "My API", version: "1.0" },
  openapi: "3.1.0",
});

app.get("/", (c) => c.text("Welcome to this template!"));
app.get("/swagger", swaggerUI({ url: "/openapi" }));

app.use(async (ctx, next) => {
  const db = DrizzleDB.getInstance(ctx.env.DB);
  ctx.set('db', db);
  await next();
});

app.route("/api/users", UsersRoutes);
app.route("/api/toilets", ToiletsRoutes);

export default app;
