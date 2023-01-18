import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import RfidModel from 'App/Models/RfidModel'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method

    await RfidModel.createMany([
      {
        name: 'Clofel Maot'
      }
    ])
  }
}
