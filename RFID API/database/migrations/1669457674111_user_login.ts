import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'user_login'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('user_id')
        .unsigned()
        .references('users.id')
        .onDelete('CASCADE')
        .nullable()
      table.integer('parent_id')
        .unsigned()
        .references('parents.id')
        .onDelete('CASCADE')
        .nullable()
      table.string('username', 50).notNullable()
      table.string('password').notNullable()
      table.integer('flag').defaultTo(1)


      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('deleted_at', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
