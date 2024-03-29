import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get('/rfid', 'ActivitiesController.store')
    Route.get('/rfid/show', 'ActivitiesController.show')
    Route.get('/rfid/scan', 'ActivitiesController.latestActivity')
    Route.get('/users/activity/:id', 'ActivitiesController.showActivity')
}).namespace('App/Controllers/Http/Users')