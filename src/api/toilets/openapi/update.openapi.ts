import { createRoute } from "@hono/zod-openapi";
import { toiletSchema } from "../dto";
import { z } from "zod";

export const updateToiletRoute = createRoute({
  method: "put",
  path: "/:id",
  tags: ["toilets"],
  summary: "更新厕所信息",
  request: {
    params: z.object({
      id: z.string().describe("厕所ID")
    }),
    body: {
      content: {
        "application/json": {
          schema: toiletSchema.partial()
        }
      }
    }
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: z.object({
            success: z.boolean(),
            message: z.string()
          })
        }
      },
      description: "成功更新厕所信息"
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