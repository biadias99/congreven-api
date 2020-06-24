const Activity = use('App/Models/Activity')
const moment = use('moment')

class ActivityBusiness {
  async create(data) {
    try {
      const activity = await Activity.create({
        name: data.name,
        period: data.period,
        date_activity: moment(data.date_activity, 'YYYY-MM-DD').toDate(),
        start_hour: data.start_hour,
        end_hour: data.end_hour,
        event_id: data.event_id
      })

      return activity
    } catch (error) {
      throw new Error(error)
    }
  }

  async getById(id) {
    try {
      const activity = await Activity.findBy('id', id)
      return activity
    } catch (error) {
      throw new Error(error)
    }
  }

  async update(id, data, activity) {
    try {
        activity.merge({
          name: data.name,
          period: data.period,
          date_activity: moment(data.date_activity, 'YYYY-MM-DD').toDate(),
          start_hour: data.start_hour,
          end_hour: data.end_hour,
        })

        await activity.save()

        const newActivity = await Activity.findBy('id', id)

        return newActivity
    } catch (error) {
      throw new Error(error)
    }
  }

  async delete(activity) {
    try {
      await activity.delete()
      return
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = ActivityBusiness;
