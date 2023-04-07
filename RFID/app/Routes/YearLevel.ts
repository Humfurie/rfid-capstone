import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/users/year_level', 'YearLevelsController.index')
    /***
     * adding year
     */
    Route.post('/users/year_level', 'YearLevelsController.store')
}).namespace('App/Controllers/Http/Admin')