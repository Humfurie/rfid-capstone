import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Position from 'App/Models/Position'
import PositionValidator from 'App/Validators/PositionValidator'

export default class PositionsController {

    public async index({response}: HttpContextContract){

        const position = await Position.query().where('flag', 1)

        return response.status(200).send(position)
    }

    public async store({request,response}: HttpContextContract){
        const input = request.all()

        await Position.create({position: input.position})

        return response.status(200).json({"message" : "Position saved successfully."})
    }

    public async show({ response, params }: HttpContextContract) {

        const user = await Position.query()
            .where('id', params.id)
            .where('flag', 1)
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

        const validated = await request.validate(PositionValidator)
        const trx = await Database.transaction()

        try {
            const position = await Position.query()
                .where('id', params.id)
                .where('flag', 1)
                .firstOrFail()
            if (!position) {
                return response.status(401).json({ 'message': 'Position not found!' })
            }

            position.useTransaction(trx)
            await position.merge(validated).save()

            await trx.commit()
            return response.status(200).json(position)
        } catch (error) {
            return response.status(400)
        }
    }

    public async delete({ request, response }: HttpContextContract) {
        const req = request.only(['id'])
        const deletePosition = await Position.query()
            .where('id', req.id)
            .where('flag', 1)
            .update({ flag: 0 })

        return response.status(200).json(deletePosition)
    }
}
