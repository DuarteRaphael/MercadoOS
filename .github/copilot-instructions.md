# MercadoOS - GitHub Copilot Instructions

## Project Overview

MercadoOS is a modern SaaS ERP platform for supermarkets and grocery stores.

This project must always prioritize:

- Clean Architecture
- Domain Driven Design (DDD)
- SOLID Principles
- DRY
- KISS
- Security First
- Performance
- Scalability
- Testability
- Multi-tenancy

## Technology Stack

Frontend

- Next.js 15
- React 19
- TypeScript
- TailwindCSS
- shadcn/ui

Backend

- NestJS 11
- Prisma ORM
- PostgreSQL
- Redis
- BullMQ

Infrastructure

- Docker
- Docker Compose
- GitHub Actions

Authentication

- JWT
- Refresh Token
- RBAC

Testing

- Jest
- Playwright

## Folder Structure

apps/
packages/
docker/
docs/
scripts/

## Coding Standards

- Never use "any".
- Prefer interfaces over types when appropriate.
- Use dependency injection.
- Follow Repository Pattern.
- Follow Service Pattern.
- Every module must contain:
  - controller
  - service
  - repository
  - dto
  - entity
  - module
  - tests

## Naming

Classes:
PascalCase

Functions:
camelCase

Files:
kebab-case

Database:
snake_case

## Git

Use Conventional Commits.

Examples:

feat:
fix:
docs:
refactor:
test:
style:
chore:

## General Rules

Always generate production-ready code.

Never generate duplicated code.

Always separate business logic from controllers.

Always validate input.

Always document APIs using Swagger.

Always create unit tests.

Always keep the project compiling.