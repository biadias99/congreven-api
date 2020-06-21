const User = use('App/Models/User')

class UserBusiness {
  async create(data) {
    try {
      const user = await User.create({
        name: data.name,
        cpf: data.cpf,
        email: data.email,
        password: data.password
      })

      return user
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = UserBusiness;
