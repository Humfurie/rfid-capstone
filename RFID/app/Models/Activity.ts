import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Activity extends BaseModel {
  public static table = 'activities'
  @column({ isPrimary: true })
  public id: number

  @column()
  public day: string

  @column()
  public status: string

  @column()
  public userId: number

  @column()
  public flag: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime()
  public deletedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  // table.increments('id')
  // table.string('day').notNullable()
  // table.string('status').notNullable()
  // table.integer('flag').defaultTo(1)
}
