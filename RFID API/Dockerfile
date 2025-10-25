# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the application
RUN node ace build --production

# Production stage
FROM node:18-alpine

WORKDIR /app

# Install curl for healthcheck
RUN apk add --no-cache curl

# Copy built application from builder
COPY --from=builder /app/build .

# Copy node_modules from builder
COPY --from=builder /app/node_modules ./node_modules

# Expose port
EXPOSE 3333

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD curl -f http://localhost:3333/health || exit 1

# Start the application
CMD ["node", "server.js"]
