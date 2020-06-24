'use strict'

const NewsBusiness = use('App/Business/NewsBusiness')

class NewsController {
  constructor() {
    this.newsBusiness = new NewsBusiness();
  }

  async create({ request, response }) {
    const data = request.all()

    try {
      await this.newsBusiness.create(data)

      response.send({
        message: 'Notícia cadastrada com sucesso.'
      })
    } catch (error) {
      response.status(400).send({
        message: 'Erro ao cadastrar notícia: ' + error
      })
      return;
    }
  }

  // async update({ request, response }) {
  //   const data = request.all()
  //   const news = await this.newsBusiness.getByPk(data)

  //   if (news) {
  //     const validation = data.name != news.name &&
  //                        data.event_id != news.event_id &&
  //                        data.ndate != news.ndate

  //     if(validation) {
  //       try {
  //         const newsUpdate = await this.newsBusiness.update(data, news)

  //         return newsUpdate
  //       } catch (error) {
  //         response.status(400).send({
  //           message: 'Erro ao atualizar notícia:' + error
  //         })
  //         return
  //       }
  //     } else {
  //       response.status(400).send({
  //         message: 'Já existe uma notícia com estes dados.'
  //       });
  //       return
  //     }
  //   } else {
  //     response.status(400).send({
  //       message: 'Notícia não encontrada na base de dados.'
  //     });
  //     return
  //   }
  // }

  async delete({ request, response }) {
    const data = request.all()
    const news = await this.newsBusiness.getByPk(data)

    if (news) {
      try {
        await this.newsBusiness.delete(news)

        response.send({
          message: 'Notícia excluída com sucesso.'
        })
      } catch (error) {
        response.status(400).send({
          message: 'Erro ao excluir a notícia:' + error
        })
        return
      }
    } else {
      response.status(400).send({
        message: 'Notícia não encontrada na base de dados.'
      })
      return
    }
  }
}

module.exports = NewsController
