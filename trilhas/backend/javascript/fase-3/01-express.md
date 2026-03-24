# 01 — Express

Express é o framework web mais usado no ecossistema Node.js. Minimalista e sem opinião — ele oferece o essencial para criar APIs sem te forçar a uma estrutura específica.

---

## 🚀 Instalação e primeiro servidor

```bash
mkdir minha-api
cd minha-api
npm init -y
npm install express
```

```javascript
// app.js
const express = require('express')
const app = express()

// middleware para ler JSON no corpo das requisições
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ mensagem: 'API funcionando!' })
})

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})
```

Execute:
```bash
node app.js
```

Compare com o que você fazia em Node puro — a diferença já é evidente.

---

## 🛣️ Rotas

```javascript
const express = require('express')
const app = express()
app.use(express.json())

// banco em memória para o exemplo
let usuarios = [
  { id: 1, nome: 'Isaac', email: 'isaac@email.com' },
  { id: 2, nome: 'Maria', email: 'maria@email.com' }
]

// GET /usuarios — listar todos
app.get('/usuarios', (req, res) => {
  res.json(usuarios)
})

// GET /usuarios/:id — buscar por id
app.get('/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id))

  if (!usuario) {
    return res.status(404).json({ erro: 'Usuário não encontrado' })
  }

  res.json(usuario)
})

// POST /usuarios — criar
app.post('/usuarios', (req, res) => {
  const { nome, email } = req.body

  if (!nome || !email) {
    return res.status(400).json({ erro: 'Nome e email são obrigatórios' })
  }

  const novoUsuario = { id: usuarios.length + 1, nome, email }
  usuarios.push(novoUsuario)

  res.status(201).json(novoUsuario)
})

// PUT /usuarios/:id — atualizar
app.put('/usuarios/:id', (req, res) => {
  const index = usuarios.findIndex(u => u.id === parseInt(req.params.id))

  if (index === -1) {
    return res.status(404).json({ erro: 'Usuário não encontrado' })
  }

  usuarios[index] = { ...usuarios[index], ...req.body }
  res.json(usuarios[index])
})

// DELETE /usuarios/:id — remover
app.delete('/usuarios/:id', (req, res) => {
  const index = usuarios.findIndex(u => u.id === parseInt(req.params.id))

  if (index === -1) {
    return res.status(404).json({ erro: 'Usuário não encontrado' })
  }

  usuarios.splice(index, 1)
  res.status(204).send()
})

app.listen(3000)
```

---

## 🔗 Query Params e Headers

```javascript
// GET /produtos?categoria=eletronicos&preco_max=500
app.get('/produtos', (req, res) => {
  const { categoria, preco_max } = req.query
  // req.query contém todos os parâmetros da URL
  console.log(categoria)   // "eletronicos"
  console.log(preco_max)   // "500"

  res.json({ categoria, preco_max })
})

// Lendo headers da requisição
app.get('/perfil', (req, res) => {
  const token = req.headers['authorization']
  const idioma = req.headers['accept-language']
  console.log(token, idioma)
  res.json({ ok: true })
})
```

---

## 🗂️ Estrutura de projeto recomendada

Em vez de colocar tudo em um arquivo, organize assim:

```
minha-api/
├── src/
│   ├── routes/
│   │   └── usuarios.routes.js
│   ├── controllers/
│   │   └── usuarios.controller.js
│   ├── services/
│   │   └── usuarios.service.js
│   └── app.js
├── server.js
└── package.json
```

```javascript
// server.js — ponto de entrada
const app = require('./src/app')
app.listen(3000, () => console.log('Servidor rodando'))
```

```javascript
// src/app.js — configuração do Express
const express = require('express')
const usuariosRoutes = require('./routes/usuarios.routes')

const app = express()
app.use(express.json())
app.use('/usuarios', usuariosRoutes)

module.exports = app
```

```javascript
// src/routes/usuarios.routes.js
const express = require('express')
const router = express.Router()
const UsuariosController = require('../controllers/usuarios.controller')

router.get('/', UsuariosController.listar)
router.get('/:id', UsuariosController.buscar)
router.post('/', UsuariosController.criar)
router.put('/:id', UsuariosController.atualizar)
router.delete('/:id', UsuariosController.remover)

module.exports = router
```

```javascript
// src/controllers/usuarios.controller.js
const UsuariosService = require('../services/usuarios.service')

class UsuariosController {
  static async listar(req, res) {
    const usuarios = await UsuariosService.listarTodos()
    res.json(usuarios)
  }

  static async buscar(req, res) {
    const usuario = await UsuariosService.buscarPorId(req.params.id)
    if (!usuario) return res.status(404).json({ erro: 'Não encontrado' })
    res.json(usuario)
  }

  static async criar(req, res) {
    const usuario = await UsuariosService.criar(req.body)
    res.status(201).json(usuario)
  }
}

module.exports = UsuariosController
```

---

## ✏️ Exercícios

1. Crie uma API Express com CRUD completo de produtos (`id`, `nome`, `preco`, `estoque`) usando array em memória
2. Adicione validação no `POST /produtos` — nome e preço são obrigatórios, preço deve ser positivo
3. Implemente o filtro por query param `GET /produtos?categoria=eletronicos`
4. Refatore a API para usar a estrutura routes/controllers/services

---

<div align="center">
  <sub>
    <a href="./README.md">← voltar para Fase 3</a>
    &nbsp;·&nbsp;
    <a href="./02-rotas-e-middlewares.md">próximo →</a>
  </sub>
</div>