'use strict'

const SupportBusiness = use('App/Business/SupportBusiness')

class SupportController {
  constructor() {
    this.supportBusiness = new SupportBusiness();
  }

  async create({ request, response }) {
    const data = request.all()

    try {
      await this.supportBusiness.create(data)

      response.send({
        message: 'Organizador vinculado ao evento com sucesso.'
      })
    } catch (error) {
      response.status(400).send({
        message: 'Erro ao vincular organizador ao evento: ' + error
      })
      return;
    }
  }

}

module.exports = SupportController
