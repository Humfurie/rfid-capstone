import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import EmergencyContact from 'App/Models/EmergencyContact'
import User from 'App/Models/User'
import UserLogin from 'App/Models/UserLogin'

export default class newUserRegistrationController {
    //
    public async employeeRegistration({ request, response }: HttpContextContract) {
        const employee = request.only(['employeeRegistration', 'emergency', 'account', 'role'])

        console.log('employee', employee)

        const trx = await Database.transaction()

        try {
            const newUser = new User()
            newUser.firstname = employee.employeeRegistration.firstname
            newUser.middlename = employee.employeeRegistration.middlename
            newUser.lastname = employee.employeeRegistration.lastname
            newUser.gender = employee.employeeRegistration.gender
            newUser.address = employee.employeeRegistration.address
            newUser.email = employee.employeeRegistration.email
            newUser.contactNumber = employee.employeeRegistration.contactNumber
            newUser.facebook = employee.employeeRegistration.facebook
            newUser.useTransaction(trx)
            await newUser.save()

            console.log(newUser)
            

            const emergencyContact = employee.emergency

            const newEmergency = new EmergencyContact()
            newEmergency.name = emergencyContact.name
            newEmergency.contactNumber = emergencyContact.contactNumber
            newEmergency.email = emergencyContact.email
            newEmergency.facebook = emergencyContact.facebook
            newEmergency.userId = newUser.id
            newEmergency.useTransaction(trx)
            await newEmergency.save()

            console.log(emergencyContact)

            const account = employee.account
            const role = employee.role

            const newAccount = new UserLogin()
            newAccount.username = account.username
            newAccount.password = account.password
            newAccount.role = role
            newAccount.userId = newUser.id
            newAccount.useTransaction(trx)
            await newAccount.save()

            // const newEmployee = new Employee()
            // newEmployee.position = 'Employee'
            // newEmployee.userLoginId = newAccount.id
            // newEmployee.useTransaction(trx)
            // await newEmployee.save()

            await trx.commit()

            return response.status(200)

        } catch (error) {
            console.log(error)
            await trx.rollback()
            return response.status(400)
        }

    }
    public async studentRegistration({ request, response }: HttpContextContract) {
        const student = request.only(['studentRegistration', 'emergency', 'account', 'role'])
        console.log('student', student)

        const trx = await Database.transaction()

        try {

            const newUser = new User()
            newUser.firstname = student.studentRegistration.firstname
            newUser.middlename = student.studentRegistration.middlename
            newUser.lastname = student.studentRegistration.lastname
            newUser.gender = student.studentRegistration.gender
            newUser.address = student.studentRegistration.address
            newUser.email = student.studentRegistration.email
            newUser.contactNumber = student.studentRegistration.contactNumber
            newUser.facebook = student.studentRegistration.facebook
            newUser.useTransaction(trx)
            await newUser.save()

            const emergencyContact = student.emergency

            const newEmergency = new EmergencyContact()
            newEmergency.name = emergencyContact.name
            newEmergency.contactNumber = emergencyContact.contactNumber
            newEmergency.email = emergencyContact.email
            newEmergency.facebook = emergencyContact.facebook
            newEmergency.userId = newUser.id
            newEmergency.useTransaction(trx)
            await newEmergency.save()

            const account = student.account
            const role = student.role

            const newAccount = new UserLogin()
            newAccount.username = account.username
            newAccount.password = account.password
            newAccount.role = role
            newAccount.userId = newUser.id
            newAccount.useTransaction(trx)
            await newAccount.save()

            // const studentAccount = student.account

            // const newStudent = new Student()
            // newStudent.studentId = studentAccount.studentId
            // newStudent.schoolYear = studentAccount.schoolYear
            // newStudent.userLoginId = newAccount.id
            // newStudent.save()

            await trx.commit()

            return response.status(200)

        } catch (error) {
            console.log(error)
            await trx.rollback()
            return response.status(401)
        }

    }
    public async parentRegistration({ request, response }: HttpContextContract) {
        const parent = request.only(['parentRegistration', 'emergency', 'account', 'role'])
        console.log('parent', parent)

        const trx = await Database.transaction()

        try {

            const newUser = new User()
            newUser.firstname = parent.parentRegistration.firstname
            newUser.middlename = parent.parentRegistration.middlename
            newUser.lastname = parent.parentRegistration.lastname
            newUser.gender = parent.parentRegistration.gender
            newUser.address = parent.parentRegistration.address
            newUser.email = parent.parentRegistration.email
            newUser.contactNumber = parent.parentRegistration.contactNumber
            newUser.facebook = parent.parentRegistration.facebook
            newUser.useTransaction(trx)
            newUser.save()

            const account = parent.account
            const role = parent.role

            const newAccount = new UserLogin()
            newAccount.username = account.username
            newAccount.password = account.password
            newAccount.role = role
            newAccount.userId = newUser.id
            newAccount.useTransaction(trx)
            newAccount.save()

            trx.commit()

            return response.status(200)

        } catch (error) {
            trx.rollback()
            return response.status(401)
        }
    }
}
