'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrganizerSchema extends Schema {
  up () {
    this.create('organizers', (table) => {
      table.string('name', 80).notNullable()
      table.string('cnpj', 14).unique().primary().notNullable()
      table.string('description', 100).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('organizers')
  }
}

module.exports = OrganizerSchema
