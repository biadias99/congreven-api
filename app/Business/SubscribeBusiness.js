const Subscribe = use('App/Models/Subscribe')
const Database = use('Database')

class SubscribeBusiness {
  async create(data) {
    try {
      const subscribe = await Subscribe.create({
        event_id: data.event_id,
        cpf_user: data.cpf_user
      })

      return subscribe
    } catch (error) {
      throw new Error(error)
    }
  }

  async getByPk(data) {
    try {
      const subscribe = await Subscribe
        .query()
        .where('event_id', data.event_id)
        .where('cpf_user', data.cpf_user)
        .first()

      return subscribe
    } catch (error) {
      throw new Error(error)
    }
  }

  async delete(subscribe) {
    try {
      await Database
        .raw('delete from subscribes where event_id = ? and cpf_user = ?',
          [subscribe.event_id, subscribe.cpf_user])
      return
    } catch (error) {
      throw new Error(error)
    }
  }

  async getByCpfUser(cpf_user) {
    try {
      const events = await Database
        .raw('select u.cpf cpf_user, e.name, e.start_date, e.end_date, e.description, e.id, e.address ' +
          'from events e, subscribes s, users u where e.id = s.event_id and u.cpf = s.cpf_user and s.cpf_user = ?',
          [cpf_user])
      return events[0]
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = SubscribeBusiness;
