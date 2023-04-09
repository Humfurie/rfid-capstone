import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get('/rfid', 'ActivitiesController.store')
}).namespace('App/Controllers/Http/Users')