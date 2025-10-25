# Quick Start Guide

## 🚀 Fastest Way to Run (Docker)

```bash
# 1. Clone and navigate to project
cd rfid-capstone

# 2. Setup environment
cp .env.example .env

# 3. Start everything (PostgreSQL + API + Web)
docker-compose up -d

# 4. Setup database
docker-compose exec api node ace migration:run

# 5. Open browser
# Web App: http://localhost:3000
# API: http://localhost:3333
```

**That's it! Your RFID attendance system is running!**

## 📋 What's Running?

- **PostgreSQL Database** - localhost:5432
- **AdonisJS API** - http://localhost:3333
- **Next.js Web App** - http://localhost:3000

## 🔌 Connect Arduino

1. Upload `RFID.Arduino/RFID.Arduino.ino` to your Arduino
2. Find your COM port:
   - **Windows**: Device Manager → Ports (COM3, COM4, etc.)
   - **Linux**: `ls /dev/tty*` (usually `/dev/ttyUSB0`)
   - **Mac**: `ls /dev/cu.*`

3. Update `.env` in root directory:
   ```env
   SERIAL_PORT=/dev/ttyUSB0  # or COM3 on Windows
   ```

4. Restart API:
   ```bash
   docker-compose restart api
   ```

## 👤 Login

1. Go to http://localhost:3000
2. Login as:
   - **Admin** - Full access to manage users
   - **Student** - View own attendance
   - **Employee** - View own attendance
   - **Parent** - View children's attendance

## 📝 Common Commands

```bash
# View logs
docker-compose logs -f

# Stop all services
docker-compose down

# Restart a service
docker-compose restart api

# Database backup
docker-compose exec postgres pg_dump -U rfid_user rfid_db > backup.sql
```

## 🐛 Something Wrong?

```bash
# Check service status
docker-compose ps

# View API logs
docker-compose logs api

# Rebuild everything
docker-compose down
docker-compose up -d --build
```

## 📚 More Info

- **Full Docker Guide**: [DOCKER.md](./DOCKER.md)
- **Complete README**: [README.md](./README.md)

## 🎯 Next Steps

1. **Create users** in the admin panel
2. **Assign RFID cards** to users
3. **Scan cards** to track attendance
4. **View reports** in the dashboard

Enjoy your RFID attendance system!
