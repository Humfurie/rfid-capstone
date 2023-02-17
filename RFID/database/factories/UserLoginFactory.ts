import UserLogin from 'App/Models/UserLogin'
import Factory from '@ioc:Adonis/Lucid/Factory'
import UserFactory from './UserFactory'

export default Factory.define(UserLogin, ({ faker }) => {
  return {
    //
    username: faker.internet.userName(),
    password: faker.internet.password(),
    flag: 1
  }
})
.build()
