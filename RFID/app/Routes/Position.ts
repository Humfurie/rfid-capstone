import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/api/position', 'PositionsController.index')
}).namespace('App/Controllers/Http')