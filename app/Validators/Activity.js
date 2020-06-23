'use strict'

class Activity {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      // validation rules
      period: 'required|min:3|max:30',
      date_activity: 'required',
      start_hour: 'required',
      end_hour: 'required',
      event_id: 'required'
    }
  }

  get messages() {
    return {
      "period.required": "O período é um campo obrigatório",
      "period.min": "O período precisa ter no mínimo 3 caracteres",
      "period.max": "O período precisa ter no máximo 30 caracteres",
      "date_activity.required": "A data da atividade é um campo obrigatório",
      "start_hour.required": "O horário de início é um campo obrigatório",
      "end_hour.required": "O horário de finalização é um campo obrigatório",
      "event_id.required": "O evento vinculado a atividade é um campo obrigatório",
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).send({
        message: errorMessages[0].message,
    });
  }
}

module.exports = Activity
