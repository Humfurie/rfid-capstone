# RFID Attendance System (AIS-RFT)

**Automated Identification System using Radio Frequency Technology**

A comprehensive student attendance tracking system using RFID technology, built with AdonisJS, Next.js, and Arduino.

*Originally developed in 2022-2023 as a school project. Updated and refactored in 2025.*

---

## 📁 Project Structure (Updated - Simplified!)

```
rfid-capstone/
├── RFID API/           # AdonisJS Backend API (Port 3333)
├── web/                # Unified Next.js Web App (Port 3000) ✨ NEW!
├── RFID.Arduino/       # Arduino RFID Reader Firmware
├── docker-compose.yml  # Docker orchestration
├── DOCKER.md           # Docker deployment guide
└── QUICKSTART.md       # Quick start guide
```

### ✨ What Changed?

**Before:** Separate `backend/` and `frontend/` Next.js apps
**Now:** Single unified `web/` application with:
- `/admin` - Admin dashboard (from old backend)
- `/portal` - User portal (from old frontend)
- `/login` - Unified login page
- Automatic role-based routing

---

## 🚀 Quick Start

### Prerequisites
- **Option 1 (Docker - Recommended)**: Docker & Docker Compose
- **Option 2 (Local)**: Node.js v18+, PostgreSQL (or MySQL)
- Arduino with MFRC522 RFID reader

### Option 1: Docker Deployment (Recommended) 🐳

**Easiest way to get started with PostgreSQL backend included!**

```bash
# 1. Configure environment
cp .env.example .env
# Edit .env and set your SERIAL_PORT

# 2. Start all services (API + Web + PostgreSQL)
docker-compose up -d

# 3. Run database migrations
docker-compose exec api node ace migration:run

# 4. Access the application
# Web: http://localhost:3000
# API: http://localhost:3333
```

**Upload Arduino firmware** (same as local setup below)

📖 **Full Docker guide**: See [DOCKER.md](./DOCKER.md) for detailed instructions

---

### Option 2: Local Development

### 1. Setup Database
```sql
-- PostgreSQL (Recommended)
CREATE DATABASE rfid_db;

-- Or MySQL (Legacy)
CREATE DATABASE rfid_db;
```

### 2. Start AdonisJS API
```bash
cd "RFID API"
npm install
cp .env.example .env
# Edit .env with your database credentials
node ace migration:run
npm run dev  # Runs on http://localhost:3333
```

### 3. Start Web Application
```bash
cd web
npm install
npm run dev  # Runs on http://localhost:3000
```

### 4. Upload Arduino Firmware
1. Open `RFID.Arduino/RFID.Arduino.ino` in Arduino IDE
2. Upload to Arduino with MFRC522 RFID reader
3. Note the COM port (Windows) or /dev/ttyUSB0 (Linux)

### 5. Configure Serial Port
Edit `RFID API/.env`:
```env
SERIAL_PORT=COM3  # Windows: COM3, Linux: /dev/ttyUSB0
SERIAL_BAUD_RATE=9600
```

---

## 🔧 Configuration

### RFID API (.env)
```env
PORT=3333
HOST=0.0.0.0

# PostgreSQL (Default)
DB_CONNECTION=pg
PG_HOST=localhost
PG_PORT=5432
PG_USER=rfid_user
PG_PASSWORD=rfid_password
PG_DB_NAME=rfid_db

# Or MySQL (Legacy)
# DB_CONNECTION=mysql
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_DB_NAME=rfid_db
MYSQL_PASSWORD=

# Arduino Serial Port
SERIAL_PORT=COM3
SERIAL_BAUD_RATE=9600
```

### Web App (.env)
```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:3333
```

---

## 📱 Features

### Admin Dashboard (`/admin`)
- Live activity monitoring
- Student/Employee/Parent management
- Position & Year level management
- Activity records with filtering
- RFID scanning interface
- Report generation

### User Portal (`/portal`)
- Student profiles & attendance
- Employee profiles & activity history
- Parent profiles with linked children
- Activity statistics

### Authentication
- Role-based access (Admin, Student, Employee, Parent)
- JWT token authentication
- Automatic route protection

---

## 🔄 How It Works

1. Student/Employee **scans RFID card** on Arduino reader
2. Arduino **sends data** via serial port to API (COM3)
3. API **looks up user** by RFID number
4. API **creates activity record** (In/Out toggle)
5. Web app **displays updates** in real-time

---

## 🛠️ Hardware Setup

### Arduino Wiring (MFRC522)
```
Arduino → MFRC522
SDA(10) → SDA
SCK(13) → SCK
MOSI(11)→ MOSI
MISO(12)→ MISO
RST(9)  → RST
3.3V    → 3.3V
GND     → GND
```

---

## 📦 Technology Stack

**Backend:** AdonisJS 5 (Node.js framework)

![adonis js.png](adonis%20js.png)

AdonisJS 5 offers a Laravel-like experience for Node.js, making it accessible and reliable.

**Frontend:** Next.js 15 with React 18

![nextjs.png](nextjs.png)

Next.js provides server-side rendering, excellent performance, and a thriving community with abundant resources.

**Database:** PostgreSQL (primary) / MySQL (legacy support) with Lucid ORM
**UI:** Material-UI, Mantine, Tailwind CSS
**Hardware:** Arduino + MFRC522 RFID reader
**Serial:** SerialPort library
**Deployment:** Docker & Docker Compose

---

## 🚧 Migration from Old Structure

**✅ Completed (2025 Refactor):**
- ✨ **Merged** `backend/` and `frontend/` into unified `web/` app
- 🐘 **Migrated** from MySQL to PostgreSQL (with MySQL legacy support)
- 🐳 **Added** Docker & Docker Compose deployment
- 📦 **Updated** all dependencies to latest versions (Next.js 15, React 18, AdonisJS 5.9)
- ⚙️ **Improved** API configuration with environment variables
- 🔧 **Made** serial port configurable via .env
- 🔐 **Enhanced** authentication with unified login system

**Old folders (`backend/`, `frontend/`) have been removed. ✅**

---

## 🐛 Troubleshooting

### Serial Port Issues
- **Linux**: `/dev/ttyUSB0` or `/dev/ttyACM0`
- **Windows**: Check Device Manager (e.g., COM3)
- **Mac**: `/dev/cu.usbserial-*`

Update `SERIAL_PORT` in API `.env`

### Database Issues
- Verify MySQL is running
- Check credentials in `.env`
- Run migrations: `node ace migration:run`

---

## 📝 API Endpoints

### Authentication
- `POST /api/users/login` - User login

### RFID & Activities
- `GET /rfid` - Trigger RFID scanning
- `GET /rfid/show` - Activities summary
- `GET /rfid/scan` - Latest scan events
- `GET /users/activity/:id` - User activity history

### User Management
- `GET /users/employeeIndex` - List employees
- `GET /users/studentIndex` - List students

---

## 👥 Development Team

School capstone project for student attendance tracking system.

**Updated 2025** - Refactored and modernized with latest dependencies.
