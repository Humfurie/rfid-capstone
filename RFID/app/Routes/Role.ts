import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/api/role', 'RolesController.index')

    /**
     * post requests
     */
    Route.post('/api/role', 'RolesController.store')
}).namespace('App/Controllers/Http/Admin')