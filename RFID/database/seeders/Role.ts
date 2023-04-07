import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Role from 'App/Models/Role'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Role.createMany([
      {
        role: 'Student'
      },
      {
        role: 'Employee'
      },
      // {
      //   role: 'Parent'
      // }
    ])
  }
}
