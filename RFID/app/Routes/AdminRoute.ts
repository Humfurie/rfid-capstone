import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post('/register', 'AdminsController.create')
    Route.post('/login', 'AdminsController.login')
    Route.get('/auth', 'AdminsController.invoke').middleware(['admin'])
}).namespace('App/Controllers/Http')