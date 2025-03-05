import { createRoute } from "@hono/zod-openapi";
import { toiletSchema } from "../dto";
import { z } from "zod";

export const getToiletRoute = createRoute({
  method: "get",
  path: "/:id",
  tags: ["toilets"],
  summary: "获取单个厕所信息",
  request: {
    params: z.object({
      id: z.string().describe("厕所ID")
    })
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: z.object({
            success: z.boolean(),
            data: toiletSchema
          })
        }
      },
      description: "成功获取厕所信息"
    },
    404: {
      content: {
        "application/json": {
          schema: z.object({
            success: z.boolean(),
            message: z.string()
          })
        }
      },
      description: "厕所不存在"
    }
  }
}); 