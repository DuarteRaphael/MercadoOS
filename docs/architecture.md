# Arquitetura do MercadoOS

## Visão Geral

MercadoOS é uma plataforma ERP SaaS para supermercados e varejistas de proximidade. O projeto adota uma arquitetura em monorepo com fronteira clara entre frontend, backend, infraestrutura e pacotes compartilhados.

## Princípios de Arquitetura

- Clean Architecture
- Domain Driven Design (DDD)
- SOLID
- Baixa acoplamento e alta coesão
- APIs bem definidas e versionadas
- Infraestrutura como código
- Segurança incorporada desde o início

## Estrutura do Monorepo

- `apps/`
  - `web/` — frontend Next.js
  - `api/` — backend NestJS
- `packages/`
  - pacotes compartilhados de domínio, UI, utilitários e configuração
- `docs/` — documentação do projeto
- `docker/` — arquivos de containerização e orquestração
- `specs/` — especificações de sprint e backlog de arquitetura

## Camadas de Aplicação

1. Apresentação
   - Next.js para interface do usuário e rotas de página
2. API
   - NestJS para controladores, serviços e módulos de domínio
3. Domínio
   - Modelos de negócio, entidades e lógica de domínio
4. Persistência
   - Prisma ORM e PostgreSQL para armazenamento de dados
5. Infraestrutura
   - Docker, CI/CD e gestão de configuração

## Componentes Principais

- Autenticação e autorização
- Gestão de produtos e estoque
- Pedidos e vendas
- Relatórios financeiros e operacionais
- Multi-tenancy e configuração de loja

## Decisões Arquiteturais

- `Next.js` como framework de frontend para permitir SSR/SSG e roteamento moderno
- `NestJS` para backend modular e escalável
- `Prisma` como camada de ORM para tipagem forte e migrações controladas
- `Docker` para ambiente de desenvolvimento e implantação consistente
- `pnpm` e `turborepo` para gerenciar workspaces e builds eficientes
