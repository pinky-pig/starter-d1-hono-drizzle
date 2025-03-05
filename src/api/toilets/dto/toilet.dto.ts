import { z } from "zod";

// 基础的厕所数据结构
export const toiletSchema = z.object({
  toiletId: z.string(),
  toiletName: z.string(),
  toiletAddress: z.string(),
  toiletAreaId: z.string(),
  toiletLng: z.number(),
  toiletLat: z.number(),
  distance: z.number().nullable(),
  avgScore: z.string().nullable(),
  toiletFireProtection: z.string().nullable(),
  toiletPropertyRight: z.string(),
  toiletPropertyRightStr: z.string(),
  toiletPaperState: z.string().nullable(),
  closeHours: z.string().nullable()
});

export type ToiletDTO = z.infer<typeof toiletSchema>; 