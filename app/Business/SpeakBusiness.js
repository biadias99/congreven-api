const Speak = use('App/Models/Speak')
const Database = use('Database')

class SpeakBusiness {
  async create(data) {
    try {
      const speak = await Speak.create({
        rg_guest_speaker: data.rg_guest_speaker,
        activity_id: data.activity_id
      })

      return speak
    } catch (error) {
      throw new Error(error)
    }
  }

  async getByPk(data) {
    try {
      const speak = await Speak
                          .query()
                          .where('rg_guest_speaker', data.rg_guest_speaker)
                          .where('activity_id', data.activity_id)
                          .first()

      return speak
    } catch (error) {
      throw new Error(error)
    }
  }

  async delete(speak) {
    try {
      await Database
          .raw('delete from speaks where rg_guest_speaker = ? and activity_id = ?',
          [speak.rg_guest_speaker, speak.activity_id])
      return
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = SpeakBusiness;
