import type { ApplicationContract } from '@ioc:Adonis/Core/Application'
import { Server } from 'socket.io'
import Logger from '@ioc:Adonis/Core/Logger'

export default class SocketProvider {
  constructor(protected app: ApplicationContract) {}

  public async boot() {
    const Server = this.app.container.resolveBinding('Adonis/Core/Server')
    const httpServer = Server.instance!

    // Initialize Socket.IO
    const io = new Server(httpServer, {
      cors: {
        origin: '*', // Configure this based on your frontend URL in production
        methods: ['GET', 'POST'],
      },
      transports: ['websocket', 'polling'],
    })

    // Socket.IO connection handling
    io.on('connection', (socket) => {
      Logger.info(`Client connected: ${socket.id}`)

      socket.on('disconnect', () => {
        Logger.info(`Client disconnected: ${socket.id}`)
      })

      // Allow clients to request connection status
      socket.on('rfid:status', async () => {
        const SerialService = (await import('App/Services/SerialService')).default
        socket.emit('rfid:status', {
          connected: SerialService.getConnectionStatus(),
        })
      })
    })

    // Make io available globally
    this.app.container.singleton('socket.io', () => io)

    Logger.info('Socket.IO server initialized')

    // Initialize Serial Service
    try {
      const SerialService = (await import('App/Services/SerialService')).default
      SerialService.setSocketIO(io)
      await SerialService.initialize()
      Logger.info('Serial Service initialized successfully')
    } catch (error) {
      Logger.error(`Failed to initialize Serial Service: ${error.message}`)
      Logger.warn('Application will continue without RFID scanner')
    }
  }

  public async ready() {
    // Application is ready
  }

  public async shutdown() {
    // Cleanup
    const SerialService = (await import('App/Services/SerialService')).default
    await SerialService.close()
    Logger.info('Serial Service closed')
  }
}
