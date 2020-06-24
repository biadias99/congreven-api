'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class GuestSpeaker extends Model {
  static get primaryKey() {
    return 'rg'
  }
}

module.exports = GuestSpeaker
