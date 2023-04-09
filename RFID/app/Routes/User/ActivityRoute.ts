import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get('/rfid', 'ActivitiesController.store')
    Route.get('/rfid/show', 'ActivitiesController.show')
}).namespace('App/Controllers/Http/Users')