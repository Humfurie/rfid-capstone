import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.post('/users/rfid/signIn', 'ActivitiesController.signIn')
    Route.post('/users/rfid/signOut', 'ActititiesController.signOut')
}).namespace('App/Controllers/Http/Users')