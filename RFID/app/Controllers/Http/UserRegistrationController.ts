import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UserRegistrationController {
    //
    public async employeeRegistration({ request, response }: HttpContextContract) {
        const employee = request.input('employeeRegisration')

        const user = new User()
        

        return response.status(200)
    }
    public async studentRegistration({ request, response }: HttpContextContract) {
        const student = request.input('studentRegistration')

        return response.status(200)
    }
    public async parentRegistration({request, response }: HttpContextContract) {
        const parent = request.input('parentRegistration')

        return response.status(200)
    }
}
