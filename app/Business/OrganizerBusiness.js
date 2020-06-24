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
}

module.exports = OrganizerBusiness;
