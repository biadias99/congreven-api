'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Event extends Model {
  supports () {
    return this.hasMany('App/Models/Support')
  }
}

module.exports = Event
