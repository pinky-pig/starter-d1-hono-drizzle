import { createRoute } from "@hono/zod-openapi";
import { z } from "zod";

export const deleteToiletRoute = createRoute({
  method: "delete",
  path: "/:id",
  tags: ["toilets"],
  summary: "删除厕所",
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
            message: z.string()
          })
        }
      },
      description: "成功删除厕所"
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