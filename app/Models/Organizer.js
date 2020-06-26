'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Organizer extends Model {
  static get primaryKey() {
    return 'cnpj'
  }
  supports () {
    return this.hasMany('App/Models/Support')
  }
}

module.exports = Organizer
