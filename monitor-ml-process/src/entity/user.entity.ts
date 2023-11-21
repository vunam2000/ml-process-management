import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { AppDataSource } from "../config/database"
import { DrawActivity } from "./drawActivity.entity"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @OneToMany(() => DrawActivity, (drawActivity) => drawActivity.createdBy)
  drawActivities: DrawActivity[]
}

export const UserRepository = () => {
  return AppDataSource.getRepository(User)
}
