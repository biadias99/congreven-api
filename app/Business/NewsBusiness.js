const News = use('App/Models/News')
const moment = use('moment')

class NewsBusiness {
  async create(data) {
    try {
      const news = await News.create({
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

module.exports = NewsBusiness;
