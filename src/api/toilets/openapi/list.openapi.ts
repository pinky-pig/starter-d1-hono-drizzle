import { createRoute } from "@hono/zod-openapi";
import { toiletSchema } from "../dto";
import { z } from "zod";

export const listToiletsRoute = createRoute({
  method: "get",
  path: "/",
  tags: ["toilets"],
  summary: "获取所有厕所列表",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: z.object({
            success: z.boolean(),
            data: z.array(toiletSchema)
          })
        }
      },
      description: "成功获取厕所列表"
    }
  }
}); 