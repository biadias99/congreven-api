'use strict'

class News {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      // validation rules
      name: 'required|min:5|max:80',
      description: 'required|min:10|max:100',
      ndate: 'required',
      event_id: 'required|exists:events,id'
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
      "ndate.required": "A data da notícia é um campo obrigatório",
      "event_id.required": "O evento vinculado a notícia é um campo obrigatório",
      "event_id.exists": "O evento não existe no banco de dados"
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).send({
        message: errorMessages[0].message,
    });
  }
}

module.exports = News
