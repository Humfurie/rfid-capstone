import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'user_information'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('firstname', 50).notNullable()
      table.string('middlename', 255).notNullable()
      table.string('lastname', 50).notNullable()
      table.date('birthday')
      table.string('gender')
      table.string('email', 255)
      table.string('address', 255)
      table.string('contact_number', 11)
      table.string('facebook', 255)

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
