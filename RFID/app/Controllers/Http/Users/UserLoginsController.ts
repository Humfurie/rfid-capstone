import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
import jwt from 'jsonwebtoken'
import UserLogin from 'App/Models/UserLogin'
import User from 'App/Models/User'
import Parent from 'App/Models/Parent'

export default class UserLoginsController {

  public async __employeeInvoke({ request, response }: HttpContextContract) {
    const user = await User.query().whereHas('role', (role) => {
      role.where('role', 'Employee')
    })
      .whereHas('userLogin', (userLogin) => {
        userLogin.where('username', request.employee.username)
      })
      .where('flag', 1)
      .preload('activity', activity => {
        activity.preload('user')
      })
      .preload('emergencyContact')
      .preload('position')
      .preload('profilePic')
      .firstOrFail()

    return response.status(200).json(user)
  }

  public async __studentInvoke({ request, response }: HttpContextContract) {
    const user = await User.query().whereHas('role', (role) => {
      role.where('role', 'Student')
    }).where('flag', 1)
      .whereHas('userLogin', (userLogin) => {
        userLogin.where('username', request.student.username)
      })
      .preload('activity', activity => {
        activity.preload('user')
      })
      .preload('emergencyContact')
      .preload('yearLevel')
      .preload('profilePic')
      .firstOrFail()
    return response.status(200).json(user)
  }

  public async __parentInvoke({ request, response }: HttpContextContract) {
    const user = await Parent.query().whereHas('userLogin', (userLogin) => {
      userLogin.where('username', request.parent.username)
    }).preload('profilePic')
      .preload('user', user => {
        user.preload('activity')
      })
      .where('flag', 1)
      .firstOrFail()

    return response.status(200).json(user)
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

    if (!userLogin) {
      return response.status(400).json({ "message": "User not found!" })
    }
    const jwtAuth = {
      username: username
    }

    if (!await Hash.verify(userLogin.password, password)) return response.status(401).json({ message: 'Unauthorized Access' })


    try {

      if (userLogin.user === null) {
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
