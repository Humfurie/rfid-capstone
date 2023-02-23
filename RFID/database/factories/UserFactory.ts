import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'
import EmergencyContactFactory from './EmergencyContactFactory'
import UserLoginFactory from './UserLoginFactory'
import Role from 'App/Models/Role'



export default Factory.define(User, ({ faker }) => {
  const gender = ['male', 'female']
  const role = [1,2]
  return {
    //
    firstName: faker.name.firstName(),
    middleName: faker.name.middleName(),
    lastName: faker.name.lastName(),
    birthdate: faker.date.birthdate(),
    gender: gender[Math.floor(Math.random() * gender.length)],
    email: faker.internet.email(),
    address: faker.address.cityName(),
    contactNumber: faker.phone.number(),
    facebook: faker.internet.userName(),
    idNumber: faker.random.numeric(),
    isAlumni: false,
    flag: 1,
    role: role[Math.floor(Math.random() * role.length)],
  }
})
.relation('emergencyContact', () => EmergencyContactFactory)
.relation('userLogin', () => UserLoginFactory)
// .relation('role', () => null )
// .relation('position', () => PositionPivotFactory)
.build()

