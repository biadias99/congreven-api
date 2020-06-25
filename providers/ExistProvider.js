'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class ExistProvider extends ServiceProvider {
  /**
   * Register namespaces to the IoC container
   *
   * @method register
   *
   * @return {void}
   */
  register () {
    //
  }

  /**
   * Attach context getter when all providers have
   * been registered
   *
   * @method boot
   *
   * @return {void}
   */
  boot () {
    // require Validator
    const Validator = use('Validator');
    // Register
    Validator.extend('exists', this._exists, '');
  }

  async _exists(data, field, message, args, get) {
    const Database = use('Database')
    const value = get(data, field)

    const [table, column] = args
    const row = await Database.table(table).where(column, value).first()

    if (!row) {
      throw message
    }
  }
}

module.exports = ExistProvider
