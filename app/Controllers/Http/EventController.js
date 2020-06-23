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
      })
    } catch (error) {
      response.status(400).send({
        message: 'Erro ao cadastrar evento: ' + error
      })
      return;
    }
  }

  async update({ request, params, response }) {
    const { id } = params
    const event = await this.eventBusiness.getById(id)
    const data = request.all()

    if (event) {
      try {
        const eventUpdate = await this.eventBusiness.update(id, data, event)

        return eventUpdate
      } catch (error) {
        response.status(400).send({
          message: 'Erro ao atualizar evento:' + error
        })
        return
      }
    } else {
      response.status(400).send({
        message: 'Evento não encontrado na base de dados.'
      })
      return
    }
  }

  async delete({ request, params, response }) {
    const { id } = params
    const event = await this.eventBusiness.getById(id)

    if (event) {
      try {
        await this.eventBusiness.delete(event)

        response.send({
          message: 'Evento excluído com sucesso.'
        })
      } catch (error) {
        response.status(400).send({
          message: 'Erro ao excluir o evento:' + error
        })
        return
      }
    } else {
      response.status(400).send({
        message: 'Evento não encontrado na base de dados.'
      })
      return
    }
  }

  async get({ response }) {
    try {
      const events = await this.eventBusiness.get()

      return events
    } catch (error) {
      response.status(400).send({
        message: 'Erro ao buscar eventos: ' + error
      })
      return;
    }
  }
}

module.exports = EventController
