import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    /**
     * show all
     */
    Route.get('/users/year_level', 'YearLevelsController.index')
    /***
     * adding year
     */
    Route.post('/users/year_level', 'YearLevelsController.store')
    /**
     * get year level by Id
     */
    Route.get('/year_level/:id', 'YearLevelsController.show')
    /**
     * edit year lvel
     */
    Route.put('/year_level/edit/:id', 'YearLevelsController.edit')
    /**
     * delete year level
     */
    Route.put('/year_level/delete', 'YearLevelsController.delete')
}).namespace('App/Controllers/Http/Admin')