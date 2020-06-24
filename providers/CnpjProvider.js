'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const CNPJ = require('cnpj')

class CnpjProvider extends ServiceProvider {
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
    Validator.extend('cnpjValid', this._cnpjValid, 'CNPJ inválido.');
  }

  async _cnpjValid(data, field, message, args, get) {
    const cnpjOrganizer = get(data, field)

    if (!CNPJ.validate(cnpjOrganizer)) {
      throw 'CNPJ inválido.';
    }
  }
}

module.exports = CnpjProvider
