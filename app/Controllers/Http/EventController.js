'use strict'

const EventBusiness = use('App/Business/EventBusiness')

class EventController {
  constructor() {
    this.eventBusiness = new EventBusiness();
  }

  async create({ request, response }) {
    const data = request.all()

    try {
      await this.eventBusiness.create(data)
      response.send({
        message: 'Evento cadastrado com sucesso.'
      });
    } catch (error) {
      response.status(400).send({
        message: 'Erro ao cadastrar evento: ' + error
      });
      return;
    }
  }
}

module.exports = EventController
