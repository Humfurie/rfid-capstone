import EmergencyContact from 'App/Models/EmergencyContact'
import Factory from '@ioc:Adonis/Lucid/Factory'
import UserFactory from './UserFactory'

export default Factory.define(EmergencyContact, ({ faker }) => {
  return {
    //
    name: faker.name.fullName(),
    contactNumber: faker.phone.number(),
    facebook: faker.internet.userName(),
    email: faker.internet.email(),
    flag: 1
  }
})
.build()
