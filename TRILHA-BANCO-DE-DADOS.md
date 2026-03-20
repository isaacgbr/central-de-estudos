<div align="center">

# 🗄️ Trilha Banco de Dados

<p>
  <img src="https://img.shields.io/badge/nível-intermediário-orange?style=flat-square" alt="nível"/>
  <img src="https://img.shields.io/badge/pré--requisitos-lógica%20%7C%20git-lightgrey?style=flat-square" alt="pré-requisitos"/>
</p>

Para quem quer entender como os dados são armazenados, modelados e consultados.  
Esta trilha é base para o Backend e aparece como pré-requisito em praticamente todos os projetos reais.

</div>

---

## 📖 O que você vai aprender

- Escrever consultas SQL para criar, ler, atualizar e deletar dados
- Modelar banco de dados com tabelas, relacionamentos e chaves
- Usar joins, filtros, agrupamentos e subconsultas
- Integrar um banco de dados MySQL diretamente com Node.js
- Subir e gerenciar um banco de dados em container com Docker

---

## ✅ Pré-requisitos

- [🟢 Trilha Iniciante](./TRILHA-INICIANTE.md) — lógica e Git
- Noções básicas de JavaScript ajudam na parte de integração com Node.js

---

## 📚 Conteúdos disponíveis

| Conteúdo | Descrição |
|----------|-----------|
| [SQL](./docs/languages/sql/sql.md) | DDL, DML, consultas, joins, agrupamentos, índices e boas práticas |
| [MySQL com Node.js](./docs/tools/database/mysql-nodejs.md) | Conexão, queries parametrizadas, pool de conexões e integração com Express |
| [Docker](./docs/tools/docker/docker.md) | Containers, imagens, volumes e como subir um banco MySQL com Docker Compose |

---

## 🗺️ Ordem de estudo recomendada

```
1. SQL
      ↓
2. Docker (para subir o banco localmente)
      ↓
3. MySQL com Node.js
```

> Comece pelo SQL — é a base de tudo nessa trilha e independe de linguagem ou framework.  
> Docker vem em seguida para você conseguir subir um banco local sem instalar o MySQL diretamente.  
> MySQL com Node.js fecha a trilha conectando o banco a uma aplicação real.

---

## 🛠️ Projetos sugeridos

Ao final da trilha, você deve conseguir construir:

- **Banco de dados de uma loja** — modelagem com tabelas de produtos, clientes e pedidos, com relacionamentos e consultas complexas
- **API com persistência** — integração de um banco MySQL com Node.js e Express, com queries parametrizadas
- **Ambiente com Docker Compose** — banco MySQL + aplicação Node.js rodando em containers

---

## ➡️ Próximos passos

Após concluir esta trilha, você pode seguir para:

- [🔵 Trilha Backend](./TRILHA-BACKEND.md) — para usar o banco dentro de uma API completa
- [☕ Trilha Java](./TRILHA-JAVA.md) — para integrar banco de dados com Spring Boot
- [🐍 Trilha Python](./TRILHA-PYTHON.md) — para integrar banco de dados com Python

---

<div align="center">
  <sub><a href="./README.md">← voltar para o índice</a></sub>
</div>