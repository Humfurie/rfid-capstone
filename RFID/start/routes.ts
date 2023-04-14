/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import 'App/Routes/Admin/AdminRoute'

/**
 * user Routes
 */
import 'App/Routes/User/UserLoginRoute'
import 'App/Routes/Admin/UserRegistrationRoute'
import 'App/Routes/UserRoute'
import 'App/Routes/ParentRoute'
import 'App/Routes/PositionRoute'
import 'App/Routes/Role'
import 'App/Routes/YearLevelRoute'
import 'App/Routes/User/ActivityRoute'
import 'App/Routes/Admin/AdminRoute'
import 'App/Routes/Admin/Children'

Route.get('/', async () => {
  return { hello: 'world' }
})
