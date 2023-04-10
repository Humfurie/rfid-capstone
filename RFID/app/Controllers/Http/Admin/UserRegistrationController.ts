import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import EmergencyContact from 'App/Models/EmergencyContact'
import Parent from 'App/Models/Parent'
import User from 'App/Models/User'
import UserLogin from 'App/Models/UserLogin'
import UserValidator from 'App/Validators/UserValidator'

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
            try {
                // const validated = input.userRegistration.validate(UserValidator)
                console.log('this is inpiyt')

                /**
                 * 
                 * these are user model properties
                */
                const user = new User()

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
                user.rfidNumber = input.userRegistration.rfidNumber

                // user.firstName = validated.firstName
                // user.middleName = validated.middleName
                // user.lastName = validated.lastName
                // user.birthdate = validated.birthdate
                // user.gender = validated.gender
                // user.email = validated.email
                // user.address = validated.address
                // user.contactNumber = validated.contactNumber
                // user.facebook = validated.facebook
                // user.idNumber = validated.idNumber
                // user.rfidNumber = validated.rfidNumber

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
                await user.related('position').attach([1])

                /**
                 *  emergency_contact table for specific user
                 */
                const emergency = new EmergencyContact()
                emergency.name = input.emergency.name
                emergency.contactNumber = input.emergency.contactNumber
                emergency.facebook = input.emergency.facebook
                emergency.email = input.emergency.email
                emergency.userId = user.id

                /**
                 * EmergencyContact model transaction
                 */
                emergency.useTransaction(trx)

                /**
                 * saving emergency_contact data
                 */
                await emergency.save()

                /**
                 * account model
                 */
                const account = new UserLogin()
                account.username = user.lastName
                account.password = user.idNumber
                account.userId = user.id

                /**
                 * UserLogin transaction
                 */
                account.useTransaction(trx)

                /**
                 * account save
                 */
                await account.save()


                /**
                 * transaction commmit for safe saving all data without failure
                 */
                await trx.commit()
                return response.status(200).json({ ...user })
            } catch (error) {

                /**
                 * transaction rollback is for not saving related data in case of failure
                 */
                await trx.rollback()
                return response.status(400).json([error, { 'message': 'maot' }])

            }

        }
        else if (input.role === 'student') {

            /**
             * 
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
                user.rfidNumber = input.userRegistration.rfidNumber

                /**
                * use transaction on current user model
                */
                user.useTransaction(trx)

                /**
                 * save function for user
                 */
                await user.save()

                /**
                * related tables specifically role and year_level
                */
                // await user.related('yearLevel').attach()
                await user.related('role').attach([1])

                /**
               *  emergency_contact table for specific user
               */
                const emergency = new EmergencyContact()
                emergency.name = input.emergency.name
                emergency.contactNumber = input.emergency.contactNumber
                emergency.facebook = input.emergency.facebook
                emergency.email = input.emergency.email
                emergency.userId = user.id

                /**
                 * EmergencyContact model transaction
                 */
                emergency.useTransaction(trx)

                /**
                 * saving emergency_contact data
                 */
                await emergency.save()

                /**
                 * account model
                 */
                const account = new UserLogin()
                account.username = user.lastName
                account.password = user.idNumber
                account.userId = user.id

                /**
                 * UserLogin transaction
                 */
                account.useTransaction(trx)

                await account.save()
                /**
                 * transaction commmit for safe saving all data without failure
                 */
                await trx.commit()
                return response.status(200)
            } catch (error) {

                /**
                 * transaction rollback is for not saving related data in case of failure
                 */
                await trx.rollback()
                return response.status(400)
            }
        }
        else if (input.role === 'parent') {

            /**
             * parent model
             */
            const user = new Parent()
            try {
                console.log('this is parent user', user)
                /**
                 * these are parent model properties
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

                /**
                 * using database transaction for saving related table
                 */
                user.useTransaction(trx)

                /**
                 * saving parent model data
                 */
                await user.save()

                await trx.commit()
                return response.status(200)
            } catch (error) {

                /**
                 * transaction rollback is for not saving related data in case of failure
                 */
                await trx.rollback()
                return response.status(400)
            }
        }
        else {
            /**
             * in case everything else all fails
             */
            return response.status(300).json({ "message": "role not found!" })
        }
    }

}
