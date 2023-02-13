import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/api/role', 'RolesController.index')
}).namespace('App/Controllers/Http')