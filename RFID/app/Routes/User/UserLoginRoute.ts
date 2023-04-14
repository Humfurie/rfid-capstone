import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post(`api/users/login`, `UserLoginsController.login`)
    Route.get(`users/employee/auth`, `UserLoginsController.__employeeInvoke`).middleware(['employee'])
    Route.get(`users/student/auth`, `UserLoginsController.__studentInvoke`).middleware(['student'])
    Route.get(`users/parent/auth`, `UserLoginsController.__parentInvoke`).middleware(['parent'])
}).namespace('App/Controllers/Http/Users')