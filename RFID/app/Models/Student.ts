import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import UserLogin from './UserLogin'

export default class Student extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public studentId: string
  
  @column()
  public schoolYear: string

  @column()
  public userLoginId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => UserLogin)
  public userLogin: BelongsTo<typeof UserLogin>
}
