import { eq } from "drizzle-orm";
import { DrizzleDB } from "../../core/database/drizzle";
import { toilet } from "../../core/database/schema/toilet";
import { DrizzleD1Database } from "drizzle-orm/d1";
import type { ToiletDTO } from "./dto";

export class ToiletsService {
  constructor(
    private readonly db: DrizzleD1Database<Record<string, never>>,
  ) {}

  async findAll() {
    return await this.db.select().from(toilet);
  }

  async findById(id: string) {
    return await this.db
      .select()
      .from(toilet)
      .where(eq(toilet.toiletId, id))
      .get();
  }

  async create(data: ToiletDTO) {
    return await this.db.insert(toilet).values(data);
  }

  async update(id: string, data: Partial<ToiletDTO>) {
    return await this.db
      .update(toilet)
      .set(data)
      .where(eq(toilet.toiletId, id));
  }

  async delete(id: string) {
    return await this.db.delete(toilet).where(eq(toilet.toiletId, id));
  }
} 