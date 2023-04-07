import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import YearLevel from 'App/Models/YearLevel'

export default class YearLevelsController {

    public async index({ response }: HttpContextContract) {
        const yearLevel = await YearLevel.all()

        return response.status(200).json(yearLevel)
    }

    public async store({ request, response }: HttpContextContract) {
        const input = request.all()

        await YearLevel.create({ year: input.year })

        return response.status(200).json({ "message": "Year level saved successfully." })
    }
}
