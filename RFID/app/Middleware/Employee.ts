import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import jwt from 'jsonwebtoken'

export default class Employee {
  public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL

    try {
      const token = request.headers().authorization?.split(" ")[1]

      if (!token) return response.status(401).json({ message: 'Unauthorized Access' })

      const decode = jwt.verify(token, `${process.env.EMPLOYEE}`)

      request.employee = decode

    } catch (error) {
      return response.status(401).json({ "message": "User is unauthorized" })
    }
    await next()
  }
}
