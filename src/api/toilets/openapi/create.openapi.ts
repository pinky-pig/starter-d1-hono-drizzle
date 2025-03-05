import { createRoute } from "@hono/zod-openapi";
import { toiletSchema } from "../dto";
import { z } from "zod";

export const createToiletRoute = createRoute({
  method: "post",
  path: "/",
  tags: ["toilets"],
  summary: "创建新厕所",
  request: {
    body: {
      content: {
        "application/json": {
          schema: toiletSchema
        }
      }
    }
  },
  responses: {
    201: {
      content: {
        "application/json": {
          schema: z.object({
            success: z.boolean(),
            message: z.string()
          })
        }
      },
      description: "成功创建厕所"
    },
    400: {
      content: {
        "application/json": {
          schema: z.object({
            success: z.boolean(),
            message: z.string()
          })
        }
      },
      description: "请求参数错误"
    }
  }
}); 