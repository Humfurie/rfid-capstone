import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Position from 'App/Models/Position';
import User from 'App/Models/User'
import YearLevel from 'App/Models/YearLevel';
import UserValidator from 'App/Validators/UserValidator';


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

        return response.status(200).json(user)
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

        const position = await Position.query().where('flag', 1)

        return response.status(200).send([user, position])
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

        return response.status(200).json(user)
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

        const year = await YearLevel.query().where('flag', 1)

        return response.status(200).send([user, year])

    }

    /**
     * edit user
     */
    public async edit({ request, response, params }: HttpContextContract) {
        const req = request.only(['role'])

        const validated = await request.validate(UserValidator)

        // return response.status(200).json(validated)
        if (req.role === 'student') {
            const user = await User.query().whereHas('role', (role) => {
                role.where('role', req.role)
            })
                .where('id', params.id)
                .where('flag', 1)
                .firstOrFail()

                user.merge(validated)
            return response.status(200).json(user)
        } else if (req.role === 'employee') {
            const user = User.query().where('id', params.id)
            return response.status(200).json(user)
        } else {
            return response.status(400).json({ "message": "User not found" })
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
