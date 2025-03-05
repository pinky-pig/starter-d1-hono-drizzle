import { OpenAPIHono } from "@hono/zod-openapi";
import type { Env } from "../../core/configs/workers";
import { ToiletsService } from "./toilets.service";
import { 
  listToiletsRoute,
  getToiletRoute,
  createToiletRoute,
  updateToiletRoute,
  deleteToiletRoute
} from "./openapi";

export const ToiletsRoutes = new OpenAPIHono<Env>();

ToiletsRoutes.openapi(listToiletsRoute, async (c) => {
  const service = new ToiletsService(c.get('db'));
  const toilets = await service.findAll();
  return c.json({ success: true, data: toilets });
});

ToiletsRoutes.openapi(getToiletRoute, async (c) => {
  const service = new ToiletsService(c.get('db'));
  const { id } = c.req.valid('param');
  const toilet = await service.findById(id);
  if (!toilet) {
    return c.json({ success: false, message: "Toilet not found" }, 404);
  }
  return c.json({ success: true, data: toilet });
});

ToiletsRoutes.openapi(createToiletRoute, async (c) => {
  const service = new ToiletsService(c.get('db'));
  const data = c.req.valid('json');
  await service.create(data);
  return c.json({ success: true, message: "Toilet created successfully" }, 201);
});

ToiletsRoutes.openapi(updateToiletRoute, async (c) => {
  const service = new ToiletsService(c.get('db'));
  const { id } = c.req.valid('param');
  const data = c.req.valid('json');
  await service.update(id, data);
  return c.json({ success: true, message: "Toilet updated successfully" });
});

ToiletsRoutes.openapi(deleteToiletRoute, async (c) => {
  const service = new ToiletsService(c.get('db'));
  const { id } = c.req.valid('param');
  await service.delete(id);
  return c.json({ success: true, message: "Toilet deleted successfully" });
}); 