import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Board, Sensor } from 'johnny-five'
import { SerialPort, ReadlineParser } from 'serialport'


export default class RfidsController {
    public async show({ request, response }: HttpContextContract) {
        let parsed: any
        const port = new SerialPort({ path: 'COM3', baudRate: 9600 })
        const parser = new ReadlineParser();

        port.pipe(parser)
        parser.on('data', (data) => {
            parsed = parseInt(data.toString(), 10)
            console.log(parsed)
            // console.log(data)
        })





        return response.status(200)
    }
}
