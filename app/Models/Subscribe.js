'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Subscribe extends Model {
  static get primaryKey() {
    return ['event_id', 'cpf_user']
  }
}

module.exports = Subscribe
