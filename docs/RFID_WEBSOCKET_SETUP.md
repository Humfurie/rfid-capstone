# RFID WebSocket Integration Guide

## Overview

This project implements a **Node.js Serial Bridge** that connects your Arduino RFID scanner to the AdonisJS backend and broadcasts real-time scan events to frontend clients via WebSocket.

## Architecture

```
┌──────────────┐    Serial     ┌────────────────────┐    WebSocket    ┌──────────────┐
│   Arduino    │─────────────>│  AdonisJS Backend  │<───────────────>│   Frontend   │
│ RFID Scanner │   (USB/COM)   │  + Socket.IO       │   (Real-time)   │    Client    │
└──────────────┘               └────────────────────┘                 └──────────────┘
                                        │
                                        ▼
                                  ┌──────────┐
                                  │ Database │
                                  └──────────┘
```

## Components

### 1. Arduino RFID Scanner
**File:** `RFID.Arduino/RFID.Arduino.ino`

The Arduino code:
- Scans RFID cards using MFRC522 reader
- Sends **only the decimal UID** via serial port (clean format)
- Includes 1-second delay to prevent duplicate reads
- Outputs format: `12345678\n` (number + newline)

### 2. Serial Service (Backend)
**File:** `RFID API/app/Services/SerialService.ts`

Singleton service that:
- Opens and maintains serial port connection
- Listens for RFID data from Arduino
- Processes scans (validates user, creates activity record)
- Broadcasts scan results to all connected WebSocket clients

### 3. Socket Provider (Backend)
**File:** `RFID API/providers/SocketProvider.ts`

AdonisJS provider that:
- Initializes Socket.IO server on app startup
- Sets up WebSocket connection handlers
- Injects Socket.IO instance into SerialService
- Handles graceful shutdown

### 4. Activities Controller (Backend)
**File:** `RFID API/app/Controllers/Http/Users/ActivitiesController.ts`

HTTP endpoints for:
- `/rfid/status` - Get scanner connection status
- `/rfid/show` - Get activity dashboard data
- `/rfid/scan` - Get latest scan activity
- `/users/activity/:id` - Get specific user activity

### 5. Frontend Client Examples
**Files:**
- `web/rfid-client-example.js` - Vanilla JavaScript/TypeScript example
- `web/RFIDScanner.tsx` - React component example

## Setup Instructions

### 1. Hardware Setup

1. Connect the MFRC522 RFID reader to Arduino:
   - SDA → Pin 10
   - SCK → Pin 13
   - MOSI → Pin 11
   - MISO → Pin 12
   - IRQ → Not connected
   - GND → GND
   - RST → Pin 9
   - 3.3V → 3.3V

2. Upload the Arduino sketch:
   ```bash
   # Open Arduino IDE
   # Open: RFID.Arduino/RFID.Arduino.ino
   # Select your board and port
   # Click Upload
   ```

3. Connect Arduino to your computer via USB

### 2. Backend Setup

1. Install dependencies (already done):
   ```bash
   cd "RFID API"
   npm install
   ```

2. Configure environment variables:
   ```bash
   # Copy .env.example if you haven't already
   cp ../.env.example .env
   ```

3. Update `.env` with your serial port:
   ```env
   # Windows
   SERIAL_PORT=COM3
   SERIAL_BAUD_RATE=9600

   # Linux
   SERIAL_PORT=/dev/ttyUSB0
   SERIAL_BAUD_RATE=9600

   # macOS
   SERIAL_PORT=/dev/cu.usbserial-1420
   SERIAL_BAUD_RATE=9600
   ```

4. Find your serial port:

   **Windows:**
   - Open Device Manager → Ports (COM & LPT)
   - Look for "Arduino Uno" or "USB Serial Port"

   **Linux:**
   ```bash
   ls /dev/tty* | grep -E 'USB|ACM'
   # Usually /dev/ttyUSB0 or /dev/ttyACM0
   ```

   **macOS:**
   ```bash
   ls /dev/cu.*
   # Look for /dev/cu.usbserial-* or /dev/cu.usbmodem*
   ```

5. Start the server:
   ```bash
   npm run dev
   ```

   You should see:
   ```
   [info] Socket.IO server initialized
   [info] Serial Port opened on /dev/ttyUSB0
   [info] Serial Service initialized successfully
   ```

### 3. Frontend Setup

#### Option A: Using the example code directly

1. Install socket.io-client in your frontend:
   ```bash
   npm install socket.io-client
   ```

2. Copy the appropriate example:
   - For vanilla JS/TS: `web/rfid-client-example.js`
   - For React: `web/RFIDScanner.tsx`

3. Update the backend URL:
   ```javascript
   const BACKEND_URL = 'http://localhost:3333' // Change to your backend URL
   ```

#### Option B: Integration into existing frontend

For Next.js/React:
```bash
npm install socket.io-client react-hot-toast
```

Then import and use the RFIDScanner component:
```tsx
import RFIDScanner from '@/components/RFIDScanner'

export default function DashboardPage() {
  return (
    <div>
      <h1>RFID Dashboard</h1>
      <RFIDScanner />
    </div>
  )
}
```

