# Stage 1: Build the Next.js application
FROM node:18-alpine AS builder

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy all files
COPY . .

# Build the Next.js application
RUN pnpm build

# Stage 2: Serve the built application using a minimal image
FROM node:18-alpine AS runner

# Create a non-root user
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# Set working directory
WORKDIR /app

# Install pnpm in the runner stage
RUN npm install -g pnpm

# Copy the build output and dependencies from the build stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/node_modules ./node_modules

# Change ownership of the application files
RUN chown -R nextjs:nextjs /app

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Set NODE_ENV to production
ENV NODE_ENV=production

# Run the Next.js application
CMD ["pnpm", "start"]

# Health check to ensure the application is running
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s \
  CMD curl -f http://localhost:3000/ || exit 1
