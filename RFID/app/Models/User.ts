import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import UserLogin from './UserLogin'
import EmergencyContact from './EmergencyContact'
import Role from './Role'
import Parent from './Parent'

export default class User extends BaseModel {
  public static table = 'users'

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

  @column()
  public year: string

  @column()
  public idNumber: number

  @column()
  public isAlumni: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => UserLogin)
  public userLogin: HasOne<typeof UserLogin>

  @hasOne(() => EmergencyContact)
  public emergencyContact: HasOne<typeof EmergencyContact>

  @manyToMany(() => Role, {
    pivotTable: 'user_roles'
  })
  public role: ManyToMany<typeof Role>

  @manyToMany(() => Parent, {
    pivotTable: 'parent_child'
  })
  public parent: ManyToMany <typeof Parent>
}
