FROM oven/bun:1 AS builder

WORKDIR /app

COPY package.json bun.lock ./

RUN --mount=type=cache,target=/root/.bun/install/cache \
  bun install --frozen-lockfile

COPY . .

RUN bun run build

FROM caddy:2-alpine

COPY --from=builder /app/dist /usr/share/caddy

EXPOSE 80
