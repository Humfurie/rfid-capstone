import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import jwt from 'jsonwebtoken'

export default class Admin {
  public async handle({request, response}: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    try {
      const token = request.headers().authorization?.split(" ")[1]
      
      if (!token) return response.status(401).json({message: 'Unauthorized Access'})
      
      const decode = jwt.verify(token, 'maotClofel')

      request.admin = decode
    } catch (error) {
      console.log('error maot')
    }
    await next()
  }
}
