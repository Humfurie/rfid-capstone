import { DateTime } from 'luxon'
import { BaseModel, beforeSave, BelongsTo, belongsTo, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import User from './User'
import Student from './Student'
import Employee from './Employee'

export default class UserLogin extends BaseModel {
  public static table = 'user_login'

  @column({ isPrimary: true })
  public id: number

  @column()
  public username: string

  @column()
  public password: string

  @column()
  public role: string

  @column()
  public userInformationId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public userInformation: BelongsTo<typeof User>

  @hasOne(() => Student)
  public student: HasOne<typeof Student>

  @hasOne(() => Employee)
  public employee: HasOne<typeof Employee>

  @beforeSave()
  public static async hashPassword (user: UserLogin) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
