import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/api/year_level', 'YearLevelsController.index')
})