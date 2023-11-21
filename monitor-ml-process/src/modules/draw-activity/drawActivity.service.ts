import {
  DRAW_ACTIVITY_TYPE,
  DrawActivity,
  DrawActivityRepository,
} from "../../entity/drawActivity.entity"
import { User, UserRepository } from "../../entity/user.entity"

import { CreatePreditCoordinateDto } from "./dto/createPreditCoordinate.dto"

export class DrawActivityService {
  constructor() {}

  async preditRectangularCoordinate(
    userId: number,
    data: CreatePreditCoordinateDto
  ) {
    const { startPosition, endPosition } = data

    const user = await UserRepository().findOneBy({ id: userId })

    if (!startPosition || !endPosition) {
      throw new Error("Position not found")
    }
    const newDrawActivity = new DrawActivity()

    newDrawActivity.startPositionX = startPosition?.x
    newDrawActivity.startPositionY = startPosition?.y
    newDrawActivity.endPositionX = endPosition?.x
    newDrawActivity.endPositionY = endPosition?.y

    // newDrawActivity.createdBy = user
    newDrawActivity.type = DRAW_ACTIVITY_TYPE.RECTANGULAR

    await DrawActivityRepository().save(newDrawActivity)

    return newDrawActivity
  }
}
