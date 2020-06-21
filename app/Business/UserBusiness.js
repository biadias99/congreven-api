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

  async getByCpf(cpf) {
    try {
      const user = await User.findBy('cpf', cpf)
      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  async update(cpf, data, user) {
    try {
        user.merge({
          name: data.name
        })

        await user.save()

        const newUser = await User.findBy('cpf', cpf)

        return newUser
    } catch (error) {
      throw new Error(error)
    }
  }


}

module.exports = UserBusiness;
