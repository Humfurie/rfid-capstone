import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import EmergencyContact from 'App/Models/EmergencyContact';
import User from 'App/Models/User'
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
            .preload('emergencyContact')
            .preload('role')
            .preload('position')
            .preload('profilePic')

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
            .preload('profilePic')
            .firstOrFail()

        return response.status(200).json(user)
    }

    /**
     *  
     * @returns all student
     */
    public async studentIndex({ response }: HttpContextContract) {

        const user = await User.query()
            .whereHas('role', (builder) => {
                builder.where('role', 'Student');
            })
            .where('flag', 1)
            .preload('emergencyContact')
            .preload('yearLevel')
            .preload('role')
            .preload('profilePic')

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
            .preload('profilePic')
            .firstOrFail()

        return response.status(200).send(user)

    }

    /**
     * edit user
     */
    public async edit({ request, response, params }: HttpContextContract) {

        // const req = request.only(['role', 'position'])
        const req = request.all()
        console.log("this is edit req", req)
        const validated = await request.validate(UserValidator)
        const trx = await Database.transaction()
        // return response.status(200).json(validated)
        if (req.role === 'student') {
            try {
                const user = await User.query().whereHas('role', (role) => {
                    role.where('role', req.role)
                })
                    .where('id', params.id)
                    .where('flag', 1)
                    .firstOrFail()
                if (!user) {
                    return response.status(401).json({ 'message': 'User not found!' })
                }

                const emergency = await EmergencyContact.query().where('userId', params.id).where('flag', 1).firstOrFail()

                if (!emergency) {
                    return response.status(401).json({ 'message': 'Emergency Contact not found' })
                }

                user.useTransaction(trx)
                await user.merge({
                    firstName: validated.firstName,
                    middleName: validated.middleName,
                    lastName: validated.lastName,
                    birthdate: validated.birthdate,
                    gender: validated.gender,
                    email: validated.email,
                    address: validated.address,
                    contactNumber: validated.contactNumber,
                    facebook: validated.facebook,
                    idNumber: validated.idNumber,
                    rfidNumber: validated.rfidNumber,
                    isAlumni: validated.isAlumni,
                }).save()

                emergency.useTransaction(trx)
                await emergency.merge({
                    name: validated.emergencyName,
                    contactNumber: validated.emergencyContactNumber,
                    facebook: validated.emergencyFacebook,
                    email: validated.emergencyEmail
                }).save()

                await trx.commit()
                console.log(user, emergency)
                return response.status(200).json(user)
            } catch (error) {
                return response.status(400)
            }
        } else if (req.role === 'employee') {
            try {
                const user = await User.query().whereHas('role', (role) => {
                    role.where('role', req.role)
                })
                    .where('id', params.id)
                    .where('flag', 1)
                    .firstOrFail()

                if (!user) {
                    return response.status(401).json({ 'message': 'User not found!' })
                }

                const emergency = await EmergencyContact.query().where('userId', params.id).where('flag', 1).firstOrFail()

                if (!emergency) {
                    return response.status(401).json({ 'message': 'Emergency Contact not found!' })
                }

                user.useTransaction(trx)
                await user.merge({
                    firstName: validated.firstName,
                    middleName: validated.middleName,
                    lastName: validated.lastName,
                    birthdate: validated.birthdate,
                    gender: validated.gender,
                    email: validated.email,
                    address: validated.address,
                    contactNumber: validated.contactNumber,
                    facebook: validated.facebook,
                    idNumber: validated.idNumber,
                    rfidNumber: validated.rfidNumber,
                    isAlumni: validated.isAlumni,
                }).save()

                await user.related('position').sync([req.position])

                emergency.useTransaction(trx)
                await emergency.merge({
                    name: validated.emergencyName,
                    contactNumber: validated.emergencyContactNumber,
                    facebook: validated.emergencyFacebook,
                    email: validated.emergencyEmail
                }).save()

                await trx.commit()
                return response.status(200).json(user)
            } catch (error) {
                return response.status(400)
            }
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
