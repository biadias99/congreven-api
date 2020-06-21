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

  async update({ request, params, response }) {
    const { cpf } = params
    const user = await this.userBusiness.getByCpf(cpf)
    const data = request.all()

    if (user) {
      try {
        const userUpdate = await this.userBusiness.update(cpf, data, user)

        return userUpdate
      } catch (error) {
        response.status(400).send({
          message: 'Erro ao atualizar perfil do usuário:' + error
        })
        return
      }
    } else {
      response.status(400).send({
        message: 'Usuário não encontrado na base de dados.'
      });
      return
    }
  }

}

module.exports = UserController
