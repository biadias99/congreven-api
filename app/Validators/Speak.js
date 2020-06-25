'use strict'

class Speak {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      // validation rules
      rg_guest_speaker: 'required|exists:guest_speakers,rg',
      activity_id: 'required|exists:activities,id'
    }
  }

  get messages() {
    return {
      "rg.required": "O rg é um campo obrigatório",
      "rg.exists": "O rg não existe no banco de dados",
      "activity_id.required": "A atividade vinculada ao palestrante é um campo obrigatório",
      "activity_id.exists": "A atividade não existe no banco de dados"
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).send({
        message: errorMessages[0].message,
    });
  }
}

module.exports = Speak
