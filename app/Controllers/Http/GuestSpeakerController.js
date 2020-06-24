'use strict'

const GuestSpeakerBusiness = use('App/Business/GuestSpeakerBusiness')

class GuestSpeakerController {
  constructor() {
    this.guestSpeakerBusiness = new GuestSpeakerBusiness();
  }

  async create({ request, response }) {
    const data = request.all()

    try {
      await this.guestSpeakerBusiness.create(data)
      response.send({
        message: 'Palestrante cadastrado com sucesso.'
      })
    } catch (error) {
      response.status(400).send({
        message: 'Erro ao cadastrar palestrante: ' + error
      })
      return;
    }
  }
}

module.exports = GuestSpeakerController
