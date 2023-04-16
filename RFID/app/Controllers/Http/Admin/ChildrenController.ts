import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class ChildrenController {
    public async index({ response }: HttpContextContract) {
       
        const user = await User.query().whereHas('role', role => {
            role.where('role', 'Student')
        }).where('flag', 1)
        .preload('profilePic')

        return response.status(200).json(user)
    }
}
