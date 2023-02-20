import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/users/employeeIndex', 'UsersController.employeeIndex')
    Route.get('/users/studentIndex', 'UsersController.studentIndex')
    Route.get('/users/parentIndex', 'UsersController.parentIndex')

    /**
     * employeeShow
     */
    Route.get('/users/employee/:id', 'UsersController.employeeShow')
}).namespace('App/Controllers/Http/Admin')