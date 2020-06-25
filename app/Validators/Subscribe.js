'use strict'

class Subscribe {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      // validation rules
      event_id: 'required|exists:events,id',
      cpf_user: 'required|cpfValid|exists:users,cpf'
    }
  }

  get messages() {
    return {
      "event_id.required": "O evento vinculado a notícia é um campo obrigatório",
      "event_id.exists": "O evento não existe no banco de dados",
      "cpf_user.exists": "O cpf não existe no banco de dados",
      "cpf_user.required": "O cpf do usuário é um campo obrigatório"
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).send({
        message: errorMessages[0].message,
    });
  }
}

module.exports = Subscribe
