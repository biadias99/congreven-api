const Subscribe = use('App/Models/Subscribe')

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
}

module.exports = SubscribeBusiness;
