'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SpeakSchema extends Schema {
  up () {
    this.create('speaks', (table) => {
      table.string('rg_guest_speaker').references('rg').inTable('guest_speakers')
      table.integer('id_activity').references('id').inTable('activities').unsigned()
      table.primary(['rg_guest_speaker', 'id_activity'])
    })
  }

  down () {
    this.drop('speaks')
  }
}

module.exports = SpeakSchema
