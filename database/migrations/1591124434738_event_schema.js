'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventSchema extends Schema {
  up () {
    this.create('events', (table) => {
      table.increments()
      table.string('name', 50).notNullable()
      table.string('address', 80).notNullable()
      table.datetime('start_date').notNullable()
      table.datetime('end_date').notNullable()
      table.string('description', 100).notNullable()
      table.string('cpf_owner', 11).notNullable().references('cpf').inTable('users')
      table.string('owner_description', 100).notNullable()
    })
  }

  down () {
    this.drop('events')
  }
}

module.exports = EventSchema
