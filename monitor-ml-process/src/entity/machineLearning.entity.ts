import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { AppDataSource } from "../config/database"
import { BaseEntity } from "./base.entity"

export enum MACHINE_LEARNING_STATUS {
  UNACTIVE = 0,
  ACTIVE = 1,
  TRAINING = 2,
}

@Entity()
export class MachineLearning extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  public name: string

  @Column({
    type: "enum",
    enum: MACHINE_LEARNING_STATUS,
    default: MACHINE_LEARNING_STATUS.ACTIVE,
  })
  status: MACHINE_LEARNING_STATUS
}

export const MachineLearningRepository = () => {
  return AppDataSource.getRepository(MachineLearning)
}
