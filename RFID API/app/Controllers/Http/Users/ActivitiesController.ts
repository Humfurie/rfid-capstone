import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Activity from "App/Models/Activity"
import User from "App/Models/User"
import YearLevel from 'App/Models/YearLevel'
import SerialService from 'App/Services/SerialService'


export default class ActivitiesController {
    /**
     * Get serial connection status
     * Endpoint: GET /rfid/status
     */
    public async getStatus({ response }: HttpContextContract) {
        const isConnected = SerialService.getConnectionStatus()
        return response.status(200).json({
            connected: isConnected,
            message: isConnected
                ? 'RFID scanner is connected and ready'
                : 'RFID scanner is not connected',
        })
    }

    public async show({ response }: HttpContextContract) {

        const activity = await Activity.query().whereHas('user', (user) => {
            user.where('flag', 1)
        }).where('flag', 1)
            .preload('user', (user) => {
                user.preload('yearLevel')
            })
            .orderBy([{
                column: 'id',
                order: 'desc'
            }])

        const grade = await User.query().whereHas('role', (role) => {
            role.where('role', 'Student')
        })
            .preload('yearLevel')
            .where('flag', 1)
            .whereHas('activity', (activity) => {
                activity.where('flag', 1)
            })
            .preload('activity', (activity) => {
                activity.orderBy('id', 'desc')
            })
        // console.log(grade)

        const yearLevel = await YearLevel.query().where('flag', 1)
        const yearLevelMap = yearLevel.map((year) => {
            return year.id
        })
        const yearLabel = yearLevel.map((year) => {
            return year.year
        })

        const gradesMap = yearLevelMap.map((yearLevelId) => {
            const filteredUsers = grade.filter(user => user.yearLevel[0].id === yearLevelId)
            const currentStatus = filteredUsers.reduce((acc: string[], user: { activity: { status: string; }[]; }) => {
                if (user.activity[0].status === "In") {
                    acc.push('In')
                }
                return acc
            }, [])

            // return filteredUsers
            return currentStatus.length
        });

        const studentTotalIn = grade.reduce((acc: string[], user: { activity: { status: string; }[]; }) => {
            if (user.activity[0].status === "In") {
                acc.push('In')
            }
            return acc
        }, [])

        const employee = await User.query().whereHas('role', (role) => {
            role.where('role', 'Employee')
        }).preload('position')
            .preload('yearLevel')
            .where('flag', 1)
            .whereHas('activity', (activity) => {
                activity.where('flag', 1)
            })
            .preload('activity', (activity) => {
                activity.orderBy('id', 'desc')
            })

        const totalEmployeeIn = employee.reduce((acc: string[], user: { activity: { status: string; }[]; }) => {
            if (user.activity[0].status === "In") {
                acc.push('In')
            }
            return acc
        }, [])

        const totalEmployee = await User.query().whereHas('role', (role) => {
            role.where('role', 'Employee')
        }).preload('position')
            .preload('yearLevel')
            .where('flag', 1)
            .preload('activity', (activity) => {
                activity.orderBy('id', 'desc')
            })

        const totalStudent = await User.query().whereHas('role', (role) => {
            role.where('role', 'Student')
        }).preload('position')
            .preload('yearLevel')
            .where('flag', 1)
            .preload('activity', (activity) => {
                activity.orderBy('id', 'desc')
            })



        return response.status(200).json([grade, yearLabel, yearLevelMap, gradesMap, activity, studentTotalIn, totalEmployeeIn, totalEmployee, totalStudent])
        // return response.status(200).json([activity, grade7, grade8, grade9, grade10, grade11, grade12])
    }

    public async latestActivity({ response }: HttpContextContract) {

        const latestIn = await Activity.query().whereHas('user', (user) => {
            user.where('flag', 1)
        }).where('flag', 1)
            .where('status', 'In')
            .preload('user', user => {
                user.preload('profilePic')
            })
            .orderBy('id', 'desc')
            .firstOrFail()

        const latestOut = await Activity.query().whereHas('user', (user) => {
            user.where('flag', 1)
        }).where('flag', 1)
            .where('status', 'Out')
            .preload('user', user => {
                user.preload('profilePic')
            })
            .orderBy('id', 'desc')
            .firstOrFail()

        return response.status(200).json([latestIn, latestOut])
    }

    public async showActivity({ params, response }: HttpContextContract) {

        const user = await User.query()
            .where('id', params.id)
            .where('flag', 1)
            .preload('activity')
        return response.status(200).json(user)
    }
}
