import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/parent/index', 'ParentController.index')

    Route.put('/parent/delete', "ParentController.delete")
    Route.put('/parent/edit', "ParentController.edit")
}).namespace('App/Controllers/Http/Admin')