const Organizer = use('App/Models/Organizer')
const Database = use('Database')
class OrganizerBusiness {
  async create(data) {
    try {
      const organizer = await Organizer.create({
        name: data.name,
        cnpj: data.cnpj,
        description: data.description
      })

      return organizer
    } catch (error) {
      throw new Error(error)
    }
  }

  async getByCnpj(cnpj) {
    try {
      const organizer = await Organizer.findBy('cnpj', cnpj)
      return organizer
    } catch (error) {
      throw new Error(error)
    }
  }

  async update(cnpj, data, organizer) {
    try {
        organizer.merge({
          name: data.name,
          description: data.description
        })

        await organizer.save()

        const newOrganizer = await Organizer.findBy('cnpj', cnpj)

        return newOrganizer
    } catch (error) {
      throw new Error(error)
    }
  }

  async get() {
    try {
      const organizers = await Organizer.all()
      return organizers
    } catch (error) {
      throw new Error(error)
    }
  }

  async getByEventId(event_id) {
    try {
      const organizers = await Database
      .raw('select o.name, o.cnpj, o.description from organizers o join supports s on o.cnpj = s.cnpj_organizer where s.event_id = ?',
      [event_id])
      return organizers
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = OrganizerBusiness;
