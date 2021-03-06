'use strict'

class Support {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      // validation rules
      event_id: 'required|exists:events,id',
      cnpj_organizer: 'required|cnpjValid|exists:organizers,cnpj'
    }
  }

  get messages() {
    return {
      "cnpj_organizer.required": "O CNPJ do organizador é um campo obrigatório",
      "event_id.required": "O evento vinculado a notícia é um campo obrigatório",
      "event_id.exists": "O evento não existe no banco de dados",
      "cnpj_organizer.exists": "O cnpj não existe no banco de dados"
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).send({
        message: errorMessages[0].message,
    });
  }
}

module.exports = Support
