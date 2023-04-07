import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Employee from 'App/Models/Employee'
import User from 'App/Models/User'

export default class UserRegistrationController {
    //
    public async employeeRegistration({ request, response }: HttpContextContract) {
        const employee = request.input('employeeRegisration')


        const user = new User()
        user.firstname = employee.firstname
        user.middlename = employee.middlename
        user.lastname = employee.lastname
        user.birthday = employee.birthday
        user.gender = employee.gender
        user.address = employee.address
        user.email = employee.email
        user.contactNumber = employee.contactNumber
        user.facebook = employee.facebook

        const newEmployee = new Employee()
        

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

