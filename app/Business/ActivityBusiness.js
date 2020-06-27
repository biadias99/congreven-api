const Activity = use('App/Models/Activity')
const moment = use('moment')
const GuestSpeakerBusiness = use('App/Business/GuestSpeakerBusiness')
class ActivityBusiness {
  constructor() {
    this.guestSpeakerBusiness = new GuestSpeakerBusiness();
  }

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
      const guestSpeakers = await this.guestSpeakerBusiness.getByActivityId(id)
      const activityWithGuestSpeakers = {
        activity,
        guestSpeakers: guestSpeakers[0]
      }
      return activityWithGuestSpeakers
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

  async getByEventId(event_id) {
    try {
      const activity = await Activity.query().where('event_id', event_id).fetch()
      return activity
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = ActivityBusiness;
