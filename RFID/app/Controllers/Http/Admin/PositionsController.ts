import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Position from 'App/Models/Position'

export default class PositionsController {
    public async index({response}: HttpContextContract){
        const position = await Position.all()
        return response.status(200).send(position)
    }

    public async store({request,response}: HttpContextContract){
        const input = request.all()

        await Position.create({position: input.position})

        return response.status(200).json({"message" : "Position saved successfully."})
    }
}
