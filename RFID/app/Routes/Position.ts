import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {

    /**
     * get all position
     */
    Route.get('/users/position', 'PositionsController.index')
    
    /**
     * saving position
     */
    Route.post('/users/position', 'PositionsController.store')
}).namespace('App/Controllers/Http/Admin')