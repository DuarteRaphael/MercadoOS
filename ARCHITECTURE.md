# Arquitetura do MercadoOS

## Visão Geral

MercadoOS segue uma arquitetura modular em monorepo, separando responsabilidades em aplicações, pacotes compartilhados e infraestrutura.

## Objetivos Arquiteturais

- Isolar domínio de negócio das camadas de apresentação e infraestrutura
- Facilitar a evolução incremental do produto
- Permitir reuso entre aplicações e pacotes internos
- Garantir segurança e consistência de deploy

## Estrutura de Pastas

- `apps/web` — frontend Next.js
- `apps/api` — backend NestJS
- `packages/` — bibliotecas e pacotes compartilhados
- `docker/` — artefatos de conteinerização
- `docs/` — documentação arquitural e de processo
- `specs/` — especificações de sprint e objetivos técnicos

## Camadas da Aplicação

1. Apresentação: UI, páginas e roteamento frontal
2. API: controladores, serviços, validação e contratos
3. Domínio: entidades, casos de uso e regras de negócio
4. Persistência: ORM, migrações e repositórios
5. Infraestrutura: deploy, containers e configurações de ambiente

## Decisões Técnicas

- `Next.js` para frontend moderno, com suporte a SSR/SSG e rotas otimizadas
- `NestJS` para backend estruturado e modular
- `Prisma` para modelagem de dados com tipagem forte
- `Docker` para ambiente local idêntico ao de produção
- `pnpm` e `Turborepo` para monorepo de alta performance
