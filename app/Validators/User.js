'use strict'

class User {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      // validation rules
      name: 'required|min:3|max:80',
      cpf: 'unique:users|cpfValid',
      email: 'required|email|unique:users',
      password: 'required|min:6',
    }
  }

  get messages() {
    return {
      "name.required": "O nome é um campo obrigatório",
      "name.min": "O nome precisa ter no mínimo 3 caracteres",
      "name.max": "O nome precisa ter no máximo 50 caracteres",
      "cpf.required": "O cpf é um campo obrigatório",
      "cpf.unique": "CPF já cadastrado",
      "email.required": "O e-mail é um campo obrigatório",
      "email.email": "Por favor, digite um e-mail válido",
      "email.unique": "E-mail já cadastrado",
      "password.required": "A senha é um campo obrigatório",
      "password.min": "A senha precisa ter no mínimo 6 caracteres",
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).send({
        message: errorMessages[0].message,
    });
  }
}

module.exports = User
