import { DateTime } from 'luxon'
import { BaseModel, beforeSave, BelongsTo, belongsTo, column, } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import User from './User'


export default class UserLogin extends BaseModel {
  public static table = 'user_login'

  @column({ isPrimary: true })
  public id: number

  @column()
  public username: string

  @column()
  public password: string

  @column()
  public flag: number

  @column()
  public userId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime()
  public deletedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @beforeSave()
  public static async hashPassword (user: UserLogin) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
