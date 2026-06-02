# Sentinela

Sistema de memória operacional inteligente.

O **Sentinela** observa acontecimentos, registra falas, interpreta contexto e transforma informações em eventos, tarefas, alertas e relatórios.

## Objetivo inicial

Criar um sistema independente, reutilizável em vários ambientes, começando pelo módulo operacional de estoque.

## Funcionalidades planejadas

- Escuta contínua do ambiente
- Registro de áudio por trechos de fala
- Transcrição com horário de início e fim
- Interpretação com IA local via Ollama
- Memória operacional e contexto entre falas
- Detecção automática de tarefas
- Registro automático de retiradas, entradas e alertas
- Pesquisa inteligente por eventos
- Relatórios diários
- Integração futura com Telegram
- Integração futura com sistemas externos, como MK

## Stack inicial

- React + Vite para o painel web
- Node.js + Express para a API
- Prisma para acesso ao banco
- PostgreSQL como banco principal
- Ollama para interpretação local com IA
- faster-whisper para transcrição de áudio

## Estrutura

```txt
sentinela
├── apps
│   ├── api
│   └── web
├── services
│   └── listener
├── storage
│   └── audio
└── docs
```

## Status

Projeto em fase inicial de desenvolvimento.
