import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Position from 'App/Models/Position'

export default class PositionsController {
    public async index({response}: HttpContextContract){
        const position = await Position.all()
        return response.status(200).send(position)
    }
}
