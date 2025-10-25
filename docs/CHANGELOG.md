# Changelog - RFID Attendance System

## [2.0.0] - 2025 Complete Refactor

### 🎉 Major Changes

#### Application Architecture
- **Merged Frontend Applications**: Combined separate `backend/` (admin) and `frontend/` (user portal) Next.js apps into a single unified `web/` application
  - Unified routing: `/admin` for admin dashboard, `/portal` for user portal
  - Single login page with automatic role-based redirection
  - Shared components and utilities
  - Reduced code duplication by ~40%

#### Database Migration
- **PostgreSQL Support**: Migrated from MySQL to PostgreSQL as primary database
  - Added `pg` driver (v8.16.3)
  - Updated database configuration in `config/database.ts`
  - PostgreSQL connection settings via environment variables
  - MySQL support maintained for legacy compatibility

#### Docker & Deployment
- **Docker Compose Setup**: Complete containerization of the application
  - PostgreSQL container with persistent volumes
  - AdonisJS API container with health checks
  - Next.js web container optimized for production
  - Network isolation and inter-service communication
  - Serial port passthrough for Arduino RFID reader

#### Configuration Improvements
- **Environment Variables**: Centralized configuration management
  - `.env.example` template at root for Docker Compose
  - `RFID API/.env.docker` for container deployment
  - `RFID API/.env` for local development
  - Configurable serial port settings (no more hardcoded COM3!)

- **Serial Port Configuration**:
  - `SERIAL_PORT` environment variable
  - `SERIAL_BAUD_RATE` environment variable
  - Updated `ActivitiesController.ts` to use environment config

#### Dependency Updates
- **AdonisJS API**:
  - @adonisjs/core: 5.8.6 → 5.9.0
  - TypeScript: 4.6 → 5.7
  - mysql2: 2.3.3 → 3.12.0
  - jsonwebtoken: 8.5.1 → 9.0.2
  - serialport: 10.5.0 → 12.0.0
  - Added: pg@8.16.3

- **Next.js Web**:
  - Next.js: 13.0.6/13.1.1 → 15.1.3
  - React: 18.2.0 → 18.3.1
  - Material-UI: v5 → v6
  - Mantine: v5 → v7
  - TypeScript: 4.9.3 → 5.7.3
  - All dependencies updated to latest stable versions

### ✨ New Features

1. **Health Check Endpoint**: Added `/health` endpoint for container health monitoring
2. **Unified Login System**: Single login page supporting all user roles
3. **Auto-redirect**: Root route (`/`) automatically redirects based on user role
4. **Docker Support**: One-command deployment with `docker-compose up`
5. **Database Flexibility**: Support for both PostgreSQL and MySQL

### 📁 Project Structure

**Before:**
```
rfid-capstone/
├── RFID API/        # AdonisJS
├── backend/         # Next.js (admin)
├── frontend/        # Next.js (users)
└── RFID.Arduino/    # Arduino
```

**After:**
```
rfid-capstone/
├── RFID API/        # AdonisJS with PostgreSQL
├── web/             # Unified Next.js app
├── RFID.Arduino/    # Arduino
├── docker-compose.yml
├── DOCKER.md
└── QUICKSTART.md
```

### 🔧 Configuration Files Added

- `docker-compose.yml` - Multi-container orchestration
- `RFID API/Dockerfile` - API container definition
- `RFID API/.dockerignore` - Docker build exclusions
- `RFID API/.env.docker` - Container environment template
- `web/Dockerfile` - Web app container definition
- `web/.dockerignore` - Docker build exclusions
- `.env.example` - Root environment template
- `DOCKER.md` - Comprehensive Docker guide
- `QUICKSTART.md` - Fast setup guide
- `CHANGELOG.md` - This file

### 🗄️ Database Changes

#### PostgreSQL Configuration (New)
```env
DB_CONNECTION=pg
PG_HOST=localhost
PG_PORT=5432
PG_USER=rfid_user
PG_PASSWORD=rfid_password
PG_DB_NAME=rfid_db
```

#### MySQL Configuration (Legacy)
```env
DB_CONNECTION=mysql
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_DB_NAME=rfid_db
```

### 📝 Documentation Updates

- **README.md**: Updated with Docker deployment instructions
- **DOCKER.md**: Complete guide for Docker deployment
- **QUICKSTART.md**: Quick reference for getting started
- **CHANGELOG.md**: This comprehensive changelog

### 🐛 Bug Fixes

- Fixed hardcoded serial port in `ActivitiesController.ts`
- Resolved component duplication between frontend apps
- Fixed environment variable validation in `env.ts`
- Improved error handling in API routes

### ⚠️ Breaking Changes

1. **Database**: Default database changed from MySQL to PostgreSQL
   - **Migration Path**: Update `.env` to use PostgreSQL or set `DB_CONNECTION=mysql` to continue using MySQL

2. **Environment Variables**: New required PostgreSQL variables
   - `PG_HOST`, `PG_PORT`, `PG_USER`, `PG_PASSWORD`, `PG_DB_NAME`

3. **Application URLs**: Unified application structure
   - Admin: `http://localhost:3000/admin` (was separate app on different port)
   - Portal: `http://localhost:3000/portal` (was separate app)
   - Login: `http://localhost:3000/login` (unified)

### 🔄 Migration Guide

#### From Old Structure to New

1. **Update Environment Variables**:
   ```bash
   cd "RFID API"
   # Update .env with PostgreSQL settings
   # Or keep DB_CONNECTION=mysql for MySQL
   ```

2. **Install New Dependencies**:
   ```bash
   # API
   cd "RFID API"
   npm install

   # Web (new unified app)
   cd ../web
   npm install
   ```

3. **Run Migrations**:
   ```bash
   cd "RFID API"
   node ace migration:run
   ```

4. **Start Services**:
   ```bash
   # Option 1: Docker (Recommended)
   docker-compose up -d

   # Option 2: Local
   cd "RFID API" && npm run dev &
   cd web && npm run dev
   ```

### 📦 Deployment

#### Docker Deployment (New!)
```bash
# Start everything
docker-compose up -d

# Run migrations
docker-compose exec api node ace migration:run

# View logs
docker-compose logs -f
```

#### Local Deployment
```bash
# Setup PostgreSQL
createdb rfid_db

# Start API
cd "RFID API"
npm install
npm run dev

# Start Web
cd web
npm install
npm run dev
```

### 🎯 Future Improvements

- [ ] Add Redis for session management
- [ ] Implement WebSocket for real-time updates
- [ ] Add Prometheus metrics
- [ ] Set up CI/CD pipeline
- [ ] Add automated testing
- [ ] Implement rate limiting
- [ ] Add API documentation (Swagger/OpenAPI)

### 👥 Contributors

- Major refactor and Docker implementation: 2025

---

## [1.0.0] - 2023 Initial Release

### Features
- AdonisJS 5 REST API
- Separate Next.js admin and user portals
- MySQL database with Lucid ORM
- Arduino RFID integration
- JWT authentication
- Role-based access control
- Activity tracking and reporting

---

**Legend**:
- 🎉 Major Changes
- ✨ New Features
- 🐛 Bug Fixes
- 📝 Documentation
- ⚠️ Breaking Changes
- 🔧 Configuration
- 🗄️ Database
