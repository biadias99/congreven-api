'use strict'

class OrganizerUpdate {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      // validation rules
      name: 'required|min:3|max:50',
      description: 'required|min:10|max:100'
    }
  }

  get messages() {
    return {
      "name.required": "O nome é um campo obrigatório",
      "name.min": "O nome precisa ter no mínimo 3 caracteres",
      "name.max": "O nome precisa ter no máximo 80 caracteres",
      "description.required": "A descrição é um campo obrigatório",
      "description.min": "A descrição precisa ter no mínimo 10 caracteres",
      "description.max": "A descrição precisa ter no máximo 100 caracteres",
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).send({
        message: errorMessages[0].message,
    });
  }
}

module.exports = OrganizerUpdate
