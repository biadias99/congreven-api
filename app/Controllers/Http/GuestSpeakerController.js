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

  async update({ request, params, response }) {
    const { rg } = params
    const guestSpeaker = await this.guestSpeakerBusiness.getByRg(rg)
    const data = request.all()

    if (guestSpeaker) {
      try {
        const guestSpeakerUpdate = await this.guestSpeakerBusiness.update(rg, data, guestSpeaker)

        return guestSpeakerUpdate
      } catch (error) {
        response.status(400).send({
          message: 'Erro ao atualizar perfil do palestrante:' + error
        })
        return
      }
    } else {
      response.status(400).send({
        message: 'Palestrante não encontrado na base de dados.'
      });
      return
    }
  }
}

module.exports = GuestSpeakerController
