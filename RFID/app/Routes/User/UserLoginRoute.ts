import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post(`api/users/login`, `UserLoginsController.login`)
    Route.get(`api/users/auth`, `UserLoginsController.invoke`).middleware(['user'])
}).namespace('App/Controllers/Http/Users')