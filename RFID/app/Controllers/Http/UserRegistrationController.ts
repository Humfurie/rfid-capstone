import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import EmergencyContact from 'App/Models/EmergencyContact'
import User from 'App/Models/User'
import UserLogin from 'App/Models/UserLogin'

export default class newUserRegistrationController {
    //
    public async employeeRegistration({ request, response }: HttpContextContract) {
        const employee = request.only(['employeeRegistration', 'emergency', 'account'])

        // console.log('employee', employee)

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
            newUser.save()
    
            const emergencyContact = employee.emergency
    
            const newEmergency = new EmergencyContact()
            newEmergency.name = emergencyContact.name
            newEmergency.contactNumber = emergencyContact.contactNumber
            newEmergency.email = emergencyContact.email
            newEmergency.facebook = emergencyContact.facebook
            newEmergency.useTransaction(trx)
            newEmergency.save()
    
            const account = employee.account
    
            const newAccount = new UserLogin()
            newAccount.username = account.username
            newAccount.password = account.password
            newAccount.role = account.role
            newAccount.useTransaction(trx)
            newAccount.save()

            trx.commit()

        } catch (error) {
            trx.rollback()
        }

        return response.status(200)
    }
    public async studentRegistration({ request, response }: HttpContextContract) {
        const student = request.only(['studentRegistration', 'emergency', 'account'])
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
            newUser.save()
            
            const emergencyContact = student.emergency
    
            const newEmergency = new EmergencyContact()
            newEmergency.name = emergencyContact.name
            newEmergency.contactNumber = emergencyContact.contactNumber
            newEmergency.email = emergencyContact.email
            newEmergency.facebook = emergencyContact.facebook
            newEmergency.useTransaction(trx)
            newEmergency.save()
    
            const account = student.account
    
            const newAccount = new UserLogin()
            newAccount.username = account.username
            newAccount.password = account.password
            newAccount.role = account.role
            newAccount.useTransaction(trx)
            newAccount.save()
            
            trx.commit()
        } catch (error) {
            trx.rollback()
        }

        return response.status(200)
    }
    public async parentRegistration({request, response }: HttpContextContract) {
        const parent = request.only(['parentRegistration', 'emergency', 'account'])
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
    
            const emergencyContact = parent.emergency
    
            const newEmergency = new EmergencyContact()
            newEmergency.name = emergencyContact.name
            newEmergency.contactNumber = emergencyContact.contactNumber
            newEmergency.email = emergencyContact.email
            newEmergency.facebook = emergencyContact.facebook
            newEmergency.useTransaction(trx)
            newEmergency.save()
    
            const account = parent.account
    
            const newAccount = new UserLogin()
            newAccount.username = account.username
            newAccount.password = account.password
            newAccount.role = account.role
            newAccount.useTransaction(trx)
            newAccount.save()

            trx.commit()
        } catch (error) {
            trx.rollback()
        }

        return response.status(200)
    }
}
