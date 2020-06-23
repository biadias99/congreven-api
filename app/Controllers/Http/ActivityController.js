'use strict'

const ActivityBusiness = use('App/Business/ActivityBusiness')

class ActivityController {
  constructor() {
    this.activityBusiness = new ActivityBusiness();
  }

  async create({ request, response }) {
    const data = request.all()

    try {
      await this.activityBusiness.create(data)
      response.send({
        message: 'Atividade cadastrada com sucesso.'
      })
    } catch (error) {
      response.status(400).send({
        message: 'Erro ao cadastrar atividade: ' + error
      })
      return;
    }
  }
}

module.exports = ActivityController
