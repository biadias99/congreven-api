'use strict'

class ActivityUpdate {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      // validation rules
      name: 'required|min:3|max:30',
      period: 'required|min:3|max:30',
      date_activity: 'required',
      start_hour: 'required',
      end_hour: 'required'
    }
  }

  get messages() {
    return {
      "name.required": "O nome é um campo obrigatório",
      "name.min": "O nome precisa ter no mínimo 3 caracteres",
      "name.max": "O nome precisa ter no máximo 80 caracteres",
      "period.required": "O período é um campo obrigatório",
      "period.min": "O período precisa ter no mínimo 3 caracteres",
      "period.max": "O período precisa ter no máximo 30 caracteres",
      "date_activity.required": "A data da atividade é um campo obrigatório",
      "start_hour.required": "O horário de início é um campo obrigatório",
      "end_hour.required": "O horário de finalização é um campo obrigatório"
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).send({
        message: errorMessages[0].message,
    });
  }
}

module.exports = ActivityUpdate
