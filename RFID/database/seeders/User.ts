
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UserFactory from 'Database/factories/UserFactory'
import Position from './Position'
import Role from './Role'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    /**
     * fake user
     */
    await UserFactory
      .with('emergencyContact', 1)
      .with('userLogin', 1)
      .createMany(20)
  }
}