## API Reference

### WebSocket Events

#### Client → Server

| Event | Description | Payload |
|-------|-------------|---------|
| `rfid:status` | Request scanner status | None |

#### Server → Client

| Event | Description | Payload |
|-------|-------------|---------|
| `rfid:scan` | New RFID scan detected | `RFIDScanData` |
| `rfid:error` | Error processing scan | `ErrorData` |
| `rfid:status` | Scanner status response | `StatusData` |

#### Data Types

**RFIDScanData:**
```typescript
{
  user: {
    id: number
    firstName: string
    lastName: string
    rfidNumber: string
    role: { role: string }
    position?: { position: string }
    yearLevel?: { year: string }
    profilePic?: any
  },
  activity: {
    id: number
    day: string
    status: 'In' | 'Out'
    createdAt: string
  },
  message: string // e.g., "John Doe scanned In"
}
```

**ErrorData:**
```typescript
{
  rfidNumber: string
  error: string
  message: string
}
```

**StatusData:**
```typescript
{
  connected: boolean
}
```

### HTTP Endpoints

| Method | Endpoint | Description | Response |
|--------|----------|-------------|----------|
| GET | `/rfid/status` | Get scanner connection status | `{ connected: boolean, message: string }` |
| GET | `/rfid/show` | Get activity dashboard data | Activity statistics |
| GET | `/rfid/scan` | Get latest scan activity | Latest In/Out records |
| GET | `/users/activity/:id` | Get user activity history | User activities |

## Testing

### 1. Test Serial Connection

```bash
# In the backend terminal, you should see:
[info] Serial Port opened on /dev/ttyUSB0
[info] Serial Service initialized successfully
```

### 2. Test RFID Scanning

1. Scan an RFID card on the Arduino reader
2. Check the backend logs:
   ```
   [info] RFID Scanned: 12345678
   [info] Activity logged: User 1 - Status: In
   [info] RFID scan broadcasted to WebSocket clients
   ```

### 3. Test WebSocket Connection

Open your browser console on the frontend:
```javascript
// You should see:
✅ Connected to RFID WebSocket server
Socket ID: abc123
📡 Scanner Status: { connected: true }
```

### 4. Test Real-time Broadcasting

1. Open multiple browser tabs with your frontend
2. Scan an RFID card
3. All tabs should receive the scan event simultaneously

## Troubleshooting

### Arduino Not Detected

**Linux Permission Error:**
```bash
# Add your user to dialout group
sudo usermod -a -G dialout $USER
# Log out and log back in
```

**Port Busy:**
```bash
# Kill any process using the port
sudo fuser -k /dev/ttyUSB0
```

### Backend Issues

**Serial Port Error:**
```
Error: Opening COM3: Access denied
```
- **Windows:** Close Arduino IDE Serial Monitor
- **Linux:** Check permissions (see above)
- **macOS:** Ensure no other app is using the port

**WebSocket Not Connecting:**
- Check CORS settings in `providers/SocketProvider.ts`
- Verify frontend is using correct backend URL
- Check firewall settings

### Frontend Issues

**No Scan Events:**
- Open browser console to check connection status
- Verify WebSocket connection is established
- Check backend logs for scan events

**CORS Errors:**
- Update CORS origin in `providers/SocketProvider.ts`:
  ```typescript
  cors: {
    origin: 'http://localhost:3000', // Your frontend URL
    methods: ['GET', 'POST'],
  }
  ```

## Production Deployment

### Security Considerations

1. **Update CORS settings:**
   ```typescript
   // providers/SocketProvider.ts
   cors: {
     origin: process.env.FRONTEND_URL,
     methods: ['GET', 'POST'],
   }
   ```

2. **Use environment variables:**
   ```env
   FRONTEND_URL=https://your-frontend.com
   SERIAL_PORT=/dev/ttyUSB0
   ```

3. **SSL/TLS:**
   - Use WSS (WebSocket Secure) in production
   - Configure HTTPS on your backend

### Docker Deployment

If deploying with Docker, you need to pass the serial device:

```yaml
# docker-compose.yml
services:
  api:
    devices:
      - "/dev/ttyUSB0:/dev/ttyUSB0"
    environment:
      - SERIAL_PORT=/dev/ttyUSB0
```

## Advanced Configuration

### Custom Serial Parser

If you need to change the delimiter or format:

```typescript
// app/Services/SerialService.ts
this.parser = new ReadlineParser({
  delimiter: '\n', // Change delimiter
})
```

### Multiple RFID Readers

To support multiple readers, you can:
1. Create multiple SerialService instances
2. Use different port configurations
3. Emit different WebSocket events per reader

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the example code in `web/` folder
3. Check backend logs for error messages
4. Verify serial port permissions and connections

## Credits

- **AdonisJS** - Backend framework
- **Socket.IO** - WebSocket library
- **serialport** - Node.js serial port library
- **MFRC522** - Arduino RFID library
