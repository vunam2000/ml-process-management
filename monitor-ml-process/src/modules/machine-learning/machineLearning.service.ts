import {
  MachineLearning,
  MachineLearningRepository,
} from "../../entity/machineLearning.entity"
import { CreateMachineLearningDto } from "./dto/createMachineLearning.dto"
import { UpdateMachineLearningDto } from "./dto/updateMachineLearning.dto"

export class MachineLearningService {
  constructor() {}

  async createMachineLearning(data: CreateMachineLearningDto) {
    const { name } = data

    const newMachineLearning = new MachineLearning()
    newMachineLearning.name = name

    await MachineLearningRepository().save(newMachineLearning)

    return newMachineLearning
  }

  async updateMachineLearning(data: UpdateMachineLearningDto) {
    const { id, name, status } = data

    const machineLearning = await this.getMachineLearningById(id)

    if (!machineLearning) {
      throw {
        message: "MachineLearning does not exist",
      }
    }

    await MachineLearningRepository().save(
      MachineLearningRepository().merge(machineLearning, {
        name,
        status,
      })
    )

    return machineLearning
  }

  async getMachineLearningById(id: number) {
    const machineLearning = await MachineLearningRepository().findOneBy({
      id,
    })

    return machineLearning
  }
}
