'use strict'
const UserBusiness = use('App/Business/UserBusiness')

class UserController {
  constructor() {
    this.userBusiness = new UserBusiness();
  }

  async login ({ auth, request }) {
    const { email, password } = request.all()
    await auth.attempt(email, password)

    return 'Login realizado com sucesso.'
  }

  async register({ request, response }) {
    const data = request.all()

    try {
      await this.userBusiness.create(data)
      response.send({
        message: "Cadastro realizado com sucesso."
      });
    } catch (error) {
      response.status(400).send({
        message: "Erro ao cadastrar usuário: " + error
      });
      return;
    }
  }
}

module.exports = UserController
