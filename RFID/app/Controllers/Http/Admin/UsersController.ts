import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Parent from 'App/Models/Parent';
import User from 'App/Models/User'


export default class UsersController {
    public async userLogin({ }: HttpContextContract) {
    }

    /**
     * 
     * @returns all employee
     */
    public async employeeIndex({ response }: HttpContextContract) { 

        const user = await User.query()
        .whereHas('role', (builder) => {
            builder.where('role', 'Employee');
        }).where('flag', 1)

        console.log(user)
        if (!user) {
            return response.status(401).json({ 'Message': 'Data not found!' })
        }

        return response.status(200).json({ user })
    }

    /**
     *  
     * @returns all student
     */
    public async studentIndex({ response }: HttpContextContract) { 

        const user = await User.query()
        .whereHas('role', (builder) => {
            builder.where('role', 'Student');
        }).where('flag', 1)

        console.log(user)
        if (!user) {
            return response.status(401).json({ 'Message': 'Data not found!' })
        }

        return response.status(200).json({ user })
    }

    /**
     * 
     * @returns all parents
     */
    public async parentIndex({ response }: HttpContextContract) { 

        const user = await Parent.query().where('flag', 1)

        console.log(user)
        if (!user) {
            return response.status(401).json({ 'Message': 'Data not found!' })
        }

        return response.status(200).json({ user })
    }
}
