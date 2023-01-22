import Route from '@ioc:Adonis/Core/Route'

Route.group(()=>{
    Route.post('/employeeRegister', 'UserRegistrationController.employeeRegistration')
    Route.post('/studentRegister', 'UserRegistrationController.studentRegistration')
    Route.post('/parentRegister', 'UserRegistrationController.parentRegistration')
}).namespace('App/Controllers/Http')