'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SpeakSchema extends Schema {
  up () {
    this.create('speaks', (table) => {
      table.string('rg_guest_speaker').references('rg').inTable('guest_speakers')
      table.integer('activity_id').references('id').inTable('activities').unsigned()
      table.primary(['rg_guest_speaker', 'activity_id'])
      table.timestamps()
    })
  }

  down () {
    this.drop('speaks')
  }
}

module.exports = SpeakSchema
