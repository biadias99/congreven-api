'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class New extends Model {
  static get primaryKey() {
    return ['name', 'ndate', 'event_id']
  }
}

module.exports = New
