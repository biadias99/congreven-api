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

  async update({ request, params, response }) {
    const { id } = params
    const activity = await this.activityBusiness.getById(id)
    const data = request.all()

    if (activity) {
      try {
        const activityUpdate = await this.activityBusiness.update(id, data, activity)

        return activityUpdate
      } catch (error) {
        response.status(400).send({
          message: 'Erro ao atualizar atividade:' + error
        })
        return
      }
    } else {
      response.status(400).send({
        message: 'Atividade não encontrado na base de dados.'
      });
      return
    }
  }

  async delete({ params, response }) {
    const { id } = params
    const activity = await this.activityBusiness.getById(id)

    if (activity) {
      try {
        await this.activityBusiness.delete(activity)

        response.send({
          message: 'Atividade excluída com sucesso.'
        })
      } catch (error) {
        response.status(400).send({
          message: 'Erro ao excluir a atividade:' + error
        })
        return
      }
    } else {
      response.status(400).send({
        message: 'Atividade não encontrado na base de dados.'
      })
      return
    }
  }

  async getById({ response, params }) {
    const { id } = params;

    const activity = await this.activityBusiness.getById(id);
    try {
        if (activity) {
          return activity;
        } else {
            response.send({
              message: 'Atividade não encontrada na base de dados.'
            });
        }
    } catch (error) {
      response.status(400).send({
        message: 'Erro ao buscar atividade:' + error
      })
    }
  }

  async getByEventId({ response, params }) {
    const { id } = params;

    const activity = await this.activityBusiness.getByEventId(id);

    try {
        if (activity.rows[0]) {
          return activity;
        } else {
            response.send({
              message: 'Não existe nenhuma atividade vinculada a este evento.'
            });
        }
    } catch (error) {
      response.status(400).send({
        message: 'Erro ao buscar atividade:' + error
      })
    }
  }

}

module.exports = ActivityController
