'use strict'

const SupportBusiness = use('App/Business/SupportBusiness')

class SupportController {
  constructor() {
    this.supportBusiness = new SupportBusiness();
  }

  async create({ request, response }) {
    const data = request.all()

    try {
      await this.supportBusiness.create(data)

      response.send({
        message: 'Organizador vinculado ao evento com sucesso.'
      })
    } catch (error) {
      response.status(400).send({
        message: 'Erro ao vincular organizador ao evento: ' + error
      })
      return;
    }
  }

  async delete({ request, response }) {
    const data = request.all()
    const support = await this.supportBusiness.getByPk(data)

    if (support) {
      try {
        await this.supportBusiness.delete(support)

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

module.exports = SupportController
