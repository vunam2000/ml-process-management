import * as grpc from "@grpc/grpc-js"
import { serverConfig } from "./envVars"
import { AppDataSource } from "./database"
import { MachineLearningRoute } from "../routes/machineLearning.route"
import { FileUploadRoute } from "../routes/fileUpload.route"
import { DrawActivityRoute } from "../routes/drawActivity.route"

export class GrpcServer {
  public server: grpc.Server

  constructor() {
    this.server = new grpc.Server()
    this.registerService()
  }

  public bindAsync() {
    this.server.bindAsync(
      `${serverConfig.host}:${serverConfig.port}`,
      grpc.ServerCredentials.createInsecure(),
      async (err, port) => {
        if (err) {
          console.error(err)
          return
        }
        this.server.start()
        await AppDataSource.initialize()
        console.log(`Server listening on ${port}`)
      }
    )
  }

  private registerService() {
    const machineLearningRoute = new MachineLearningRoute(this.server)
    machineLearningRoute.register()

    const fileUploadRoute = new FileUploadRoute(this.server)
    fileUploadRoute.register()

    const drawActivityRoute = new DrawActivityRoute(this.server)
    drawActivityRoute.register()
  }
}
