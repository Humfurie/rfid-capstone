import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'parents'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('firstname', 50).notNullable()
      table.string('middlename', 255).notNullable()
      table.string('lastname', 50).notNullable()
      table.date('birthday').nullable()
      table.string('gender').notNullable()
      table.string('email', 255).nullable()
      table.string('address', 255).nullable()
      table.string('contact_number', 11).nullable()
      table.string('facebook', 50).nullable()
      
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
