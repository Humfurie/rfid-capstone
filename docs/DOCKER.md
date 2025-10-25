# Docker Deployment Guide

This guide explains how to deploy the RFID Attendance System using Docker and Docker Compose.

## 📋 Prerequisites

- Docker Engine 20.10+
- Docker Compose 2.0+
- At least 2GB of free RAM
- Arduino with RFID reader connected to host machine

## 🏗️ Architecture

The Docker Compose setup includes three services:

```
┌─────────────────────────────────────────┐
│         Docker Network (rfid-network)   │
│                                         │
│  ┌──────────────┐   ┌──────────────┐  │
│  │  PostgreSQL  │   │  AdonisJS    │  │
│  │  Port: 5432  │◄──│  API         │  │
│  │              │   │  Port: 3333  │  │
│  └──────────────┘   └──────┬───────┘  │
│                             │           │
│                     ┌───────▼───────┐  │
│                     │  Next.js Web  │  │
│                     │  Port: 3000   │  │
│                     └───────────────┘  │
└─────────────────────────────────────────┘
         ▲
         │ Arduino Serial Port (Host)
         │ /dev/ttyUSB0 or COM3
```

## 🚀 Quick Start

### 1. Configure Environment

Copy the example environment file:
```bash
cp .env.example .env
```

Edit `.env` and update:
```env
# Serial port for your Arduino
SERIAL_PORT=/dev/ttyUSB0  # Linux
# or
SERIAL_PORT=COM3          # Windows (requires Docker Desktop)
```

### 2. Build and Start Services

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Check status
docker-compose ps
```

### 3. Initialize Database

```bash
# Run migrations
docker-compose exec api node ace migration:run

# Optional: Seed database
docker-compose exec api node ace db:seed
```

### 4. Access the Application

- **Web Application**: http://localhost:3000
- **API**: http://localhost:3333
- **PostgreSQL**: localhost:5432

## 🔧 Configuration

### Environment Variables

**Root `.env` (Docker Compose)**
```env
APP_KEY=your-secret-key-here
SERIAL_PORT=/dev/ttyUSB0
SERIAL_BAUD_RATE=9600
POSTGRES_USER=rfid_user
POSTGRES_PASSWORD=rfid_password
POSTGRES_DB=rfid_db
```

**API Configuration** (`RFID API/.env`)
- For local development (without Docker)
- Uses PostgreSQL on localhost:5432

**Docker Environment** (`RFID API/.env.docker`)
- Used inside Docker containers
- PostgreSQL host is `postgres` (service name)

### Serial Port Configuration

#### Linux
1. Find your Arduino port:
   ```bash
   ls /dev/tty*
   # Usually /dev/ttyUSB0 or /dev/ttyACM0
   ```

2. Add your user to dialout group:
   ```bash
   sudo usermod -a -G dialout $USER
   # Log out and back in
   ```

3. Update `docker-compose.yml`:
   ```yaml
   services:
     api:
       devices:
         - /dev/ttyUSB0:/dev/ttyUSB0  # Your Arduino port
   ```

#### Windows (Docker Desktop)
1. Find COM port in Device Manager

2. **Note**: Serial port passthrough on Windows Docker Desktop has limitations. Consider running the API natively on Windows while keeping the database in Docker.

#### macOS
1. Find port:
   ```bash
   ls /dev/cu.*
   # Usually /dev/cu.usbserial-*
   ```

2. Update `docker-compose.yml` devices section

## 📦 Docker Commands

### Managing Services

```bash
# Start all services
docker-compose up -d

# Stop all services
docker-compose down

# Restart a specific service
docker-compose restart api

# View logs
docker-compose logs -f api        # API logs
docker-compose logs -f web        # Web logs
docker-compose logs -f postgres   # Database logs

# Rebuild after code changes
docker-compose up -d --build
```

### Database Operations

```bash
# Run migrations
docker-compose exec api node ace migration:run

# Rollback migrations
docker-compose exec api node ace migration:rollback

# Seed database
docker-compose exec api node ace db:seed

# Access PostgreSQL shell
docker-compose exec postgres psql -U rfid_user -d rfid_db

# Backup database
docker-compose exec postgres pg_dump -U rfid_user rfid_db > backup.sql

# Restore database
docker-compose exec -T postgres psql -U rfid_user -d rfid_db < backup.sql
```

### Debugging

```bash
# Access API container shell
docker-compose exec api sh

# Access web container shell
docker-compose exec web sh

# Check API health
curl http://localhost:3333/health

# View running processes
docker-compose top
```

## 🔄 Development Workflow

### Code Changes

**API Changes:**
```bash
# Rebuild and restart API
docker-compose up -d --build api
```

**Web Changes:**
```bash
# Rebuild and restart web
docker-compose up -d --build web
```

**Database Schema Changes:**
```bash
# Create new migration
docker-compose exec api node ace make:migration migration_name

