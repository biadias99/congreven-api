const News = use('App/Models/News')
const moment = use('moment')
const Database = use('Database')
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

  async getByPk(data) {
    try {
      const news = await News
        .query()
        .where('name', data.name)
        .where('ndate', moment(data.ndate, 'YYYY-MM-DD').toDate())
        .where('event_id', data.event_id)
        .first()

      return news
    } catch (error) {
      throw new Error(error)
    }
  }

  // async update(data, news) {
  //   try {
  //       // No lugar de dar update em chave primária o que não é uma prática legal,
  //       // eu decidi excluir e salvar novamente

  //       const newsUpdate = await News.create({
  //         name: data.name,
  //         description: data.description,
  //         ndate: moment(data.ndate, 'YYYY-MM-DD').toDate(),
  //         event_id: data.event_id,
  //       })

  //       if(newsUpdate) {
  //         await Database
  //         .raw('delete from news where name = ?, ndate = ? and event_id = ?', [news.name, news.ndate, news.event_id])
  //       }

  //       return newsUpdate
  //   } catch (error) {
  //     throw new Error(error)
  //   }
  // }

  async delete(news) {
    try {
      await Database
        .raw('delete from news where name = ? and ndate = ? and event_id = ?',
          [news.name, moment(news.ndate, 'YYYY-MM-DD').toDate(), news.event_id])
      return
    } catch (error) {
      throw new Error(error)
    }
  }

  async getByEventId(event_id) {
    try {
      const news = await News.query().where('event_id', event_id).orderBy('ndate', 'asc').fetch()
      return news
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = NewsBusiness;
