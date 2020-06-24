'use strict'

class GuestSpeakerUpdate {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      // validation rules
      name: 'required|min:3|max:80',
      bdate: 'required',
      scholarity: 'required|min:5|max:30',
    }
  }

  get messages() {
    return {
      "name.required": "O nome é um campo obrigatório",
      "name.min": "O nome precisa ter no mínimo 3 caracteres",
      "name.max": "O nome precisa ter no máximo 80 caracteres",
      "bdate.required": "A data de aniversário é um campo obrigatório",
      "scholarity.required": "A escolaridade é um campo obrigatório",
      "scholarity.min": "A escolaridade precisa ter no mínimo 5 caracteres",
      "scholarity.max": "A escolaridade precisa ter no máximo 30 caracteres",
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).send({
        message: errorMessages[0].message,
    });
  }
}

module.exports = GuestSpeakerUpdate
