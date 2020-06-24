'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Organizer extends Model {
  static get primaryKey() {
    return 'cnpj'
  }
}

module.exports = Organizer
