'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GuestSpeakerSchema extends Schema {
  up () {
    this.create('guest_speakers', (table) => {
      table.string('rg', 9).unique().primary()
      table.string('name', 80).notNullable()
      table.integer('age', 80).notNullable()
      table.string('scholarity', 30).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('guest_speakers')
  }
}

module.exports = GuestSpeakerSchema
