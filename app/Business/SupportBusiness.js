const Support = use('App/Models/Support')

class SupportBusiness {
  async create(data) {
    try {
      const support = await Support.create({
        event_id: data.event_id,
        cnpj_organizer: data.cnpj_organizer
      })

      return support
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = SupportBusiness;
