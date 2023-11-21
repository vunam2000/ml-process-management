import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js"
import {
  CreateMachineLearningRequest,
  CreateMachineLearningResponse,
  UpdateMachineLearningRequest,
} from "../../proto/v1/machine-learning/machineLearning.service"
import { MachineLearningService } from "./machineLearning.service"

export class MachineLearningController {
  private machineLearningService: MachineLearningService

  constructor() {
    this.machineLearningService = new MachineLearningService()
  }

  async createMachineLearning(
    call: ServerUnaryCall<
      CreateMachineLearningRequest,
      CreateMachineLearningResponse
    >,
    callback: sendUnaryData<CreateMachineLearningResponse>
  ) {
    try {
      const { name } = call.request

      const result = await this.machineLearningService.createMachineLearning({
        name,
      })

      const response = CreateMachineLearningResponse.create({
        id: result.id,
        name: result.name,
        status: result.status,
      })

      callback(null, response)
    } catch (err: any) {
      console.log(err)
      callback(err)
    }
  }

  async updateMachineLearning(
    call: ServerUnaryCall<
      UpdateMachineLearningRequest,
      CreateMachineLearningResponse
    >,
    callback: sendUnaryData<CreateMachineLearningResponse>
  ) {
    try {
      const { id, name, status } = call.request
      const result = await this.machineLearningService.updateMachineLearning({
        id: Number(id),
        name,
        status,
      })

      const response = CreateMachineLearningResponse.create({
        id: result.id,
        name: result.name,
        status: result.status,
      })

      callback(null, response)
    } catch (err: any) {
      console.log(err)
      callback(err)
    }
  }
}
