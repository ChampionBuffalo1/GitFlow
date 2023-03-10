FROM node:18-alpine AS base

FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextflow
USER nextflow

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextflow:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextflow:nodejs /app/.next/static ./.next/static

CMD ["node", "server.js"]
