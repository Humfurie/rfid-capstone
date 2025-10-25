/**
 * Frontend WebSocket Client Example for RFID System
 *
 * This example shows how to connect to the RFID WebSocket server
 * and listen for real-time RFID scan events.
 *
 * Install socket.io-client in your frontend:
 * npm install socket.io-client
 */

import io from 'socket.io-client'

// Replace with your backend URL
const BACKEND_URL = 'http://localhost:3333'

// Initialize Socket.IO client
const socket = io(BACKEND_URL, {
  transports: ['websocket', 'polling'],
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionAttempts: 5,
})

// Connection event handlers
socket.on('connect', () => {
  console.log('✅ Connected to RFID WebSocket server')
  console.log('Socket ID:', socket.id)

  // Request scanner status on connect
  socket.emit('rfid:status')
})

socket.on('disconnect', (reason) => {
  console.log('❌ Disconnected from server:', reason)
})

socket.on('connect_error', (error) => {
  console.error('Connection error:', error)
})

// RFID event handlers
socket.on('rfid:scan', (data) => {
  console.log('🏷️ RFID Card Scanned:', data)

  // Data structure:
  // {
  //   user: { id, firstName, lastName, rfidNumber, role, position, yearLevel, ... },
  //   activity: { id, day, status, createdAt },
  //   message: "John Doe scanned In"
  // }

  // Update your UI here
  displayScanNotification(data)
  updateActivityList(data)
})

socket.on('rfid:error', (error) => {
  console.error('⚠️ RFID Scan Error:', error)

  // Error structure:
  // {
  //   rfidNumber: "12345678",
  //   error: "User not found or system error",
  //   message: "..."
  // }

  // Show error notification
  displayErrorNotification(error)
})

socket.on('rfid:status', (status) => {
  console.log('📡 Scanner Status:', status)

  // Status structure:
  // {
  //   connected: true/false
  // }

  updateScannerStatus(status.connected)
})

// Example UI update functions (implement based on your framework)

function displayScanNotification(data) {
  // Example: Show a toast/notification
  const { user, activity, message } = data

  console.log(`${message}`)
  console.log(`User: ${user.firstName} ${user.lastName}`)
  console.log(`Status: ${activity.status}`)
  console.log(`Time: ${activity.createdAt}`)

  // You can use your UI framework's notification system here
  // For React: use a toast library like react-hot-toast
  // For Vue: use vue-toastification
  // For vanilla JS: create a notification element
}

function updateActivityList(data) {
  // Example: Update a list of recent activities
  const { user, activity } = data

  // Add to the top of your activities list
  const activityElement = {
    id: activity.id,
    userName: `${user.firstName} ${user.lastName}`,
    status: activity.status,
    time: activity.createdAt,
    userRole: user.role?.role || 'N/A',
  }

  console.log('New activity:', activityElement)
  // Prepend to your activities array/list in state
}

function displayErrorNotification(error) {
  console.error(`Error scanning RFID ${error.rfidNumber}: ${error.message}`)
  // Show error toast/notification
}

function updateScannerStatus(connected) {
  const statusElement = document.getElementById('scanner-status')
  if (statusElement) {
    statusElement.textContent = connected ? 'Connected' : 'Disconnected'
    statusElement.className = connected ? 'status-connected' : 'status-disconnected'
  }
}

// Request scanner status periodically (every 30 seconds)
setInterval(() => {
  if (socket.connected) {
    socket.emit('rfid:status')
  }
}, 30000)

// Export socket for use in other parts of your app
export default socket
