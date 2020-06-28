const Support = use('App/Models/Support')
const Database = use('Database')

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

  async createMany(data) {
    try {
      const support = await Support.createMany(data)

      return support
    } catch (error) {
      throw new Error(error)
    }
  }

  async getByPk(data) {
    try {
      const support = await Support
                          .query()
                          .where('event_id', data.event_id)
                          .where('cnpj_organizer', data.cnpj_organizer)
                          .first()

      return support
    } catch (error) {
      throw new Error(error)
    }
  }

  async delete(news) {
    try {
      await Database
          .raw('delete from supports where event_id = ? and cnpj_organizer = ?',
          [news.event_id, news.cnpj_organizer])
      return
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = SupportBusiness;
