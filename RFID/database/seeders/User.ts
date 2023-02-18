
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UserFactory from 'Database/factories/UserFactory'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    /**
     * fake user
     */
    await UserFactory
    // .with('role', 1, (role) => {
    //   role.pivotAttributes([
    //     {role_id: '1'},
    //   ])
    // })
    // .with('position', 1, (position) => {
    //   position.pivotAttributes([
    //     {position_id: '1'},
    //   ])
    // })
    .with('emergencyContact', 1)
    .with('userLogin', 1)   
    .createMany(20)


  }
}
