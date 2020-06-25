const Speak = use('App/Models/Speak')

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
}

module.exports = SpeakBusiness;
