import * as grpc from "@grpc/grpc-js"
import jwt from "jsonwebtoken"
import { authConfig } from "../config/envVars"

export const authenticateMiddleware =
  (call: grpc.ServerUnaryCall<any, any>, callback: any) =>
  async (handler: any) => {
    try {
      const token = call.metadata.get("x-user-auth")?.[0]

      try {
        // const decode = jwt.verify(token as string, authConfig.jwt_secret)
        // call.metadata.set("user", (decode as any)?.data?.user)
      } catch (err) {
        callback(new Error(`Unauthentication`))
        return
      }

      handler(call, callback)
    } catch (err) {
      console.log(err)
      callback(err)
    }
  }
