import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import YearLevel from 'App/Models/YearLevel'
import YearlevelValidator from 'App/Validators/YearlevelValidator'

export default class YearLevelsController {

    public async index({ response }: HttpContextContract) {
        const yearLevel = await YearLevel.query().where('flag', 1)

        return response.status(200).json(yearLevel)
    }

    public async store({ request, response }: HttpContextContract) {
        const input = request.all()

        await YearLevel.create({ year: input.year })

        return response.status(200).json({ "message": "Year level saved successfully." })
    }

    public async show({ response, params }: HttpContextContract) {

        const user = await YearLevel.query()
            .where('id', params.id)
            .where('flag', 1)
            .firstOrFail()

        if (!user) {
            return response.status(401).json({ 'Message': 'Year level not found.' })
        }
        return response.status(200).json(user)
    }

    public async edit({ request, response, params }: HttpContextContract) {
        // const req = request.only(['id'])
        const req = request.all()
        console.log(req)

        const validated = await request.validate(YearlevelValidator)
        const trx = await Database.transaction()

        try {
            const yearLevel = await YearLevel.query()
                .where('id', params.id)
                .where('flag', 1)
                .firstOrFail()
            if (!yearLevel) {
                return response.status(401).json({ 'message': 'Yearl Level not found!' })
            }

            yearLevel.useTransaction(trx)
            await yearLevel.merge(validated).save()

            await trx.commit()
            return response.status(200).json(yearLevel)
        } catch (error) {
            return response.status(400)
        }
    }

    public async delete({ request, response }: HttpContextContract) {
        const req = request.only(['id'])
        const deleteYearLevel = await YearLevel.query()
            .where('id', req.id)
            .where('flag', 1)
            .update({ flag: 0 })

        return response.status(200).json(deleteYearLevel)
    }
}
