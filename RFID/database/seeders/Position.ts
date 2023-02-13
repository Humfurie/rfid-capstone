import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Position from 'App/Models/Position'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Position.createMany([
      {
        name: 'teacher'
      },
      {
        name: 'staff'
      },
    ])
  }
}
