'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ActivitySchema extends Schema {
  up () {
    this.create('activities', (table) => {
      table.increments()
      table.string('period', 30).notNullable()
      table.date('date_activity').notNullable()
      table.time('start_hour').notNullable()
      table.time('end_hour').notNullable()
      table.integer('event_id').unsigned().references('id').inTable('events')
      table.timestamps()
    })
  }

  down () {
    this.drop('activities')
  }
}

module.exports = ActivitySchema
