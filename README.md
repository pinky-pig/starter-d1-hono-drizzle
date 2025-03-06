# Workers,D1,Hono,Drizzle 模板
---
### 1. 修改 wrangler.toml
将 `wrangler.example.toml` 重命名为 `wrangler.toml` 并根据项目配置。

### 2. 迁移 D1 数据库
```bash
pnpm run db:generate # 生成迁移文件
pnpm run db:apply <db-name> --local # 本地数据库
pnpm run db:apply <db-name> --remote # 云端数据库
```

### 3. 本地运行项目
```bash
pnpm run dev
```

### 4. 部署项目到 Workers
```bash
pnpm run deploy
```

### 5. 如果有导入数据的需求
先通过 navicat 或者 DataGrip 将数据（sql 文件、JSON 文件等）导入到本地数据库。进行开发完成后，需要将数据导入到云端数据库。
然后从本地数据库中导出为 sql 文件，但是数据量可能会比较大，那么需要先拆分，然后再分批导入。
```bash
# 拆分 sql 文件
pnpm run db:split-sql
# 导入 sql 文件
pnpm run db:import-sql-remote
```
