import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/api/users/employeeIndex', 'UsersController.employeeIndex')
    Route.get('/api/users/studentIndex', 'UsersController.studentIndex')
    Route.get('/api/users/parentIndex', 'UsersController.parentIndex')
}).namespace('App/Controllers/Http/Admin')