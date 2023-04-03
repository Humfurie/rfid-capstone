import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {

    /**
     * get all position
     */
    Route.get('/users/position', 'PositionsController.index')
    /**
     * get Position by id
     */
    Route.get('position/:id', 'PositionsController.show')
    /**
     * saving position
     */
    Route.post('/users/position', 'PositionsController.store')

    /**
     * edit position
     */
    Route.put('/position/edit/:id', 'PositionsController.edit')
    /**
     * delete position
     */
    Route.put('/position/delete', 'PositionsController.delete')
}).namespace('App/Controllers/Http/Admin')