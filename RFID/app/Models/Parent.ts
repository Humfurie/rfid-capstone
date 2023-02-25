import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Role from './Role'

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

  @column()
  public flag: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime()
  public deletedAt: DateTime

  @manyToMany(() => User, {
    pivotTable: 'user_parents'
  })
  public user: ManyToMany <typeof User>

  @manyToMany(() => Role, {
    pivotTable: 'user_roles'
  })
  public role: ManyToMany <typeof Role>
}
