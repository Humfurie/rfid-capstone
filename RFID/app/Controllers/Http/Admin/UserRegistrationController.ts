import Application from '@ioc:Adonis/Core/Application'
import DriveManager from '@ioc:Adonis/Core/Drive'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import EmergencyContact from 'App/Models/EmergencyContact'
import Parent from 'App/Models/Parent'
import ProfilePic from 'App/Models/ProfilePic'
import User from 'App/Models/User'
import UserLogin from 'App/Models/UserLogin'
import UserValidator from 'App/Validators/UserValidator'

export default class newUserRegistrationController {
    //
    public async usersRegistration({ request, response }: HttpContextContract) {

        /**
         * this input is received from the axios endpoint from app.tsx
         */
        const input = request.only(['userRegistration', 'position', 'role', 'emergency', 'account', 'yearLevel'])
        const files = request.file('banner')
        console.log(input)
        const trx = await Database.transaction() //transactions are normally used for relationships

        if (!files) {

            if (input.role === 'employee') {

                try {
                    // const validated = input.userRegistration.validate(UserValidator)

                    const user = new User() // user model

                    user.firstName = input.userRegistration.firstName //these are user model properties
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

                    user.useTransaction(trx) //user transaction
                    await user.save() //created user save function

                    await user.related('role').attach([2])
                    await user.related('position').attach([1])

                    const emergency = new EmergencyContact() // emergency contact model
                    emergency.name = input.emergency.name
                    emergency.contactNumber = input.emergency.contactNumber
                    emergency.facebook = input.emergency.facebook
                    emergency.email = input.emergency.email
                    emergency.userId = user.id

                    emergency.useTransaction(trx)   //creating

                    await emergency.save() //saving emergency_contact data

                    const account = new UserLogin() // account model
                    account.username = user.lastName
                    account.password = user.idNumber
                    account.userId = user.id

                    account.useTransaction(trx) //UserLogin transaction

                    await account.save() //account save

                    await trx.commit() //transaction commmit for safe saving all data without failure
                    return response.status(200).json({ ...user })
                } catch (error) {

                    await trx.rollback() //transaction rollback is for not saving related data in case of failure
                    return response.status(400).json([error, { 'message': 'Employee is not saved' }])

                }

            }
            else if (input.role === 'student') {

                try {


                    const user = new User() //these are user model properties
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
                    user.isAlumni = input.userRegistration.isAlumni

                    user.useTransaction(trx)

                    await user.save()

                    await user.related('yearLevel').attach([input.userRegistration.year])
                    await user.related('role').attach([1])

                    const emergency = new EmergencyContact()
                    emergency.name = input.emergency.name
                    emergency.contactNumber = input.emergency.contactNumber
                    emergency.facebook = input.emergency.facebook
                    emergency.email = input.emergency.email
                    emergency.userId = user.id

                    emergency.useTransaction(trx)

                    await emergency.save()

                    const account = new UserLogin()
                    account.username = user.lastName
                    account.password = user.idNumber
                    account.userId = user.id

                    account.useTransaction(trx)

                    await account.save()

                    await trx.commit()
                    return response.status(200)
                } catch (error) {
                    console.log(error)
                    await trx.rollback()
                    return response.status(400)
                }
            }
            else if (input.role === 'parent') {
                try {

                    const user = new Parent()

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

        const folderName = Date.now()
        await files.move(Application.tmpPath(`uploads/${folderName}`))

        const uploadDrive = await DriveManager.getUrl(`${folderName}/${files?.clientName}`)

        if (input.role === 'employee') {

            try {
                // const validated = input.userRegistration.validate(UserValidator)

                const user = new User() // user model

                user.firstName = input.userRegistration.firstName //these are user model properties
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

                user.useTransaction(trx) //user transaction
                await user.save() //created user save function

                await user.related('role').attach([2])
                await user.related('position').attach([1])

                const profilePic = new ProfilePic() //ProfilePic model
                profilePic.userId = user.id
                profilePic.url = uploadDrive
                profilePic.useTransaction(trx)

                await profilePic.save()

                const emergency = new EmergencyContact() // emergency contact model
                emergency.name = input.emergency.name
                emergency.contactNumber = input.emergency.contactNumber
                emergency.facebook = input.emergency.facebook
                emergency.email = input.emergency.email
                emergency.userId = user.id

                emergency.useTransaction(trx)   //creating

                await emergency.save() //saving emergency_contact data

                const account = new UserLogin() // account model
                account.username = user.lastName
                account.password = user.idNumber
                account.userId = user.id

                account.useTransaction(trx) //UserLogin transaction

                await account.save() //account save

                await trx.commit() //transaction commmit for safe saving all data without failure
                return response.status(200).json({ ...user })
            } catch (error) {

                await trx.rollback() //transaction rollback is for not saving related data in case of failure
                return response.status(400).json([error, { 'message': 'Employee is not saved' }])

            }

        }
        else if (input.role === 'student') {

            try {


                const user = new User() //these are user model properties
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
                user.isAlumni = input.userRegistration.isAlumni

                user.useTransaction(trx)

                await user.save()

                await user.related('yearLevel').attach([input.userRegistration.year])
                await user.related('role').attach([1])


                const profilePic = new ProfilePic()
                profilePic.userId = user.id
                profilePic.url = uploadDrive
                profilePic.useTransaction(trx)

                await profilePic.save()

                const emergency = new EmergencyContact()
                emergency.name = input.emergency.name
                emergency.contactNumber = input.emergency.contactNumber
                emergency.facebook = input.emergency.facebook
                emergency.email = input.emergency.email
                emergency.userId = user.id

                emergency.useTransaction(trx)

                await emergency.save()

                const account = new UserLogin()
                account.username = user.lastName
                account.password = user.idNumber
                account.userId = user.id

                account.useTransaction(trx)

                await account.save()

                await trx.commit()
                return response.status(200)
            } catch (error) {

                await trx.rollback()
                return response.status(400)
            }
        }
        else if (input.role === 'parent') {
            try {

                const user = new Parent()

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

                const profilePic = new ProfilePic()
                profilePic.parentId = user.id
                profilePic.url = uploadDrive
                profilePic.useTransaction(trx)

                await profilePic.save()

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
