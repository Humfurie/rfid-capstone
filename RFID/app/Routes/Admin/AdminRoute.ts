import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post('/register', 'AdminsController.create')
    Route.post('/login', 'AdminsController.login')
    Route.get('/auth', 'AdminsController.__invoke').middleware(['user'])
    Route.get('/show/:id', 'AdminsController.show')
}).namespace('App/Controllers/Http/Admin')