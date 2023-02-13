import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Parent extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public firstName: string

  @column()
  public middleName: string

  @column()
  public lastName: string

  @column()
  public birthdate: Date

  @column()
  public gender: string

  @column()
  public email: string

  @column()
  public address: string

  @column()
  public contactNumber: string

  @column()
  public facebook: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime()
  public deletedAt: DateTime

  @manyToMany(() => User, {
    pivotTable: 'parent_child'
  })
  public user: ManyToMany <typeof User>
}
