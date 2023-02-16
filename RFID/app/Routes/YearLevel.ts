import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/api/year_level', 'YearLevelsController.index')
    /***
     * adding year
     */
    Route.post('/api/year_level', 'YearLevelsController.store')
}).namespace('App/Controllers/Http/Admin')