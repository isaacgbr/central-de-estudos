# 01 — Autenticação JWT

JWT (JSON Web Token) é o padrão mais usado para autenticação em APIs REST. Em vez de guardar sessão no servidor, você gera um token que o cliente carrega em cada requisição.

---

## 🔐 Como funciona o JWT

```
1. Cliente envia login + senha
2. Servidor valida e gera um token JWT
3. Cliente armazena o token (localStorage, cookie...)
4. Cliente envia o token em cada requisição no header Authorization
5. Servidor valida o token antes de processar a requisição
```

### Estrutura do token

Um JWT tem três partes separadas por ponto:

```
eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJpc2FhY0BlbWFpbC5jb20ifQ.assinatura
      header                          payload                         signature
```

- **Header** — algoritmo usado
- **Payload** — dados do usuário (id, email, role...)
- **Signature** — garante que o token não foi adulterado

> O payload é apenas codificado em Base64 — não criptografado. Nunca coloque senhas ou dados sensíveis no token.

---

## 🚀 Implementando autenticação com Express

### Instalação
```bash
npm install jsonwebtoken bcrypt
```

### Gerando e validando tokens
```javascript
// utils/jwt.js
const jwt = require('jsonwebtoken')

const SECRET = process.env.JWT_SECRET || 'segredo-local'

function gerarToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: '24h' })
}

function validarToken(token) {
  try {
    return jwt.verify(token, SECRET)
  } catch (erro) {
    return null
  }
}

module.exports = { gerarToken, validarToken }
```

### Rota de login
```javascript
// routes/auth.routes.js
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const { gerarToken } = require('../utils/jwt')

// simulando banco em memória
const usuarios = [
  {
    id: 1,
    email: 'isaac@email.com',
    // hash de "senha123" — em produção, salvar sempre com hash
    senha: '$2b$10$X9rG1Z2VQz3UqQKF7B6OuOHpWzFJXs6G1kNbWHH5mHXzfV7c5MmBa'
  }
]

router.post('/login', async (req, res) => {
  const { email, senha } = req.body

  if (!email || !senha) {
    return res.status(400).json({ erro: 'Email e senha são obrigatórios' })
  }

  const usuario = usuarios.find(u => u.email === email)

  if (!usuario) {
    return res.status(401).json({ erro: 'Credenciais inválidas' })
  }

  const senhaCorreta = await bcrypt.compare(senha, usuario.senha)

  if (!senhaCorreta) {
    return res.status(401).json({ erro: 'Credenciais inválidas' })
  }

  const token = gerarToken({ id: usuario.id, email: usuario.email })

  res.json({ token })
})

module.exports = router
```

### Middleware de autenticação
```javascript
// middlewares/auth.js
const { validarToken } = require('../utils/jwt')

function autenticar(req, res, next) {
  const authHeader = req.headers['authorization']

  if (!authHeader) {
    return res.status(401).json({ erro: 'Token não fornecido' })
  }

  // formato esperado: "Bearer <token>"
  const [, token] = authHeader.split(' ')

  if (!token) {
    return res.status(401).json({ erro: 'Formato inválido — use: Bearer <token>' })
  }

  const payload = validarToken(token)

  if (!payload) {
    return res.status(401).json({ erro: 'Token inválido ou expirado' })
  }

  req.usuario = payload  // disponível nas próximas rotas
  next()
}

module.exports = { autenticar }
```

### Protegendo rotas
```javascript
// routes/usuarios.routes.js
const { autenticar } = require('../middlewares/auth')

// rota pública
router.post('/login', AuthController.login)
router.post('/cadastro', AuthController.cadastro)

// rotas protegidas
router.get('/perfil', autenticar, (req, res) => {
  res.json({ usuario: req.usuario })
})

router.put('/perfil', autenticar, UsuariosController.atualizar)
```

---

## 🔒 Hash de senhas com bcrypt

Nunca salve senhas em texto puro. Sempre use um algoritmo de hash.

```javascript
const bcrypt = require('bcrypt')

// ao cadastrar usuário
async function cadastrar(email, senha) {
  const rounds = 10  // custo computacional — quanto maior, mais seguro e mais lento
  const hash = await bcrypt.hash(senha, rounds)
  // salva hash no banco, nunca a senha original
  return { email, senha: hash }
}

// ao fazer login
async function verificarSenha(senhaDigitada, hashSalvo) {
  return bcrypt.compare(senhaDigitada, hashSalvo)
}
```

---

## 🔄 Refresh Token

Tokens JWT têm validade curta por segurança. O refresh token permite renovar sem pedir login novamente.

```javascript
function gerarTokens(payload) {
  const accessToken = jwt.sign(payload, SECRET, { expiresIn: '15m' })
  const refreshToken = jwt.sign(payload, REFRESH_SECRET, { expiresIn: '7d' })
  return { accessToken, refreshToken }
}

router.post('/refresh', (req, res) => {
  const { refreshToken } = req.body
  try {
    const payload = jwt.verify(refreshToken, REFRESH_SECRET)
    const novoToken = jwt.sign(
      { id: payload.id, email: payload.email },
      SECRET,
      { expiresIn: '15m' }
    )
    res.json({ accessToken: novoToken })
  } catch {
    res.status(401).json({ erro: 'Refresh token inválido' })
  }
})
```

---

## ✏️ Exercícios

1. Implemente uma rota `POST /cadastro` que recebe nome, email e senha, faz o hash da senha e "salva" em um array
2. Implemente `POST /login` que valida as credenciais e retorna um JWT
3. Crie uma rota `GET /perfil` protegida que retorna os dados do usuário logado usando `req.usuario`
4. O que acontece se alguém interceptar um JWT e usá-lo? Como você mitigaria esse risco?

---

<div align="center">
  <sub>
    <a href="./README.md">← voltar para Fase 4</a>
    &nbsp;·&nbsp;
    <a href="./02-integracao-banco.md">próximo →</a>
  </sub>
</div>