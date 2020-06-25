'use strict'

const SpeakBusiness = use('App/Business/SpeakBusiness')

class SpeakController {
  constructor() {
    this.speakBusiness = new SpeakBusiness();
  }

  async create({ request, response }) {
    const data = request.all()

    try {
      await this.speakBusiness.create(data)

      response.send({
        message: 'Palestrante vinculado a atividade com sucesso.'
      })
    } catch (error) {
      response.status(400).send({
        message: 'Erro ao vincular palestrante a atividade: ' + error
      })
      return;
    }
  }

}

module.exports = SpeakController
