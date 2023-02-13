import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import YearLevel from 'App/Models/YearLevel'

export default class YearLevelsController {
    public async index({response}: HttpContextContract) {
        const yearLevel = await YearLevel.all()

        return response.status(200).send(yearLevel)
    }
}
