# 02 — Rotas e Middlewares

Middlewares são o coração do Express. Eles são funções que interceptam a requisição antes de chegar na rota — usados para autenticação, validação, logs, tratamento de erros e muito mais.

---

## 🔗 O que é um Middleware?

Um middleware é uma função com acesso ao objeto de requisição (`req`), resposta (`res`) e a próxima função da cadeia (`next`).

```javascript
function meuMiddleware(req, res, next) {
  // faz alguma coisa
  console.log('Passou pelo middleware')
  next()  // chama o próximo middleware ou a rota
}
```

O fluxo de uma requisição no Express é uma **cadeia de middlewares**:

```
Requisição → Middleware 1 → Middleware 2 → Rota → Resposta
```

Se um middleware não chamar `next()`, a requisição para ali — útil para bloquear acesso não autorizado.

---

## 🌐 Middlewares globais

Aplicados a todas as rotas.

```javascript
const express = require('express')
const app = express()

// parse de JSON — sem isso req.body é undefined
app.use(express.json())

// log de todas as requisições
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
  next()
})

// CORS simples
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})
```

---

## 🔒 Middleware de autenticação

```javascript
// middlewares/auth.js
function autenticar(req, res, next) {
  const token = req.headers['authorization']

  if (!token) {
    return res.status(401).json({ erro: 'Token não fornecido' })
  }

  if (token !== 'Bearer meu-token-secreto') {
    return res.status(403).json({ erro: 'Token inválido' })
  }

  // adiciona informações do usuário na requisição
  req.usuario = { id: 1, nome: 'Isaac' }
  next()
}

module.exports = { autenticar }
```

```javascript
// usando em rotas específicas
const { autenticar } = require('./middlewares/auth')

// apenas esta rota exige autenticação
app.get('/perfil', autenticar, (req, res) => {
  res.json({ usuario: req.usuario })
})

// aplicando em um grupo de rotas
app.use('/admin', autenticar)
app.get('/admin/dashboard', (req, res) => res.json({ ok: true }))
```

---

## ✅ Middleware de validação

```javascript
// middlewares/validacao.js
function validarUsuario(req, res, next) {
  const { nome, email } = req.body

  const erros = []

  if (!nome || nome.trim().length < 2) {
    erros.push('Nome deve ter pelo menos 2 caracteres')
  }

  if (!email || !email.includes('@')) {
    erros.push('Email inválido')
  }

  if (erros.length > 0) {
    return res.status(400).json({ erros })
  }

  next()
}

module.exports = { validarUsuario }
```

```javascript
const { validarUsuario } = require('./middlewares/validacao')

app.post('/usuarios', validarUsuario, (req, res) => {
  // só chega aqui se a validação passou
  res.status(201).json({ mensagem: 'Usuário criado' })
})
```

---

## ❗ Tratamento de erros

O Express tem um middleware especial de erro — recebe 4 parâmetros, sendo o primeiro o erro.

```javascript
// middlewares/erros.js
function tratarErros(err, req, res, next) {
  console.error(err.stack)

  // erros conhecidos
  if (err.name === 'ValidationError') {
    return res.status(400).json({ erro: err.message })
  }

  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ erro: 'Não autorizado' })
  }

  // erro genérico
  res.status(500).json({ erro: 'Erro interno do servidor' })
}

module.exports = { tratarErros }
```

```javascript
// app.js — deve ser o último middleware registrado
const { tratarErros } = require('./middlewares/erros')

app.use(tratarErros)
```

Para passar um erro para esse middleware:
```javascript
app.get('/produtos/:id', async (req, res, next) => {
  try {
    const produto = await ProdutosService.buscar(req.params.id)
    res.json(produto)
  } catch (erro) {
    next(erro)  // passa o erro para o middleware de erros
  }
})
```

---

## 🗂️ Router — organizando rotas em módulos

```javascript
// routes/produtos.routes.js
const express = require('express')
const router = express.Router()
const { autenticar } = require('../middlewares/auth')
const { validarProduto } = require('../middlewares/validacao')

router.get('/', ProdutosController.listar)
router.get('/:id', ProdutosController.buscar)
router.post('/', autenticar, validarProduto, ProdutosController.criar)
router.put('/:id', autenticar, ProdutosController.atualizar)
router.delete('/:id', autenticar, ProdutosController.remover)

module.exports = router
```

```javascript
// app.js
app.use('/produtos', require('./routes/produtos.routes'))
app.use('/usuarios', require('./routes/usuarios.routes'))
```

---

## ✏️ Exercícios

1. Crie um middleware de log que registra método, URL, status e tempo de resposta de cada requisição
2. Crie um middleware que bloqueia requisições com corpo maior que 10kb
3. Implemente um middleware de validação para a rota `POST /produtos` — nome obrigatório, preço deve ser número positivo, estoque deve ser inteiro não negativo
4. O que acontece se você registrar o middleware de erros antes das rotas? Por que a ordem dos middlewares importa?

---

<div align="center">
  <sub>
    <a href="./01-express.md">← anterior</a>
    &nbsp;·&nbsp;
    <a href="./README.md">fase 3</a>
    &nbsp;·&nbsp;
    <a href="./03-nestjs.md">próximo →</a>
  </sub>
</div>