import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import YearLevel from 'App/Models/YearLevel'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await YearLevel.createMany([
      {
        year: 'grade 7'
      },
      {
        year: 'grade 8'
      },
      {
        year: 'grade 9'
      },
      {
        year: 'grade 10'
      },
      {
        year: 'grade 11'
      },
      {
        year: 'grade 12'
      },
    ])
  }
}
