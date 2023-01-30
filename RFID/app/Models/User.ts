import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public firstname: string

  @column()
  public middlename: string

  @column()
  public lastname: string

  @column()
  public birthday: Date

  @column()
  public gender: string
  
  @column()
  public address: string
  
  @column()
  public email: string

  @column()
  public contactNumber: string

  @column()
  public facebook: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
