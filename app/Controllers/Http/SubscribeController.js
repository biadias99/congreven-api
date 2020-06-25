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
}

module.exports = SubscribeController
