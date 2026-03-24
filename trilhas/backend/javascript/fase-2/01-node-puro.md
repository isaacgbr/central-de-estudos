# 01 — Node.js Puro

Node.js não é uma linguagem — é um ambiente de execução que permite rodar JavaScript fora do navegador. Entender como ele funciona por baixo é o que separa quem usa frameworks de quem realmente entende o que está acontecendo.

---

## 🔍 O que é o Node.js?

Node.js é um runtime construído sobre o motor V8 do Chrome. Ele permite executar JavaScript no servidor, com acesso a recursos que o browser não tem — sistema de arquivos, rede, processos do sistema operacional.

```
Navegador          Node.js
─────────          ───────
V8 engine    →     V8 engine
DOM API      →     fs, http, path, os...
window       →     global
fetch        →     http, https
```

---

## ⚙️ Event Loop — por que Node.js é eficiente

Node.js é **single-thread** — executa uma operação por vez. Mas ele consegue lidar com milhares de requisições simultâneas porque usa um modelo **não bloqueante**.

Quando o Node encontra uma operação lenta (leitura de arquivo, consulta ao banco, chamada de API), ele não fica parado esperando — delega para o sistema operacional e continua executando outras coisas. Quando a resposta chega, o **event loop** retoma aquela operação.

```
                    ┌─────────────────┐
    Requisição 1 →  │                 │ → processa
    Requisição 2 →  │   Event Loop    │ → aguarda I/O
    Requisição 3 →  │                 │ → processa
                    └─────────────────┘
                           ↑
                    resposta do banco
```

**Na prática:** Node.js é excelente para APIs com muitas requisições simultâneas e operações de I/O. Não é ideal para processamento intenso de CPU (cálculos pesados, compressão de vídeo) — para isso, outras linguagens se saem melhor.

---

## 🌐 Criando um servidor HTTP sem framework

O módulo `http` nativo do Node já permite criar um servidor completo.

```javascript
const http = require('http')

const servidor = http.createServer((req, res) => {
  // req = requisição (o que o cliente enviou)
  // res = resposta (o que vamos devolver)

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({ mensagem: 'Servidor funcionando!' }))
})

servidor.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})
```

Execute com:
```bash
node servidor.js
```

Acesse `http://localhost:3000` no navegador ou no Postman — você vai receber o JSON de resposta.

---

## 🔀 Roteamento manual

Sem framework, você controla as rotas verificando o método e a URL da requisição.

```javascript
const http = require('http')

const servidor = http.createServer((req, res) => {
  const { method, url } = req

  res.setHeader('Content-Type', 'application/json')

  // GET /usuarios
  if (method === 'GET' && url === '/usuarios') {
    const usuarios = [
      { id: 1, nome: 'Isaac' },
      { id: 2, nome: 'Maria' }
    ]
    res.writeHead(200)
    res.end(JSON.stringify(usuarios))
    return
  }

  // GET /usuarios/1
  if (method === 'GET' && url.startsWith('/usuarios/')) {
    const id = url.split('/')[2]
    res.writeHead(200)
    res.end(JSON.stringify({ id, nome: 'Isaac' }))
    return
  }

  // rota não encontrada
  res.writeHead(404)
  res.end(JSON.stringify({ erro: 'Rota não encontrada' }))
})

servidor.listen(3000)
```

---

## 📨 Lendo o corpo da requisição (POST)

Requisições POST enviam dados no corpo — você precisa ler os chunks e montar o conteúdo.

```javascript
const http = require('http')

const servidor = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/usuarios') {
    let corpo = ''

    // recebe os dados em partes (chunks)
    req.on('data', chunk => {
      corpo += chunk.toString()
    })

    // quando terminar de receber
    req.on('end', () => {
      const dados = JSON.parse(corpo)
      console.log('Usuário recebido:', dados)

      res.writeHead(201, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ mensagem: 'Criado com sucesso', dados }))
    })
  }
})

servidor.listen(3000)
```

---

## ✏️ Exercícios

1. Crie um servidor Node.js puro que responde com seu nome e cidade em JSON na rota `GET /sobre`
2. Adicione uma rota `GET /produtos` que retorna uma lista de 3 produtos com `id`, `nome` e `preco`
3. Adicione uma rota `POST /produtos` que recebe um produto no corpo e retorna o mesmo produto com status 201
4. O que acontece se você tentar acessar uma rota que não existe no seu servidor? Como você trataria isso de forma elegante?

---

<div align="center">
  <sub>
    <a href="./README.md">← voltar para Fase 2</a>
    &nbsp;·&nbsp;
    <a href="./02-modulos-e-filesystem.md">próximo →</a>
  </sub>
</div>