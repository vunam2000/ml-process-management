import * as grpcWeb from "grpc-web"

import { DrawActivityGrpcClient } from "../../proto/v1/draw-activity/DrawActivity.serviceServiceClientPb"
import {
  Coordinate,
  PreditRectangularCoordinateRequest,
  PreditRectangularCoordinateResponse,
} from "../../proto/v1/draw-activity/drawActivity.service_pb"

const preditRectangularCoordinate = (startPosition: any, endPosition: any) => {
  const drawActivityClient = new DrawActivityGrpcClient("http://localhost:8000")
  const request = new PreditRectangularCoordinateRequest()

  const startCoordinate = new Coordinate()
  startCoordinate.setX(startPosition.x)
  startCoordinate.setY(startPosition.y)

  const endCoordinate = new Coordinate()
  endCoordinate.setX(endPosition.x)
  endCoordinate.setY(endPosition.y)

  request.setStartposition(startCoordinate)
  request.setEndposition(endCoordinate)

  const methodDescriptorGreet = new grpcWeb.MethodDescriptor(
    "/services.drawActivity.v1.DrawActivityGrpc/PreditRectangularCoordinate",
    grpcWeb.MethodType.UNARY,
    PreditRectangularCoordinateRequest,
    PreditRectangularCoordinateResponse,
    (request: PreditRectangularCoordinateRequest) => {
      return request.serializeBinary()
    },
    PreditRectangularCoordinateResponse.deserializeBinary
  )

  drawActivityClient.client_.rpcCall(
    drawActivityClient.hostname_ +
      "/services.drawActivity.v1.DrawActivityGrpc/PreditRectangularCoordinate",
    request,
    {
      "x-user-auth":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxfSwiaWF0IjoxNzAwMzAwNjQwLCJleHAiOjE3MDM5MDA2NDB9.puXIiUrBfBUwV59T_I-GUUElmWp2H3QzL-h7tVjnTlw",
    },
    methodDescriptorGreet,
    (err, res) => {
      console.log(err, res)
    }
  )
}

export const DrawActivityService = {
  preditRectangularCoordinate,
}
