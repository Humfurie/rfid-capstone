import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get('/rfid', 'ActivitiesController.show')
}).namespace('App/Controllers/Http/Users')