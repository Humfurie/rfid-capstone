import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Role from 'App/Models/Role'

export default class RolesController {
    public async index({response}:HttpContextContract){
        const role = await Role.all()
        return response.status(200).send(role)
    }

    public async store({request, response}: HttpContextContract) {
        const input = request.all()

        console.log(input)
        await Role.create({name: input.name})

        return response.status(200).json({"message":"saved"})
    }
}
