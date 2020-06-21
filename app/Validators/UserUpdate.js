'use strict'

class User {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      // validation rules
      name: 'required|min:3|max:80',
      // cpf: 'required|cpfValid',
      email: 'required|email'
    }
  }

  get messages() {
    return {
      "name.required": "O nome é um campo obrigatório",
      "name.min": "O nome precisa ter no mínimo 3 caracteres",
      "name.max": "O nome precisa ter no máximo 50 caracteres",
      // "cpf.required": "O cpf é um campo obrigatório",
      "email.required": "O e-mail é um campo obrigatório",
      "email.email": "Por favor, digite um e-mail válido"
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).send({
        message: errorMessages[0].message,
    });
  }
}

module.exports = User
