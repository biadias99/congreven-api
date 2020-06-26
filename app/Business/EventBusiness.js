const Event = use('App/Models/Event')
const moment = use('moment')
const Database = use ('Database')
const OrganizerBusiness = use('App/Business/OrganizerBusiness')

class EventBusiness {
  constructor() {
    this.organizerBusiness = new OrganizerBusiness();
  }

  async create(data) {
    try {
      const event = await Event.create({
        name: data.name,
        address: data.address,
        start_date: moment(data.start_date, 'YYYY-MM-DD').toDate(),
        end_date: moment(data.end_date, 'YYYY-MM-DD').toDate(),
        description: data.description,
        cpf_owner: data.cpf_owner,
        owner_description: data.owner_description
      })

      return event
    } catch (error) {
      throw new Error(error)
    }
  }

  async getById(id) {
    try {
      const event = await Event.findBy('id', id)
      return event
    } catch (error) {
      throw new Error(error)
    }
  }

  async update(id, data, event) {
    try {
        event.merge({
          name: data.name,
          address: data.address,
          start_date: moment(data.start_date, 'YYYY-MM-DD').toDate(),
          end_date: moment(data.end_date, 'YYYY-MM-DD').toDate(),
          description: data.description,
          owner_description: data.owner_description
        })

        await event.save()

        const newEvent = await Event.findBy('id', id)

        return newEvent
    } catch (error) {
      throw new Error(error)
    }
  }

  async delete(event) {
    try {
      await event.delete()
      return
    } catch (error) {
      throw new Error(error)
    }
  }

  async get() {
    try {
      const events = await Event.all()
      return events
    } catch (error) {
      throw new Error(error)
    }
  }

  async getById(id) {
    try {
      const event = await Event.findBy('id', id)
      const organizers = await this.organizerBusiness.getByEventId(id)
      const eventWithOrganizers = {
        event,
        organizers: organizers[0]
      }

      return eventWithOrganizers
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = EventBusiness;
