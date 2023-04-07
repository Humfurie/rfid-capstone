import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
import jwt from 'jsonwebtoken'
import UserLogin from 'App/Models/UserLogin'

export default class UserLoginsController {

  public async __invoke({ request, response }: HttpContextContract) {
    return response.status(200).json({ user: request.user })
  }

  public async login({ request, response }: HttpContextContract) {
    const username = request.input('username')
    const password = request.input('password')

    const userLogin = await UserLogin.query()
      .preload('user', (user) => {
        user.preload('role')
      })
      .where('username', username)
      .where('flag', 1)
      .firstOrFail()

    console.log(userLogin.serialize())

    if (!userLogin) {
      return response.status(401).json({ "message": "User not found!" })
    }

    const jwtAuth = {
      username: username
    }

    if (!userLogin) return response.status(401).json({ message: 'Unauthorized Access, User not found' })

    if (!await Hash.verify(userLogin.password, password)) return response.status(401).json({ message: 'Unauthorized Access' })

    try {

      /**
       * using jsonwebtoken authentication and authorization
       */
      const token = jwt.sign(jwtAuth, 'userStudent')
      // let jwtCookie = `JWT=${token}; Domain=${"localhost"}`

      // if (request.input('remember')) {
      //   jwtCookie = `${jwtCookie} Max-Age=361560000`
      // }
      return response.status(200).send({
        token: token,
        data: { ...userLogin },
        role: userLogin.user.role[0].role
      })
    } catch (error) {
      return response.status(401)
    }
  }

}
