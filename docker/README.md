# Docker configuration for MercadoOS

This folder contains Docker assets for the monorepo.

## Dockerfiles

- `Dockerfile.web` - build and run the `apps/web` package.
- `Dockerfile.api` - build and run the `apps/api` package.

## Compose

Use Docker Compose from the root directory:

```bash
docker compose -f docker/docker-compose.yml up --build
```

## Notes

- The build stages use `pnpm` through `corepack`.
- `web` listens on port `3000` and `api` listens on port `4000`.
- Both services are configured for production builds.
