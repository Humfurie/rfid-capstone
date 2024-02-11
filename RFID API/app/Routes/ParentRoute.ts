import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/parent/index', 'ParentController.index')

    Route.get('/parent/:id', 'ParentController.parentShow')

    Route.put('/parent/delete', "ParentController.delete")
    Route.put('/parent/edit/:id', "ParentController.edit")
}).namespace('App/Controllers/Http/Admin')