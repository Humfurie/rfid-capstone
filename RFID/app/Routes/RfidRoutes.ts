import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/rfid', 'RfidsController.show')
}).namespace('App/Controllers/Http/Admin')