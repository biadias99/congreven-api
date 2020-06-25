'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Speak extends Model {
  static get primaryKey() {
    return ['rg_guest_speaker', 'activity_id']
  }
}

module.exports = Speak
