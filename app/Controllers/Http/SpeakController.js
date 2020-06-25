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

  async delete({ request, response }) {
    const data = request.all()
    const speak = await this.speakBusiness.getByPk(data)

    if (speak) {
      try {
        await this.speakBusiness.delete(speak)

        response.send({
          message: 'Vinculação excluída com sucesso.'
        })
      } catch (error) {
        response.status(400).send({
          message: 'Erro ao excluir a vinculação:' + error
        })
        return
      }
    } else {
      response.status(400).send({
        message: 'Vinculação não encontrada na base de dados.'
      })
      return
    }
  }

}

module.exports = SpeakController
