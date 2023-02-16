import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/api/position', 'PositionsController.index')
    /**
     * saving position
     */
    Route.post('/api/position', 'PositionsController.store')
}).namespace('App/Controllers/Http/Admin')