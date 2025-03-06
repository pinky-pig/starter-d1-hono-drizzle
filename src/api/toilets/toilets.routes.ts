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
import { successResponse, errorResponse } from '../../utils/response';

export const ToiletsRoutes = new OpenAPIHono<Env>();

ToiletsRoutes.openapi(listToiletsRoute, async (ctx) => {
  const service = new ToiletsService(ctx.get('db'));
  const toilets = await service.findAll();
  return ctx.json(successResponse(toilets));
});

ToiletsRoutes.openapi(getToiletRoute, async (ctx) => {
  const service = new ToiletsService(ctx.get('db'));
  const { id } = ctx.req.valid('param');
  const toilet = await service.findById(id);
  if (!toilet) {
    return ctx.json(errorResponse("Toilet not found"));
  }
  return ctx.json(successResponse(toilet));
});

ToiletsRoutes.openapi(createToiletRoute, async (ctx) => {
  const service = new ToiletsService(ctx.get('db'));
  const data = ctx.req.valid('json');
  await service.create(data);
  return ctx.json(successResponse("Toilet created successfully"));
});

ToiletsRoutes.openapi(updateToiletRoute, async (ctx) => {
  const service = new ToiletsService(ctx.get('db'));
  const { id } = ctx.req.valid('param');
  const data = ctx.req.valid('json');
  await service.update(id, data);
  return ctx.json(successResponse("Toilet updated successfully"));
});

ToiletsRoutes.openapi(deleteToiletRoute, async (ctx) => {
  const service = new ToiletsService(ctx.get('db'));
  const { id } = ctx.req.valid('param');
  await service.delete(id);
  return ctx.json(successResponse("Toilet deleted successfully"));
}); 