# Run migrations
docker-compose exec api node ace migration:run
```

### Hot Reload (Development Mode)

For development with hot reload, use volume mounts:

```yaml
# Add to docker-compose.yml services
api:
  volumes:
    - ./RFID API:/app
    - /app/node_modules
  command: npm run dev

web:
  volumes:
    - ./web:/app
    - /app/node_modules
    - /app/.next
  command: npm run dev
```

Then:
```bash
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```

## 🗄️ Data Persistence

PostgreSQL data is stored in a Docker volume:

```bash
# View volumes
docker volume ls

# Inspect volume
docker volume inspect rfid-capstone_postgres_data

# Backup volume
docker run --rm -v rfid-capstone_postgres_data:/data -v $(pwd):/backup \
  alpine tar czf /backup/postgres-backup.tar.gz /data

# Remove volume (WARNING: deletes all data)
docker-compose down -v
```

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Find process using port 3000
lsof -i :3000
# or
netstat -tuln | grep 3000

# Kill process or change port in docker-compose.yml
```

### Serial Port Access Denied

```bash
# Linux: Add user to dialout group
sudo usermod -a -G dialout $USER

# Check permissions
ls -l /dev/ttyUSB0

# Run container with privileged mode (already configured)
```

### Database Connection Failed

```bash
# Check if PostgreSQL is running
docker-compose ps postgres

# Check logs
docker-compose logs postgres

# Verify environment variables
docker-compose exec api env | grep PG_
```

### Container Won't Start

```bash
# View detailed logs
docker-compose logs api

# Check container status
docker-compose ps

# Rebuild from scratch
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Migration Errors

```bash
# Reset database (WARNING: deletes all data)
docker-compose down -v
docker-compose up -d
docker-compose exec api node ace migration:run
```

## 🚀 Production Deployment

### Using PostgreSQL

The system is now configured for PostgreSQL by default. For production:

1. **Use environment variables** for sensitive data
2. **Set strong passwords** in `.env`
3. **Enable SSL** for database connections
4. **Regular backups** of PostgreSQL data
5. **Use Docker secrets** for production:

```yaml
# docker-compose.prod.yml
secrets:
  db_password:
    file: ./secrets/db_password.txt

services:
  postgres:
    environment:
      POSTGRES_PASSWORD_FILE: /run/secrets/db_password
    secrets:
      - db_password
```

### Using MySQL (Legacy)

To use MySQL instead of PostgreSQL:

1. Update `RFID API/.env`:
   ```env
   DB_CONNECTION=mysql
   MYSQL_HOST=localhost
   MYSQL_USER=root
   MYSQL_DB_NAME=rfid_db
   ```

2. Update `docker-compose.yml` to use MySQL image:
   ```yaml
   mysql:
     image: mysql:8
     environment:
       MYSQL_ROOT_PASSWORD: password
       MYSQL_DATABASE: rfid_db
   ```

## 📊 Monitoring

### Health Checks

All services include health checks:

```bash
# Check service health
docker-compose ps

# API health endpoint
curl http://localhost:3333/health

# Web health
curl http://localhost:3000
```

### Resource Usage

```bash
# View resource usage
docker stats

# Limit resources in docker-compose.yml
services:
  api:
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
```

## 🔐 Security

### Best Practices

1. **Never commit `.env` files** to git
2. **Use strong passwords** for PostgreSQL
3. **Rotate JWT secrets** regularly
4. **Use HTTPS** in production (reverse proxy)
5. **Limit container privileges** where possible
6. **Regular security updates**:
   ```bash
   docker-compose pull
   docker-compose up -d
   ```

### Network Isolation

Services communicate on a private network. Only expose necessary ports:

```yaml
services:
  postgres:
    # Don't expose to host in production
    # ports:
    #   - "5432:5432"
```

## 📝 Notes

- **Arduino Connection**: Serial port must be passed from host to container
- **Data Persistence**: PostgreSQL data persists in Docker volumes
- **First Run**: Always run migrations after first startup
- **Logs**: Check logs if services fail to start
- **Backups**: Implement regular database backups for production

## 🆘 Support

For issues:
1. Check logs: `docker-compose logs -f`
2. Verify environment variables
3. Ensure ports are not in use
4. Check Docker daemon is running
5. Review this documentation

## 🔄 Switching Between PostgreSQL and MySQL

The system supports both databases. To switch:

1. **PostgreSQL** (Default):
   ```env
   DB_CONNECTION=pg
   ```

2. **MySQL**:
   ```env
   DB_CONNECTION=mysql
   ```

Then restart services and run migrations.
