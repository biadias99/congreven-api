'use strict'
const UserBusiness = use('App/Business/UserBusiness')
const User = use('App/Models/User');

class UserController {
  constructor() {
    this.userBusiness = new UserBusiness();
  }

  // async login ({ auth, request }) {
  //   const { email, password } = request.all()
  //   await auth.attempt(email, password)

  //   response.send({
  //     message: 'Login realizado com sucesso.'
  //   });
  // }

  async login({ request, auth }) {
    const { email, password } = request.all()
    let user = await User.findBy('email', email);
    let token = await auth.withRefreshToken().attempt(email, password);
    //let token = await auth.attempt(email, password);
    token.user = user;
    token.expires_in = 86400000;

    return token;
  }

  async logout({ auth, response }) {
    try {
      const check = await auth.check()
      if (check) {
        await auth.user
          .tokens()
          .where('type', 'jwt_refresh_token')
          .update({ is_revoked: true })
      }
    } catch (error) {
      response.status(401).send({
        message: 'JWT inválido ou inexistente.' + error
      });
    }
  }

  async register({ request, response }) {
    const data = request.all()

    try {
      await this.userBusiness.create(data)
      response.send({
        message: 'Cadastro realizado com sucesso.'
      });
    } catch (error) {
      response.status(400).send({
        message: 'Erro ao cadastrar usuário: ' + error
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
