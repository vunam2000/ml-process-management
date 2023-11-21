import * as grpc from "@grpc/grpc-js"

import { MachineLearningController } from "../modules/machine-learning/machineLearning.controller"
import {
  CreateMachineLearningRequest,
  CreateMachineLearningResponse,
  MachineLearningGrpcService,
  UpdateMachineLearningRequest,
} from "../proto/v1/machine-learning/machineLearning.service"
import { InterceptingCall } from "@grpc/grpc-js"
import { authenticateMiddleware } from "../middleware/authenticate"

export class MachineLearningRoute {
  public machineLearningController: MachineLearningController
  private server: grpc.Server

  constructor(server: grpc.Server) {
    this.server = server
    this.machineLearningController = new MachineLearningController()
  }

  register() {
    this.server.addService(MachineLearningGrpcService, {
      createMachineLearning: (
        call: grpc.ServerUnaryCall<
          CreateMachineLearningRequest,
          CreateMachineLearningResponse
        >,
        callback: grpc.sendUnaryData<CreateMachineLearningResponse>
      ) =>
        authenticateMiddleware(
          call,
          callback
        )(() =>
          this.machineLearningController.createMachineLearning(call, callback)
        ),

      updateMachineLearning: (
        call: grpc.ServerUnaryCall<
          UpdateMachineLearningRequest,
          CreateMachineLearningResponse
        >,
        callback: grpc.sendUnaryData<CreateMachineLearningResponse>
      ) => this.machineLearningController.updateMachineLearning(call, callback),
    })
  }
}
