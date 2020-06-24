'use strict'

const NewsBusiness = use('App/Business/NewsBusiness')

class NewsController {
  constructor() {
    this.newsBusiness = new NewsBusiness();
  }

  async create({ request, response }) {
    const data = request.all()

    try {
      await this.newsBusiness.create(data)

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

module.exports = NewsController
