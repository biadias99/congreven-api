'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Support extends Model {
  static get primaryKey() {
    return ['event_id', 'cnpj_organizer']
  }
}

module.exports = Support
