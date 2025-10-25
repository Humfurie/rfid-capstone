import Env from '@ioc:Adonis/Core/Env'
import { SerialPort } from 'serialport'
import { ReadlineParser } from '@serialport/parser-readline'
import Logger from '@ioc:Adonis/Core/Logger'
import Database from '@ioc:Adonis/Lucid/Database'
import User from 'App/Models/User'
import Activity from 'App/Models/Activity'

class SerialService {
  private static instance: SerialService
  private port: SerialPort | null = null
  private parser: ReadlineParser | null = null
  private io: any = null
  private isConnected: boolean = false

  private constructor() {}

  public static getInstance(): SerialService {
    if (!SerialService.instance) {
      SerialService.instance = new SerialService()
    }
    return SerialService.instance
  }

  public setSocketIO(io: any) {
    this.io = io
    Logger.info('Socket.IO instance set in SerialService')
  }

  public async initialize() {
    if (this.isConnected) {
      Logger.info('Serial port already connected')
      return
    }

    const serialPortPath = Env.get('SERIAL_PORT', 'COM3')
    const baudRate = Env.get('SERIAL_BAUD_RATE', 9600)

    try {
      this.port = new SerialPort({
        path: serialPortPath,
        baudRate: baudRate,
        dataBits: 8,
        parity: 'none',
        stopBits: 1,
      })

      this.parser = new ReadlineParser({
        delimiter: '\r\n',
      })

      this.port.pipe(this.parser)

      this.port.on('open', () => {
        Logger.info(`Serial Port opened on ${serialPortPath}`)
        this.isConnected = true
      })

      this.port.on('error', (err) => {
        Logger.error(`Serial Port Error: ${err.message}`)
        this.isConnected = false
      })

      this.port.on('close', () => {
        Logger.info('Serial Port closed')
        this.isConnected = false
      })

      // Handle incoming RFID data
      this.parser.on('data', async (data: string) => {
        await this.handleRFIDScan(data.trim())
      })
    } catch (error) {
      Logger.error(`Failed to initialize serial port: ${error.message}`)
      throw error
    }
  }

  private async handleRFIDScan(rfidNumber: string) {
    Logger.info(`RFID Scanned: ${rfidNumber}`)

    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const d = new Date()
    const day = weekday[d.getDay()]

    const trx = await Database.transaction()
    try {
      // Find user by RFID number
      const user = await User.query()
        .where('rfidNumber', rfidNumber)
        .where('flag', 1)
        .preload('role')
        .preload('position')
        .preload('yearLevel')
        .preload('profilePic')
        .firstOrFail()

      // Get latest activity for this user
      const latestActivity = await Activity.query()
        .whereHas('user', (userQuery) => {
          userQuery.where('rfidNumber', rfidNumber).where('flag', 1)
        })
        .where('flag', 1)
        .orderBy([
          {
            column: 'id',
            order: 'desc',
          },
        ])

      let newStatus: 'In' | 'Out' = 'In'

      // Determine new status based on latest activity
      if (latestActivity.length > 0) {
        const lastStatus = latestActivity[0].status
        newStatus = lastStatus === 'In' ? 'Out' : 'In'
      }

      // Create new activity record
      const activity = new Activity()
      activity.day = day
      activity.status = newStatus
      activity.userId = user.id

      activity.useTransaction(trx)
      await activity.save()

      await trx.commit()

      // Prepare response data
      const responseData = {
        user: user.serialize(),
        activity: {
          id: activity.id,
          day: activity.day,
          status: activity.status,
          createdAt: activity.createdAt,
        },
        message: `${user.firstName} ${user.lastName} scanned ${newStatus}`,
      }

      Logger.info(`Activity logged: User ${user.id} - Status: ${newStatus}`)

      // Broadcast to all connected clients via WebSocket
      if (this.io) {
        this.io.emit('rfid:scan', responseData)
        Logger.info('RFID scan broadcasted to WebSocket clients')
      }

      return responseData
    } catch (error) {
      await trx.rollback()
      Logger.error(`Error processing RFID scan: ${error.message}`)

      // Broadcast error to clients
      if (this.io) {
        this.io.emit('rfid:error', {
          rfidNumber,
          error: 'User not found or system error',
          message: error.message,
        })
      }

      throw error
    }
  }

  public async close() {
    if (this.port && this.port.isOpen) {
      this.port.close()
      Logger.info('Serial port closed')
    }
    this.isConnected = false
  }

  public getConnectionStatus(): boolean {
    return this.isConnected
  }
}

export default SerialService.getInstance()
