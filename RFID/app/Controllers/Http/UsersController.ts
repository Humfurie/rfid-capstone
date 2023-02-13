import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'


export default class UsersController {
    public async userLogin({ }: HttpContextContract) {
    }

    public async employeeIndex({ response }: HttpContextContract) { 

        const user = await User.query()
        .whereHas('userLogin', (builder) => {
            builder.where('role', 'employee');
        })

        console.log(user)
        if (!user) {
            return response.status(401).json({ 'Message': 'Data not found!' })
        }

        return response.status(200).json({ user })
    }

    public async studentIndex({ response }: HttpContextContract) { 

        const user = await User.query()
        .whereHas('userLogin', (builder) => {
            builder.where('role', 'student');
        })

        console.log(user)
        if (!user) {
            return response.status(401).json({ 'Message': 'Data not found!' })
        }

        return response.status(200).json({ user })
    }

    public async parentIndex({ response }: HttpContextContract) { 

        const user = await User.query()
        .whereHas('userLogin', (builder) => {
            builder.where('role', 'parent');
        })

        console.log(user)
        if (!user) {
            return response.status(401).json({ 'Message': 'Data not found!' })
        }

        return response.status(200).json({ user })
    }
}
