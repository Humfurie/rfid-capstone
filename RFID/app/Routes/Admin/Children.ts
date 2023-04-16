import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/users/parent', 'ChildrenController.index')
}).namespace('App/Controllers/Http/Admin')