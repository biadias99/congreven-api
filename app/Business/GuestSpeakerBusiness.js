const GuestSpeaker = use('App/Models/GuestSpeaker')
const moment = use('moment')

class GuestSpeakerBusiness {
  async create(data) {
    try {
      const guestSpeaker = await GuestSpeaker.create({
        rg: data.rg,
        name: data.name,
        bdate: moment(data.bdate, 'YYYY-MM-DD').toDate(),
        scholarity: data.scholarity,
      })

      return guestSpeaker
    } catch (error) {
      throw new Error(error)
    }
  }

}

module.exports = GuestSpeakerBusiness;
