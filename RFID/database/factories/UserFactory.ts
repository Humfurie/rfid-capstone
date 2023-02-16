import users from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'

const gender = [
  'male',
  'female'
]

export default Factory.define(users, ({ faker }) => {
  return {
    //
    firstName: faker.name.firstName(),
    middleName: faker.name.middleName(),
    lastName: faker.name.lastName(),
    birthdate: faker.date.birthdate() ,
    gender: gender[Math.floor(Math.random()*gender.length)],
    email: faker.internet.email,
    address: faker.address,
    contactNumber: faker.phone,
    idNumber: faker.random.numeric,
    isAlumni: false,
    flag: 1
  }
}).build()
