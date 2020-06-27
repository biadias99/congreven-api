const GuestSpeaker = use('App/Models/GuestSpeaker')
const moment = use('moment')
const Database = use('Database')

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

  async get() {
    try {
      const guestSpeaker = await GuestSpeaker.all()
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

  async getByActivityId(activity_id) {
    try {
      const guestSpeakers = await Database
      .raw('select gs.rg, gs.name from guest_speakers gs, speaks s where gs.rg = s.rg_guest_speaker and s.activity_id = ?',
      [activity_id])
      return guestSpeakers
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = GuestSpeakerBusiness;
