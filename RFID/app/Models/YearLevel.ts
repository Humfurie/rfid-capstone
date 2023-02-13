import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class YearLevel extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public year: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => User, {
    pivotTable: 'user_years'
  })
  public user: ManyToMany<typeof User>
}
