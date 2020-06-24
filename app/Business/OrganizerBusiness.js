const Organizer = use('App/Models/Organizer')

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
}

module.exports = OrganizerBusiness;
