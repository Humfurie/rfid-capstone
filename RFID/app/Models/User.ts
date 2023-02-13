import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import UserLogin from './UserLogin'
import EmergencyContact from './EmergencyContact'
import Role from './Role'
import Parent from './Parent'
import ProfilePic from './ProfilePic'
import Position from './Position'

export default class User extends BaseModel {
  public static table = 'users'

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
  public year: number

  @column()
  public idNumber: number

  @column()
  public isAlumni: boolean

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

  @manyToMany(() => Role, {
    pivotTable: 'user_roles'
  })
  public role: ManyToMany<typeof Role>

  @manyToMany(() => Position, {
    pivotTable: 'user_positions'
  })
  public position: ManyToMany<typeof Position>

  @manyToMany(() => Parent, {
    pivotTable: 'parent_child'
  })
  public parent: ManyToMany <typeof Parent>

}
