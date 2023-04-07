// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database"
import Activity from "App/Models/Activity"
import User from "App/Models/User"

export default class ActivitiesController {
    public async signIn({ request, response }) {

        const input = request.all()
        const weekday = ["Sunday", 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const d = new Date()
        let day = weekday[d.getDay()]

        if (!input) {
            return response.status(400).json({ "message": "null" })
        }

        const trx = await Database.transaction()
        try {

            const user = await User
                .query()
                .where('rfidNumber', input.rfidNumber)
                .where('flag', 1)
                .preload('role')
                .preload('position')
                .preload('yearLevel')
                .firstOrFail()

            if (!user) {
                return response.status(400).json({ "message": "Data not found!" })
            }

            const activity = new Activity()
            activity.day = day
            activity.status = 'In'
            activity.useTransaction(trx)
            await activity.save()

            await trx.commit()
            return response.status(200).json(user)
        } catch (error) {
            await trx.rollback()
            return response.status(400).json(error)

        }
    }

    public async SignOut({ request, response }) {

        const input = request.all()

        const weekday = ["Sunday", 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const d = new Date()
        let day = weekday[d.getDay()]
        
        if (input === null) {
            return response.status(400).json({ "message": "null" })
        }

        const trx = await Database.transaction()
        try {

            const user = await User
                .query()
                .where('rfidNumber', input.rfidNumber)
                .where('flag', 1)
                .preload('role')
                .preload('position')
                .preload('yearLevel')
                .firstOrFail()

            if (!user) {
                return response.status(400).json({ "message": "Data not found!" })
            }

            const activity = new Activity()
            activity.day = day
            activity.status = 'out'
            activity.useTransaction(trx)
            await activity.save()

            await trx.commit()
            return response.status(200).json(user)
        } catch (error) {
            await trx.rollback()
            return response.status(400).json(error)

        }
    }
}
