# 1. Install dependencies only when needed
FROM node:14-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package*.json ./

RUN npm install

# This will do the trick, use the corresponding env file for each environment.
# COPY .env.development .env.production

# 2. Production image, copy all the files and run next
FROM node:14-alpine AS runner
WORKDIR /app

# ENV NODE_ENV=development

RUN addgroup -g 1001 -S node
RUN adduser -S nextjs -u 1001

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
# COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY . .

USER nextjs

EXPOSE 8080

CMD ["node", "server.js"]