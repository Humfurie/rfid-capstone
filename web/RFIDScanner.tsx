/**
 * React Component Example for RFID WebSocket Integration
 *
 * This is a complete React component showing how to integrate
 * the RFID WebSocket system into your frontend.
 *
 * Install dependencies:
 * npm install socket.io-client react-hot-toast
 */

import React, { useEffect, useState } from 'react'
import io, { Socket } from 'socket.io-client'
import toast from 'react-hot-toast'

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333'

interface User {
  id: number
  firstName: string
  lastName: string
  rfidNumber: string
  role?: { role: string }
  position?: { position: string }
  yearLevel?: { year: string }
  profilePic?: any
}

interface Activity {
  id: number
  day: string
  status: 'In' | 'Out'
  createdAt: string
}

interface RFIDScanData {
  user: User
  activity: Activity
  message: string
}

interface ScannerStatus {
  connected: boolean
}

export default function RFIDScanner() {
  const [socket, setSocket] = useState<Socket | null>(null)
  const [scannerConnected, setScannerConnected] = useState(false)
  const [recentScans, setRecentScans] = useState<RFIDScanData[]>([])
  const [isSocketConnected, setIsSocketConnected] = useState(false)

  useEffect(() => {
    // Initialize Socket.IO connection
    const newSocket = io(BACKEND_URL, {
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 5,
    })

    // Connection handlers
    newSocket.on('connect', () => {
      console.log('Connected to RFID WebSocket server')
      setIsSocketConnected(true)
      toast.success('Connected to RFID server')

      // Request scanner status
      newSocket.emit('rfid:status')
    })

    newSocket.on('disconnect', (reason) => {
      console.log('Disconnected from server:', reason)
      setIsSocketConnected(false)
      toast.error('Disconnected from RFID server')
    })

    newSocket.on('connect_error', (error) => {
      console.error('Connection error:', error)
      toast.error('Connection error - check if backend is running')
    })

    // RFID event handlers
    newSocket.on('rfid:scan', (data: RFIDScanData) => {
      console.log('RFID Scan received:', data)

      // Add to recent scans
      setRecentScans((prev) => [data, ...prev.slice(0, 9)]) // Keep last 10 scans

      // Show notification
      const statusColor = data.activity.status === 'In' ? '🟢' : '🔴'
      toast.success(
        `${statusColor} ${data.user.firstName} ${data.user.lastName} - ${data.activity.status}`,
        {
          duration: 4000,
          icon: '🏷️',
        }
      )

      // Optional: Play sound
      playNotificationSound()
    })

    newSocket.on('rfid:error', (error: any) => {
      console.error('RFID Error:', error)
      toast.error(`Scan Error: ${error.message}`)
    })

    newSocket.on('rfid:status', (status: ScannerStatus) => {
      console.log('Scanner status:', status)
      setScannerConnected(status.connected)
    })

    setSocket(newSocket)

    // Cleanup on unmount
    return () => {
      newSocket.close()
    }
  }, [])

  // Request scanner status every 30 seconds
  useEffect(() => {
    if (!socket) return

    const interval = setInterval(() => {
      if (socket.connected) {
        socket.emit('rfid:status')
      }
    }, 30000)

    return () => clearInterval(interval)
  }, [socket])

  const playNotificationSound = () => {
    // Optional: play a beep sound
    const audio = new Audio('/notification.mp3')
    audio.play().catch((err) => console.log('Could not play sound:', err))
  }

  return (
    <div className="rfid-scanner-container">
      {/* Status Bar */}
      <div className="status-bar">
        <div className="status-item">
          <span className="status-label">WebSocket:</span>
          <span className={`status-indicator ${isSocketConnected ? 'connected' : 'disconnected'}`}>
            {isSocketConnected ? '🟢 Connected' : '🔴 Disconnected'}
          </span>
        </div>
        <div className="status-item">
          <span className="status-label">Scanner:</span>
          <span className={`status-indicator ${scannerConnected ? 'connected' : 'disconnected'}`}>
            {scannerConnected ? '🟢 Ready' : '🔴 Not Ready'}
          </span>
        </div>
      </div>

      {/* Recent Scans */}
      <div className="recent-scans">
        <h2>Recent Scans</h2>
        {recentScans.length === 0 ? (
          <p className="no-scans">Waiting for RFID scans...</p>
        ) : (
          <div className="scans-list">
            {recentScans.map((scan, index) => (
              <div key={`${scan.activity.id}-${index}`} className="scan-item">
                <div className="scan-user">
                  <div className="user-avatar">
                    {scan.user.firstName[0]}
                    {scan.user.lastName[0]}
                  </div>
                  <div className="user-info">
                    <div className="user-name">
                      {scan.user.firstName} {scan.user.lastName}
                    </div>
                    <div className="user-details">
                      {scan.user.role?.role} {scan.user.yearLevel && `- ${scan.user.yearLevel.year}`}
                    </div>
                  </div>
                </div>
                <div className="scan-status">
                  <span className={`status-badge ${scan.activity.status.toLowerCase()}`}>
                    {scan.activity.status}
                  </span>
                  <div className="scan-time">
                    {new Date(scan.activity.createdAt).toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// Optional: CSS-in-JS or add these styles to your global CSS
const styles = `
.rfid-scanner-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.status-bar {
  display: flex;
  gap: 20px;
  padding: 15px;
  background: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 20px;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.status-label {
  font-weight: 600;
  color: #666;
}

.status-indicator.connected {
  color: #22c55e;
  font-weight: 600;
}

.status-indicator.disconnected {
  color: #ef4444;
  font-weight: 600;
}

.recent-scans h2 {
  margin-bottom: 15px;
  color: #333;
}

.no-scans {
  text-align: center;
  padding: 40px;
  color: #999;
}

.scans-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.scan-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: white;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  transition: all 0.2s;
}

.scan-item:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.scan-user {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #3b82f6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.user-name {
  font-weight: 600;
  color: #333;
}

.user-details {
  font-size: 14px;
  color: #666;
}

.scan-status {
  text-align: right;
}

.status-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 4px;
}

.status-badge.in {
  background: #dcfce7;
  color: #16a34a;
}

.status-badge.out {
  background: #fee2e2;
  color: #dc2626;
}

.scan-time {
  font-size: 12px;
  color: #999;
}
`
