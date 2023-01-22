import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Admin from 'App/Models/Admin'
import AdminValidator from 'App/Validators/AdminValidator'
import Hash from '@ioc:Adonis/Core/Hash'
import jwt from 'jsonwebtoken'

export default class AdminsController {
  public async index({ }: HttpContextContract) { }

  public async create({ request, response }: HttpContextContract) {
    console.log("nasave")
    const validated = await request.validate(AdminValidator)


    await Admin.create({
      username: validated.username,
      email: validated.email,
      password: validated.password
    })

    const admin = await Admin.query().where('email', validated.email).first()
    const tokenAuth = {
      email: validated.email
    }

    if (!admin) {
      return response.status(401).json({ message: 'Unauthorized' })
    }

    if (!await Hash.verify(admin.password, validated.password)) {
      return response.status(401).json({ message: 'Unauthorized Access' })
    }

    try {
      const token = jwt.sign(tokenAuth, 'maotClofel', { expiresIn: '30 mins' })
      // let jwtCookie = `JWT=${token}; Domain=${"localhost"}`

      // if (request.input('remember')) {
      //   jwtCookie = `${jwtCookie} Max-Age=361560000`
      // }
      return response.status(200).send({
        token: token,
        data: { ...admin }
      })
    } catch (error) {
      return response.redirect("/")
    }
  }

  public async invoke({ request, response }: HttpContextContract) {
    return response.status(200).json({ admin: request.admin })
  }

  public async login({ request, response }: HttpContextContract) {
    const username = request.input('username')
    const password = request.input('password')
    const admin = await Admin.query().where('username', username).first()
    
    const jwtAuth = {
      username: username
    }
    
    if (!admin) return response.status(401).json({ message: 'Unauthorized Access' })
    console.log( 'haihai')
    if (!await Hash.verify(admin.password, password)) return response.status(401).json({ message: 'Unauthorized Access' })

    try {
      const token = await jwt.sign(jwtAuth, 'maotClofel', { expiresIn: '30 mins' })
      // let jwtCookie = `JWT=${token}; Domain=${"localhost"}`

      // if (request.input('remember')) {
      //   jwtCookie = `${jwtCookie} Max-Age=361560000`
      // }
      console.log(token, 'token')
      return response.status(200).send({
        token: token,
        data: { ...admin }
      })
    } catch (error) {
      return response.redirect("/")

    }


  }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
