import * as grpc from "@grpc/grpc-js"
import {
  PreditRectangularCoordinateRequest,
  PreditRectangularCoordinateResponse,
} from "../../proto/v1/draw-activity/drawActivity.service"
import { DrawActivityService } from "./drawActivity.service"

export class DrawActivityController {
  private drawActivityService: DrawActivityService

  constructor() {
    this.drawActivityService = new DrawActivityService()
  }

  async preditRectangularCoordinate(
    call: grpc.ServerUnaryCall<
      PreditRectangularCoordinateRequest,
      PreditRectangularCoordinateResponse
    >,
    callback: grpc.sendUnaryData<PreditRectangularCoordinateResponse>
  ) {
    try {
      const { startPosition, endPosition } = call.request
      const user: any = call.metadata.get("user")?.[0]

      await this.drawActivityService.preditRectangularCoordinate(user?.id, {
        startPosition,
        endPosition,
      })

      callback(null, { message: "PreditRectangularCoordinate" })
    } catch (err: any) {
      console.log(err)
      callback(err)
    }
  }
}
