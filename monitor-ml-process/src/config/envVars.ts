import config from "config"

export const serverConfig: {
  host: string
  port: number
} = config.get("server")

export const authConfig: {
  jwt_secret: string
} = config.get("auth")

export const postgresConfig = config.get<{
  host: string
  port: number
  username: string
  password: string
  database: string
}>("postgresql")
