import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/rfid', 'RifdsController.show')
}).namespace('App/Controllers/Http')