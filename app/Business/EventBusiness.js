const Event = use('App/Models/Event')
const moment = use('moment')

class EventBusiness {
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
}

module.exports = EventBusiness;
