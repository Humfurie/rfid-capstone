import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import EmergencyContact from 'App/Models/EmergencyContact'
import Parent from 'App/Models/Parent'
import Role from 'App/Models/Role'
import User from 'App/Models/User'
import UserLogin from 'App/Models/UserLogin'

export default class newUserRegistrationController {
    //
    public async usersRegistration({ request, response }: HttpContextContract) {
        /**
         * this input is received from the axios endpoint from app.tsx
         */
        const input = request.only(['userRegistration', 'position', 'role', 'emergency', 'account'])
     
        // console.log(input)

        /**
        * transactions are normally used for relationships
        */ 
        const trx = await Database.transaction()

        /**
        * separating role into 3 segments
        * employee, student, parents
        */ 
        if (input.role === 'employee') {
            /**
             * user Model
             */
            const user = new User()
            try {
                /**
                 * these are user model properties
                 */
                user.firstName = input.userRegistration.firstName
                user.middleName = input.userRegistration.middleName
                user.lastName = input.userRegistration.lastName
                user.birthdate = input.userRegistration.birthdate
                user.gender = input.userRegistration.gender
                user.email = input.userRegistration.email
                user.address = input.userRegistration.address
                user.contactNumber = input.userRegistration.contactNumber
                user.facebook = input.userRegistration.facebook
                user.idNumber = input.userRegistration.idNumber

                /**
                 * use transaction on current user model
                 */
                user.useTransaction(trx)

                /**
                 * save function for user
                 */
                await user.save()

                /**
                 * related tables specifically role and position
                 */
                await user.related('role').attach([2])
                // await user.related('position').attach()


                await trx.commit()
                return response.status(200)
            } catch (error) {
                await trx.rollback()
                return response.status(400).json(error)

            }

        }
        else if (input.role === 'student') {
            /**
             * 
             * user Model
             */
            const user = new User()
            try {
                user.firstName = input.userRegistration.firstName
                user.middleName = input.userRegistration.middleName
                user.lastName = input.userRegistration.lastName
                user.birthdate = input.userRegistration.birthdate
                user.gender = input.userRegistration.gender
                user.email = input.userRegistration.email
                user.address = input.userRegistration.address
                user.contactNumber = input.userRegistration.contactNumber
                user.facebook = input.userRegistration.facebook
                user.year = input.userRegistration.year
                user.idNumber = input.userRegistration.idNumber
                user.useTransaction(trx)
                await user.save()
                await user.related('role').attach([1])

                await trx.commit()
                return response.status(200)
            } catch (error) {
                await trx.rollback()
                return response.status(400)
            }
        }
        else if (input.role === 'parent') {
            //parent Model
            const user = new Parent()
            try {
                user.firstName = input.userRegistration.firstName
                user.middleName = input.userRegistration.middleName
                user.lastName = input.userRegistration.lastName
                user.birthdate = input.userRegistration.birthdate
                user.gender = input.userRegistration.gender
                user.email = input.userRegistration.email
                user.address = input.userRegistration.address
                user.contactNumber = input.userRegistration.contactNumber
                user.facebook = input.userRegistration.facebook
                user.useTransaction(trx)
                await user.save()

                await trx.commit()
                return response.status(200)
            } catch (error) {
                await trx.rollback()
                return response.status(400)
            }
        }
        else {
            return response.status(300).json({ "message": "role not found!" })
        }
    }

}
