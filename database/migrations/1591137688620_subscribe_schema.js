'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubscribeSchema extends Schema {
  up () {
    this.create('subscribes', (table) => {
      table.string('cpf_user', 11).notNullable().references('cpf').inTable('users')
      table.integer('event_id').references('id').inTable('events').unsigned()
      table.primary(['cpf_user', 'event_id'])
    })
  }

  down () {
    this.drop('subscribes')
  }
}

module.exports = SubscribeSchema
