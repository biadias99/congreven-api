'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const CPF = require('cpf')

class CpfProvider extends ServiceProvider {
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
    Validator.extend('cpfValid', this._cpfValid, 'CPF inválido.');
  }

  async _cpfValid(data, field, message, args, get) {
    const cpfUser = get(data, field)

    if (!CPF.isValid(cpfUser)) {
      throw 'CPF inválido.';
    }
  }

}

module.exports = CpfProvider
