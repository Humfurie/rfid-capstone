import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import EmergencyContact from 'App/Models/EmergencyContact'
import User from 'App/Models/User'
import UserLogin from 'App/Models/UserLogin'
import { faker } from '@faker-js/faker'
import Parent from 'App/Models/Parent'


export default class extends BaseSeeder {


  public async run() {

    const gender = ['male', 'female']
    const position = [1, 2]

    // Write your database queries inside the run method

    for (let i = 0; i < 10; i++) {

      const trx = await Database.transaction()
      const user = new User()

      user.firstName = faker.name.firstName()
      user.middleName = faker.name.middleName()
      user.lastName = faker.name.lastName()
      user.birthdate = faker.date.birthdate()
      user.gender = gender[Math.floor(Math.random() * gender.length)]
      user.email = faker.internet.email()
      user.address = faker.address.city()
      user.contactNumber = faker.phone.number()
      user.facebook = faker.internet.userName()
      user.idNumber = faker.random.numeric(8)
      user.rfidNumber = faker.random.numeric(12)
      user.useTransaction(trx)

      await user.save()
      await user.related('role').attach([2])
      await user.related('position').attach([position[Math.floor(Math.random() * position.length)]])


      const emergency = new EmergencyContact()
      emergency.name = faker.name.fullName()
      emergency.contactNumber = faker.phone.number()
      emergency.facebook = faker.internet.userName()
      emergency.email = faker.internet.email()
      emergency.userId = user.id
      emergency.useTransaction(trx)

      await emergency.save()

      const account = new UserLogin()
      account.username = faker.internet.userName()
      account.password = "Humfurie"
      account.userId = user.id

      account.useTransaction(trx)

      await account.save()


      await trx.commit()
    }

    for (let i = 0; i < 10; i++) {

      const trx = await Database.transaction()
      const user = new User()

      user.firstName = faker.name.firstName()
      user.middleName = faker.name.middleName()
      user.lastName = faker.name.lastName()
      user.birthdate = faker.date.birthdate()
      user.gender = gender[Math.floor(Math.random() * gender.length)]
      user.email = faker.internet.email()
      user.address = faker.address.city()
      user.contactNumber = faker.phone.number()
      user.facebook = faker.internet.userName()
      user.idNumber = faker.random.numeric(8)
      user.rfidNumber = faker.random.numeric(12)
      user.useTransaction(trx)

      await user.save()
      await user.related('role').attach([1])
      await user.related('position').attach([position[Math.floor(Math.random() * position.length)]])


      const emergency = new EmergencyContact()
      emergency.name = faker.name.fullName()
      emergency.contactNumber = faker.phone.number()
      emergency.facebook = faker.internet.userName()
      emergency.email = faker.internet.email()
      emergency.userId = user.id
      emergency.useTransaction(trx)

      await emergency.save()

      const account = new UserLogin()
      account.username = faker.internet.userName()
      account.password = "Humfurie"
      account.userId = user.id

      account.useTransaction(trx)

      await account.save()


      await trx.commit()
    }

    for (let i = 0; i < 10; i++) {

      const trx = await Database.transaction()
      const user = new Parent()

      user.firstName = faker.name.firstName()
      user.middleName = faker.name.middleName()
      user.lastName = faker.name.lastName()
      user.birthdate = faker.date.birthdate()
      user.gender = gender[Math.floor(Math.random() * gender.length)]
      user.email = faker.internet.email()
      user.address = faker.address.city()
      user.contactNumber = faker.phone.number()
      user.facebook = faker.internet.userName()
      user.useTransaction(trx)

      await user.save()
  
      // await user.related('role').attach([3])

      // const account = new UserLogin()
      // account.username = user.firstName
      // account.password = "Humfurie"
      // account.userId = user.id

      // account.useTransaction(trx)

      // await account.save()


      await trx.commit()
    }
  }
}

