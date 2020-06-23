const Activity = use('App/Models/Activity')
const moment = use('moment')

class ActivityBusiness {
  async create(data) {
    try {
      const activity = await Activity.create({
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
}

module.exports = ActivityBusiness;
