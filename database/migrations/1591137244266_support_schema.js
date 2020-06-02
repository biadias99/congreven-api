'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SupportSchema extends Schema {
  up () {
    this.create('supports', (table) => {
      table.integer('event_id').references('id').inTable('events').unsigned()
      table.string('cnpj_organizer').references('cnpj').inTable('organizers').notNullable()
      table.primary(['event_id', 'cnpj_organizer'])
    })
  }

  down () {
    this.drop('supports')
  }
}

module.exports = SupportSchema
