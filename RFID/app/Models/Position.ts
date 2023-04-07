import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Position extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public position: string

  @column()
  public flag: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime()
  public deletedAt: DateTime

  @manyToMany(() => User, {
    pivotTable: 'user_positions'
  })
  public user: ManyToMany <typeof User>
}
