import * as grpc from "@grpc/grpc-js"

import { authenticateMiddleware } from "../middleware/authenticate"

import { DrawActivityController } from "../modules/draw-activity/drawActivity.controller"
import {
  DrawActivityGrpcService,
  PreditRectangularCoordinateRequest,
  PreditRectangularCoordinateResponse,
} from "../proto/v1/draw-activity/drawActivity.service"

export class DrawActivityRoute {
  public drawActivityController: DrawActivityController
  private server: grpc.Server

  constructor(server: grpc.Server) {
    this.server = server
    this.drawActivityController = new DrawActivityController()
  }

  register() {
    this.server.addService(DrawActivityGrpcService, {
      preditRectangularCoordinate: (
        call: grpc.ServerUnaryCall<
          PreditRectangularCoordinateRequest,
          PreditRectangularCoordinateResponse
        >,
        callback: grpc.sendUnaryData<PreditRectangularCoordinateResponse>
      ) =>
        authenticateMiddleware(
          call,
          callback
        )(() =>
          this.drawActivityController.preditRectangularCoordinate(
            call,
            callback
          )
        ),
    })
  }
}
