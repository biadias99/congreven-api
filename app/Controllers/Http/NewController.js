'use strict'

const NewBusiness = use('App/Business/NewBusiness')

class NewController {
  constructor() {
    this.newBusiness = new NewBusiness();
  }

  async create({ request, response }) {
    const data = request.all()

    try {
      await this.newBusiness.create(data)

      response.send({
        message: 'Notícia cadastrada com sucesso.'
      })
    } catch (error) {
      response.status(400).send({
        message: 'Erro ao cadastrar notícia: ' + error
      })
      return;
    }
  }
}

module.exports = NewController
