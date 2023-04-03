import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class IndexSeeder extends BaseSeeder {
  private async runSeeder(Seeder: { default: typeof BaseSeeder }) {

    await new Seeder.default(this.client).run()
  }

  public async run() {
    /**
     * these are seeders running in order
     */
    await this.runSeeder(await import('../AdminSeeder'))
    await this.runSeeder(await import('../PositionSeeder'))
    await this.runSeeder(await import('../YearLevelSeeder'))
    await this.runSeeder(await import('../RoleSeeder'))
    await this.runSeeder(await import('../UserSeeder'))
  }
}
