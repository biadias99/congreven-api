'use strict'

const SubscribeBusiness = use('App/Business/SubscribeBusiness')

class SubscribeController {
  constructor() {
    this.subscribeBusiness = new SubscribeBusiness();
  }

  async create({ request, response }) {
    const data = request.all()

    try {
      await this.subscribeBusiness.create(data)

      response.send({
        message: 'Vinculado usuário com evento com sucesso'
      })
    } catch (error) {
      response.status(400).send({
        message: 'Erro ao vincular usuário com evento: ' + error
      })
      return;
    }
  }

  async delete({ request, response }) {
    const data = request.all()
    const subscribe = await this.subscribeBusiness.getByPk(data)

    if (subscribe) {
      try {
        await this.subscribeBusiness.delete(subscribe)

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

module.exports = SubscribeController
