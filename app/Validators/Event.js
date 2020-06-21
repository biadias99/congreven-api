'use strict'

class Event {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      // validation rules
      name: 'required|min:3|max:50',
      address: 'required|min:3|max:80',
      start_date: 'required',
      end_date: 'required',
      description: 'required|min:10|max:100',
      cpf_owner: 'required|cpfValid',
      owner_description: 'required|min:10|max:100'
    }
  }

  get messages() {
    return {
      "name.required": "O nome é um campo obrigatório",
      "name.min": "O nome precisa ter no mínimo 3 caracteres",
      "name.max": "O nome precisa ter no máximo 50 caracteres",
      "address.required": "O endereço é um campo obrigatório",
      "address.min": "O endereço precisa ter no mínimo 3 caracteres",
      "address.max": "O endereço precisa ter no máximo 80 caracteres",
      "start_date.required": "A data de início é um campo obrigatório",
      "end_date.required": "A data de finalização é um campo obrigatório",
      "description.required": "A descrição é um campo obrigatório",
      "description.min": "A descrição precisa ter no mínimo 10 caracteres",
      "description.max": "A descrição precisa ter no máximo 100 caracteres",
      "cpf.required": "O cpf é um campo obrigatório",
      "owner_description.required": "A descrição do idealizador é um campo obrigatório",
      "owner_description.min": "A descrição do idealizador precisa ter no mínimo 10 caracteres",
      "owner_description.max": "A descrição do idealizador precisa ter no máximo 100 caracteres",
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).send({
        message: errorMessages[0].message,
    });
  }
}

module.exports = Event
