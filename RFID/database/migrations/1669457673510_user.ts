import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('first_name', 50).notNullable()
      table.string('middle_name', 255).notNullable()
      table.string('last_name', 50).notNullable()
      table.string('birthdate').nullable()
      table.string('gender').notNullable()
      table.string('email', 255).nullable()
      table.string('address', 255).nullable()
      table.string('contact_number', 11).nullable()
      table.string('facebook', 50).nullable()
      table.string('id_number').nullable()
      table.string('rfid_number').notNullable()
      table.boolean('is_alumni').defaultTo(false)
      table.integer('flag').defaultTo(1)

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('deleted_at', { useTz: true }).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
