import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, HasOne, hasOne, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import UserLogin from './UserLogin'
import EmergencyContact from './EmergencyContact'
import Role from './Role'
import Parent from './Parent'
import ProfilePic from './ProfilePic'
import Position from './Position'
import YearLevel from './YearLevel'
import Activity from './Activity'

export default class User extends BaseModel {
  public static table = 'users'
  /**
   * this is the updated users model
   */

  @column({ isPrimary: true })
  public id: number

  @column()
  public firstName: string

  @column()
  public middleName: string

  @column()
  public lastName: string

  @column()
  public birthdate: string

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

  @column()
  public idNumber: string

  @column()
  public rfidNumber: string

  @column()
  public isAlumni: boolean

  @column()
  public flag: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime()
  public deletedAt: DateTime

  @hasOne(() => UserLogin)
  public userLogin: HasOne<typeof UserLogin>

  @hasOne(() => EmergencyContact)
  public emergencyContact: HasOne<typeof EmergencyContact>

  @hasOne(() => ProfilePic)
  public profilePic: HasOne<typeof ProfilePic>

  @manyToMany(() => YearLevel, {
    pivotTable: 'user_years'
  })
  public yearLevel: ManyToMany<typeof YearLevel>

  @manyToMany(() => Role, {
    pivotTable: 'user_roles'
  })
  public role: ManyToMany<typeof Role>

  @manyToMany(() => Position, {
    pivotTable: 'user_positions'
  })
  public position: ManyToMany<typeof Position>

  @manyToMany(() => Parent, {
    pivotTable: 'user_parents'
  })
  public parent: ManyToMany <typeof Parent>

  @hasMany(() => Activity)
  public activity: HasMany<typeof Activity>

}
