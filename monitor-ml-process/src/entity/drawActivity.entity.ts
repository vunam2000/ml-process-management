import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { AppDataSource } from "../config/database"
import { BaseEntity } from "./base.entity"
import { User } from "./user.entity"

export enum DRAW_ACTIVITY_TYPE {
  RECTANGULAR = 1,
}

@Entity()
export class DrawActivity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: "enum",
    enum: DRAW_ACTIVITY_TYPE,
  })
  type: DRAW_ACTIVITY_TYPE

  @Column()
  public startPositionX: number

  @Column()
  public startPositionY: number

  @Column()
  public endPositionX: number

  @Column()
  public endPositionY: number

  @ManyToOne(() => User, (user) => user.drawActivities)
  public createdBy: User
}

export const DrawActivityRepository = () => {
  return AppDataSource.getRepository(DrawActivity)
}
