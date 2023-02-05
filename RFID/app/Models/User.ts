import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import UserLogin from './UserLogin'
import EmergencyContact from './EmergencyContact'

export default class User extends BaseModel {
  public static table = 'user'

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

  @hasOne(() => UserLogin)
  public userLogin: HasOne<typeof UserLogin>

  @hasOne(() => EmergencyContact)
  public emergencyContact: HasOne<typeof EmergencyContact>
}
