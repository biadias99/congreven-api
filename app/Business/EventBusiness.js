const Event = use('App/Models/Event')
const moment = use('moment')
const OrganizerBusiness = use('App/Business/OrganizerBusiness')
const SubscribeBusiness = use('App/Business/SubscribeBusiness')
const SupportBusiness = use('App/Business/SupportBusiness')

class EventBusiness {
  constructor() {
    this.organizerBusiness = new OrganizerBusiness();
    this.subscribeBusiness = new SubscribeBusiness();
    this.supportBusiness = new SupportBusiness();
  }

  async create(data) {
    try {
      const event = await Event.create({
        name: data.name,
        address: data.address,
        start_date: moment(data.start_date, 'YYYY-MM-DD hh:mm').toDate(),
        end_date: moment(data.end_date, 'YYYY-MM-DD hh:mm').toDate(),
        description: data.description,
        cpf_owner: data.cpf_owner,
        owner_description: data.owner_description
      })

      if (data.organizers[0]) {
        let organizers = [];

        for await (let i of data.organizers) {
          organizers.push({
            event_id: event.id,
            cnpj_organizer: i
          })
        }

        await this.supportBusiness.createMany(organizers)
      }


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
        start_date: moment(data.start_date, 'YYYY-MM-DD hh:mm').toDate(),
        end_date: moment(data.end_date, 'YYYY-MM-DD hh:mm').toDate(),
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

  async getCompleteById(id) {
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

  async getByCpfOwner(cpf_owner) {
    try {
      const events = await Event.query().where('cpf_owner', cpf_owner).fetch()
      return events
    } catch (error) {
      throw new Error(error)
    }
  }

  async getByCpfUser(cpf_user) {
    try {
      const subscribe = await this.subscribeBusiness.getByCpfUser(cpf_user)
      //continuar aqui
      return subscribe
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = EventBusiness;
