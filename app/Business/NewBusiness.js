const New = use('App/Models/New')
const moment = use('moment')

class NewBusiness {
  async create(data) {
    try {
      const news = await New.create({
        name: data.name,
        description: data.description,
        ndate: moment(data.ndate, 'YYYY-MM-DD').toDate(),
        event_id: data.event_id,
      })

      return news
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = NewBusiness;
