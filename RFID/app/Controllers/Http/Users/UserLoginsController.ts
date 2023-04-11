import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
import jwt from 'jsonwebtoken'
import UserLogin from 'App/Models/UserLogin'

export default class UserLoginsController {

  public async __invoke({ request, response }: HttpContextContract) {
    return response.status(200).json({ employee: request.employee })
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
      return response.status(400).json({ "message": "User not found!" })
      // const parentLogin = await UserLogin.query().where('username', username).where('flag', 1).firstOrFail()

      // if (!parentLogin) return response.status(401).json({ message: 'Unauthorized Access, User not found' })

      // const jwtAuth = {
      //   username: username
      // }

      // if (!await Hash.verify(parentLogin.password, password)) return response.status(401).json({ message: 'Unauthorized Access' })

      // try {
      // const token = jwt.sign(jwtAuth, `${process.env.STUDENT}`)

      // return response.status(200).send({
      //   token: token,
      //   data: { ...parentLogin },
      //   role: 'Parent'
      // })
      // } catch (error) {
      //   return response.status(401)
      // }
    }
    const jwtAuth = {
      username: username
    }
    
    if (!await Hash.verify(userLogin.password, password)) return response.status(401).json({ message: 'Unauthorized Access' })
    
    
    try {
      
      // console.log(userLogin.user.serialize())
      if (userLogin.user === null){
          const token = jwt.sign(jwtAuth, `${process.env.PARENT}`)
         
          return response.status(200).send({
            token: token,
            data: { ...userLogin },
            role: 'Parent'
          })
      }

      if (userLogin.user.role[0].role === 'Employee') {
        const token = jwt.sign(jwtAuth, `${process.env.EMPLOYEE}`)
        
        return response.status(200).send({
          token: token,
          data: { ...userLogin },
          role: userLogin.user.role[0].role
        })
      } else if (userLogin.user.role[0].role === 'Student') {
        const token = jwt.sign(jwtAuth, `${process.env.STUDENT}`)
        
        return response.status(200).send({
          token: token,
          data: { ...userLogin },
          role: userLogin.user.role[0].role
        })
      } 
    } catch (error) {
      console.log(error)
      return response.status(401)
    }
  }

}
