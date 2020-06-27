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

  async update({ request, params, response }) {
    const { cnpj } = params
    const organizer = await this.organizerBusiness.getByCnpj(cnpj)
    const data = request.all()

    if (organizer) {
      try {
        const organizerUpdate = await this.organizerBusiness.update(cnpj, data, organizer)

        return organizerUpdate
      } catch (error) {
        response.status(400).send({
          message: 'Erro ao atualizar perfil do organizador:' + error
        })
        return
      }
    } else {
      response.status(400).send({
        message: 'Organizador não encontrado na base de dados.'
      });
      return
    }
  }

  async get({ response }) {
    try {
      const organizers = await this.organizerBusiness.get()

      return organizers
    } catch (error) {
      response.status(400).send({
        message: 'Erro ao buscar organizadores: ' + error
      })
      return;
    }
  }
}

module.exports = OrganizerController
