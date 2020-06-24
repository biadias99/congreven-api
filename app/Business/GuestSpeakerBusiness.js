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

  async getByRg(rg) {
    try {
      const guestSpeaker = await GuestSpeaker.findBy('rg', rg)
      return guestSpeaker
    } catch (error) {
      throw new Error(error)
    }
  }

  async update(rg, data, guestSpeaker) {
    try {
        guestSpeaker.merge({
          name: data.name,
          scholarity: data.scholarity,
          bdate: moment(data.bdate, 'YYYY-MM-DD').toDate()
        })

        await guestSpeaker.save()

        const newGuestSpeaker = await GuestSpeaker.findBy('rg', rg)

        return newGuestSpeaker
    } catch (error) {
      throw new Error(error)
    }
  }

}

module.exports = GuestSpeakerBusiness;
