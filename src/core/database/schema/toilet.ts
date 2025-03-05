import { sqliteTable, text, real, integer } from "drizzle-orm/sqlite-core";

export const toilet = sqliteTable("toilet", {
  /** 厕所唯一标识ID */
  toiletId: text("toilet_id").primaryKey(),
  
  /** 厕所名称 */
  toiletName: text("toilet_name").notNull(),
  
  /** 厕所地址 */
  toiletAddress: text("toilet_address").notNull(),
  
  /** 所属区域ID */
  toiletAreaId: text("toilet_area_id").notNull(),
  
  /** 经度坐标 */
  toiletLng: real("toilet_lng").notNull(),
  
  /** 纬度坐标 */
  toiletLat: real("toilet_lat").notNull(),
  
  /** 距离(米) */
  distance: integer("distance"),
  
  /** 平均评分 */
  avgScore: text("avg_score").default(""),
  
  /** 消防设施状态 */
  toiletFireProtection: text("toilet_fire_protection").default("0"),
  
  /** 产权类型(govToilet等) */
  toiletPropertyRight: text("toilet_property_right").notNull(),
  
  /** 产权类型描述(环卫等) */
  toiletPropertyRightStr: text("toilet_property_right_str").notNull(),
  
  /** 纸巾状态(have/none) */
  toiletPaperState: text("toilet_paper_state").default("none"),
  
  /** 关闭时间 */
  closeHours: text("close_hours").default("24:00"),
});

export type Toilet = typeof toilet.$inferSelect;
export type NewToilet = typeof toilet.$inferInsert; 