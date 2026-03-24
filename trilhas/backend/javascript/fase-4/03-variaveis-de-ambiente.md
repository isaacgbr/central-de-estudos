# 03 — Variáveis de Ambiente

Configurações como senhas de banco, chaves de API e segredos JWT não devem estar no código. Variáveis de ambiente resolvem isso — separando configuração do código.

---

## 🤔 Por que variáveis de ambiente?

```javascript
// ❌ nunca faça isso — credenciais no código
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'minha-senha-super-secreta',
  database: 'producao_db'
})
```

Problemas:
- Qualquer pessoa com acesso ao repositório vê as credenciais
- Você usa os mesmos valores em desenvolvimento e produção
- Mudar uma configuração exige alterar o código

---

## 📄 dotenv — variáveis de ambiente no Node.js

### Instalação
```bash
npm install dotenv
```

### Criando o arquivo `.env`
```bash
# .env — NUNCA commite este arquivo
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=minha-senha
DB_NAME=minha_api
DB_PORT=3306

JWT_SECRET=um-segredo-muito-longo-e-aleatorio-aqui
JWT_EXPIRES_IN=24h

PORT=3000
NODE_ENV=development
```

### Carregando no projeto
```javascript
// server.js — primeira linha do arquivo de entrada
require('dotenv').config()

// agora process.env tem todas as variáveis
const app = require('./src/app')
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
```

---

## 🔒 .gitignore — protegendo suas credenciais

```bash
# .gitignore
node_modules/
.env
.env.local
.env.production
```

O `.env` nunca deve ir para o repositório. Crie um `.env.example` com os nomes das variáveis mas sem os valores reais.

```bash
# .env.example — este SIM vai para o repositório
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_PORT=3306

JWT_SECRET=
JWT_EXPIRES_IN=24h

PORT=3000
NODE_ENV=development
```

---

## ⚙️ Ambientes diferentes

Aplicações reais rodam em ambientes diferentes — desenvolvimento, testes e produção — cada um com suas próprias configurações.

```
.env              ← desenvolvimento local
.env.test         ← testes automatizados
.env.production   ← produção (gerenciado pelo servidor, não pelo dotenv)
```

```javascript
// carregando o .env correto pelo ambiente
const env = process.env.NODE_ENV || 'development'
require('dotenv').config({ path: `.env.${env}` })
```

---

## 🗂️ Centralizando configurações

Em vez de acessar `process.env` diretamente em todo o código, centralize em um arquivo de configuração.

```javascript
// config/index.js
require('dotenv').config()

module.exports = {
  server: {
    port: parseInt(process.env.PORT) || 3000,
    env: process.env.NODE_ENV || 'development'
  },
  database: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT) || 3306
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || '24h'
  }
}
```

```javascript
// usando em qualquer arquivo
const config = require('./config')

const pool = mysql.createPool({
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  database: config.database.name
})
```

---

## ✅ Validando variáveis obrigatórias na inicialização

Falhar rápido é melhor que falhar silenciosamente em produção.

```javascript
// config/index.js
const variaveis = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME', 'JWT_SECRET']

variaveis.forEach(variavel => {
  if (!process.env[variavel]) {
    console.error(`❌ Variável de ambiente obrigatória não definida: ${variavel}`)
    process.exit(1)
  }
})
```

---

## ✏️ Exercícios

1. Mova todas as credenciais do seu projeto para um `.env` e atualize o `.gitignore`
2. Crie um `.env.example` com as variáveis necessárias mas sem valores reais
3. Implemente a validação de variáveis obrigatórias na inicialização — o servidor deve recusar iniciar se alguma estiver faltando
4. Qual a diferença entre `process.env.PORT` e `parseInt(process.env.PORT)`? Por que isso importa?

---

<div align="center">
  <sub>
    <a href="./02-integracao-banco.md">← anterior</a>
    &nbsp;·&nbsp;
    <a href="./README.md">fase 4</a>
    &nbsp;·&nbsp;
    <a href="./04-boas-praticas.md">próximo →</a>
  </sub>
</div>