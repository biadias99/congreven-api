'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NewSchema extends Schema {
  up () {
    this.create('news', (table) => {
      table.string('name', 80).notNullable()
      table.string('description', 100).notNullable()
      table.date('date_event').notNullable()
      table.integer('event_id').unsigned().references('id').inTable('events')
      table.primary(['name', 'date_event', 'event_id'])
    })
  }

  down () {
    this.drop('news')
  }
}

module.exports = NewSchema
