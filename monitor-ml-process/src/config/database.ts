import { DataSource } from "typeorm"

import { postgresConfig } from "./envVars"

export const AppDataSource = new DataSource({
  ...postgresConfig,
  type: "postgres",
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
})
