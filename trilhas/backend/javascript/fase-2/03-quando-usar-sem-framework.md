# 03 — Quando Usar Node.js Sem Framework

Você já sabe criar servidores, ler arquivos e organizar módulos com Node puro. Agora a pergunta é: quando isso é suficiente e quando você precisa de um framework?

---

## 🤔 O que um framework faz por você?

Frameworks como Express e NestJS não fazem nada que você não consiga fazer com Node puro — eles apenas tornam tarefas comuns mais rápidas e organizadas.

| Tarefa | Node puro | Com Express |
|--------|-----------|-------------|
| Criar servidor | `http.createServer()` | `express()` |
| Definir rota GET | `if (method === 'GET' && url === '/...')` | `app.get('/...', handler)` |
| Ler corpo POST | chunks + `req.on('data')` | `req.body` (com middleware) |
| Parâmetros de rota | `url.split('/')[2]` | `req.params.id` |
| Servir JSON | `res.writeHead(200)` + `res.end(JSON.stringify(...))` | `res.json(...)` |
| Tratar erros | manual em cada rota | middleware centralizado |

Sem framework, você escreve muito mais código repetitivo. Com framework, você foca na lógica do negócio.

---

## ✅ Quando Node puro é suficiente

### Scripts e automações
Tarefas que rodam uma vez — processar um CSV, renomear arquivos em lote, gerar relatórios.

```javascript
// processar_relatorio.js
const fs = require('fs').promises
const path = require('path')

async function processarRelatorio() {
  const dados = await fs.readFile('./vendas.csv', 'utf8')
  const linhas = dados.split('\n').slice(1)  // remove cabeçalho

  const total = linhas.reduce((acc, linha) => {
    const [, , valor] = linha.split(',')
    return acc + parseFloat(valor || 0)
  }, 0)

  await fs.writeFile('./resultado.txt', `Total de vendas: R$ ${total.toFixed(2)}`)
  console.log('Relatório gerado!')
}

processarRelatorio()
```

### Ferramentas de linha de comando (CLI)
Scripts que recebem argumentos e executam tarefas.

```javascript
// backup.js
const args = process.argv.slice(2)
const pasta = args[0]

if (!pasta) {
  console.error('Uso: node backup.js <pasta>')
  process.exit(1)
}

console.log(`Fazendo backup de: ${pasta}`)
```

### Servidores muito simples e internos
Um servidor de health check, um webhook receptor simples, um proxy interno.

```javascript
// health.js — apenas retorna status do sistema
const http = require('http')
const os = require('os')

http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({
      status: 'ok',
      uptime: process.uptime(),
      memoria: os.freemem()
    }))
  }
}).listen(3000)
```

---

## ❌ Quando Node puro não basta

### APIs com múltiplas rotas e recursos
Gerenciar rotas manualmente com `if/else` fica insustentável rapidamente.

```javascript
// ❌ isso escala muito mal
if (method === 'GET' && url === '/usuarios') { ... }
if (method === 'POST' && url === '/usuarios') { ... }
if (method === 'GET' && url.startsWith('/usuarios/')) { ... }
if (method === 'PUT' && url.startsWith('/usuarios/')) { ... }
if (method === 'DELETE' && url.startsWith('/usuarios/')) { ... }
if (method === 'GET' && url === '/produtos') { ... }
// ... 50 rotas depois você desiste
```

### Autenticação, validação e middlewares
Implementar JWT, validação de dados, rate limiting e logs do zero é trabalhoso e propenso a erros de segurança.

### Times e projetos de médio/grande porte
Sem convenções, cada desenvolvedor organiza o código de um jeito diferente. Frameworks impõem padrões que facilitam a colaboração.

---

## 🧭 Regra prática

```
Script ou automação?          → Node puro
Servidor interno simples?     → Node puro
API com 3+ rotas?             → Express
API estruturada / time?       → NestJS
```

> Estudar Node puro antes dos frameworks não é perda de tempo — é exatamente o que te permite entender o que o Express faz por baixo e tomar decisões melhores quando algo quebra.

---

## 🏁 Fim da Fase 2

Você agora entende como o Node.js funciona sem abstração — servidores HTTP, event loop, módulos e filesystem. Isso é a base que torna frameworks compreensíveis em vez de mágicos.

Na próxima fase você vai aprender Express e NestJS — com contexto real de por que eles existem e quando usar cada um.

---

## ✏️ Exercícios

1. Crie um script CLI que recebe um nome de arquivo como argumento, lê o conteúdo e exibe quantas linhas, palavras e caracteres ele tem
2. Construa uma mini API com Node puro que gerencia uma lista de tarefas em memória — GET para listar, POST para adicionar. Até onde você consegue ir antes de sentir que precisa de um framework?
3. Qual seria o problema de usar `readFileSync` dentro de um servidor HTTP que recebe 1000 requisições por segundo?
4. Liste 3 situações do seu dia a dia de desenvolvimento onde Node puro seria suficiente e 3 onde um framework seria necessário

---

<div align="center">
  <sub>
    <a href="./02-modulos-e-filesystem.md">← anterior</a>
    &nbsp;·&nbsp;
    <a href="./README.md">fase 2</a>
    &nbsp;·&nbsp;
    <a href="../fase-3/README.md">próxima fase →</a>
  </sub>
</div>