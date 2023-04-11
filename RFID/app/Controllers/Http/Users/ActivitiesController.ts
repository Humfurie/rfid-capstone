import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database"
import Activity from "App/Models/Activity"
import User from "App/Models/User"
import { ReadlineParser, SerialPort } from "serialport"


export default class ActivitiesController {
    public async store({ response }: HttpContextContract) {

        const weekday = ["Sunday", 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const d = new Date()
        let day = weekday[d.getDay()]

        let myData

        const port = new SerialPort({ path: 'COM3', baudRate: 9600, dataBits: 8, parity: 'none', stopBits: 1 })
        const parser = new ReadlineParser({
            delimiter: '\r\n'
        });
        port.pipe(parser)

        parser.on('data', async (data) => {
            myData = await data
            console.log(myData)
            const trx = await Database.transaction()
            try {
                const user = await User
                    .query()
                    .where('rfidNumber', myData)
                    .where('flag', 1)
                    .preload('role')
                    .preload('position')
                    .preload('yearLevel')
                    .firstOrFail()
                // console.log(user.serialize())
                if (!user) {
                    return response.status(400).json({ "message": "Data not found!" })
                }

                const latestActivity = await Activity.query().whereHas('user', (user) => {
                    user.where('rfidNumber', myData)
                        .where('flag', 1)
                })
                    .where('flag', 1)
                    .orderBy([{
                        column: 'id',
                        order: 'desc'
                    }])


                const activityIndex = latestActivity.length

                if (activityIndex === 0) {
                    const activity = new Activity()
                    activity.day = day
                    activity.status = 'In'
                    activity.userId = user.id

                    activity.useTransaction(trx)
                    await activity.save()

                    await trx.commit()
                    return response.status(200).json(user)
                }
                else {
                    // console.log(latestActivity[0].$extras.totalActivity)
                    // console.log(latestActivity[0].serialize())
                    const index = latestActivity[0].id
                    const activity = await Activity.query().whereHas('user', (user) => {
                        user.where('rfidNumber', myData)
                            .where('flag', 1)
                    })
                        .where('id', index)
                        .where('flag', 1)

                    console.log('whwaw', activity)
                    console.log('asa ka')

                    if (activity[0].status === "In") {
                        const activity = new Activity()
                        activity.day = day
                        activity.status = 'Out'
                        activity.userId = user.id

                        activity.useTransaction(trx)
                        await activity.save()

                        await trx.commit()
                        return response.status(200).json(user)
                    } else if (activity[0].status === "Out") {
                        const activity = new Activity()
                        activity.day = day
                        activity.status = 'In'
                        activity.userId = user.id

                        activity.useTransaction(trx)
                        await activity.save()

                        await trx.commit()
                        return response.status(200).json(user)
                    } else {
                        const activity = new Activity()
                        activity.day = day
                        activity.status = 'In'
                        activity.userId = user.id

                        activity.useTransaction(trx)
                        await activity.save()

                        await trx.commit()
                        return response.status(200).json(user)
                    }
                }
            } catch (error) {
                await trx.rollback()
                return response.status(400).json(error)
            }

        })

        port.on('open', () => {
            console.log('Serial Port Opened')
        })

        port.on('error', err => {
            console.error(err)
        })
    }

    public async show({ response }: HttpContextContract) {

        const activity = await Activity.query().whereHas('user', (user) => {
            user.where('flag', 1)
        }).where('flag', 1)
            .preload('user')
            .orderBy([{
                column: 'id',
                order: 'desc'
            }])
        console.log(activity)
        return response.status(200).json(activity)
    }
}
