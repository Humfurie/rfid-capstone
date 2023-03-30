import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Parent from 'App/Models/Parent';
import User from 'App/Models/User'


export default class UsersController {

    /**
     * 
     * @returns all employee
     */
    public async employeeIndex({ response }: HttpContextContract) {

        const user = await User.query()
            .whereHas('role', (builder) => {
                builder.where('role', 'Employee');
            }).where('flag', 1)
            .where('flag', 1)
            .preload('emergencyContact')
            .preload('role')
            .preload('position')
        console.log(user)
        if (!user) {
            return response.status(401).json({ 'Message': 'Data not found!' })
        }

        return response.status(200).json({ user })
    }

    /**
     * employee show 
     */
    public async employeeShow({ response, params }: HttpContextContract) {

        const user = await User.query()
            .whereHas('role', (user) => {
                user.where('role', 'Employee' || 'employee')
            })
            .where('id', params.id)
            .where('flag', 1)
            .preload('emergencyContact')
            .preload('role')
            .preload('position')
            .firstOrFail()

        return response.status(200).send([user])
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
            .where('flag', 1)
            .preload('emergencyContact')
            .preload('yearLevel')
            .preload('role')
            .preload('position')

        console.log(user)
        if (!user) {
            return response.status(401).json({ 'Message': 'Data not found!' })
        }

        return response.status(200).json({ user })
    }

    /***
     * student show
     */

    public async studentShow({ response, params }: HttpContextContract) {

        const user = await User.query()
            .whereHas('role', (builder) => {
                builder.where('role', 'Student' || 'student')
            })
            .where('id', params.id)
            .where('flag', 1)
            .preload('emergencyContact')
            .preload('yearLevel')
            .preload('role')
            .firstOrFail()

        return response.status(200).send([user])

    }

    /**
     * edit user
     */
    public async edit({request, response, params}: HttpContextContract) {
        const req = request.only(['role'])
        if(req.role == 'student') {
            const user = User.query().where('id', params.id)
            return response.status(200).json(user)
        } else if(req.role == 'employee') {
            const user = User.query().where('id', params.id)
            return response.status(200).json(user)
        } else {
            return response.status(400).json({"message": "User not found"})
        }
    }


    public async deleteUser({ request, response }: HttpContextContract) {
        const req = request.only(['id', 'role'])
        const deletedUser = await User.query().whereHas('role', (builder) => {
            builder.where('role', req.role)
        })
            .where('id', req.id)
            .where('flag', 1)
            .update({ flag: 0 })

        return response.status(200).json(deletedUser)
    }
}
