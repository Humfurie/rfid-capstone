import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import Parent from 'App/Models/Parent';
import ParentValidator from 'App/Validators/ParentValidator';

export default class ParetController {
    /**
   * 
   * @returns all parents
   */
    public async index({ response }: HttpContextContract) {

        const user = await Parent.query()
        .where('flag', 1)
        .preload('profilePic')
        // console.log(user)
        if (!user) {
            return response.status(401).json({ 'Message': 'Data not found!' })
        }
        return response.status(200).json(user)
    }

    /**
     * get parent byId
     */
    public async parentShow({ response, params }: HttpContextContract) {

        const user = await Parent.query()
            .where('id', params.id)
            .where('flag', 1)
            .preload('profilePic')
            .firstOrFail()

        if (!user) {
            return response.status(401).json({ 'Message': 'User not found.' })
        }
        return response.status(200).json(user)
    }



    public async edit({ request, response, params }: HttpContextContract) {
        // const req = request.only(['id'])
        const req = request.all()
        console.log(req)

        const validated = await request.validate(ParentValidator)
        const trx = await Database.transaction()

        try {
            const user = await Parent.query()
                .where('id', params.id)
                .where('flag', 1)
                .firstOrFail()
            if (!user) {
                return response.status(401).json({ 'message': 'User not found!' })
            }

            user.useTransaction(trx)
            await user.merge(validated).save()

            await user.related('user').sync([req.children])

            await trx.commit()
            return response.status(200).json(user)
        } catch (error) {
            return response.status(400)
        }
    }

    /*
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
}