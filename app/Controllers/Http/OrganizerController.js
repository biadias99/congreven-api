'use strict'

const OrganizerBusiness = use('App/Business/OrganizerBusiness')

class OrganizerController {
  constructor() {
    this.organizerBusiness = new OrganizerBusiness();
  }

  async create({ request, response }) {
    const data = request.all()

    try {
      await this.organizerBusiness.create(data)

      response.send({
        message: 'Organizador cadastrado com sucesso.'
      })
    } catch (error) {
      response.status(400).send({
        message: 'Erro ao cadastrar organizador: ' + error
      })
      return;
    }
  }
}

module.exports = OrganizerController
