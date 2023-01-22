import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
import jwt from 'jsonwebtoken'
import UserLogin from 'App/Models/UserLogin'

export default class UserLoginsController {
    public async login({ request, response }: HttpContextContract) {
        const username = request.input('username')
        const password = request.input('password')
        const user = await UserLogin.query().where('username', username).first()
        
        const jwtAuth = {
          username: username
        }
        
        if (!user) return response.status(401).json({ message: 'Unauthorized Access' })
        console.log( 'haihai')
        if (!await Hash.verify(user.password, password)) return response.status(401).json({ message: 'Unauthorized Access' })
    
        try {
          const token = await jwt.sign(jwtAuth, 'maotClofel', { expiresIn: '30 mins' })
          // let jwtCookie = `JWT=${token}; Domain=${"localhost"}`
    
          // if (request.input('remember')) {
          //   jwtCookie = `${jwtCookie} Max-Age=361560000`
          // }
          console.log(token, 'token')
          return response.status(200).send({
            token: token,
            data: { ...user }
          })
        } catch (error) {
          return response.redirect("/")  
        }
      }
}