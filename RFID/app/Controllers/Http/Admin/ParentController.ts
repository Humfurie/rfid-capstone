import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Parent from 'App/Models/Parent';

export default class ParetController {
    /**
   * 
   * @returns all parents
   */
    public async index({ response }: HttpContextContract) {

        const user = await Parent.query().where('flag', 1)

        console.log(user)
        if (!user) {
            return response.status(401).json({ 'Message': 'Data not found!' })
        }

        return response.status(200).json(user)
    }

    /***\
     * delete parent
     */

    public async delete({ request, response }: HttpContextContract) {
        const req = request.only(['id'])
        const deleteParent = await Parent.query()
            .where('id', req.id)
            .where('flag', 1)
            .update({ flag: 0 })

        return response.status(200).json(deleteParent)
    }

    public async edit({ request, response }: HttpContextContract) {
        const req = request.only(['id'])
        console.log(req)
        // const editParent = await Parent.query()
        //     .where('id', req.id)
        //     .where('flag', 1)
        //     .update({ flag: 0 })

        // return response.status(200).json(editParent)
    }
}