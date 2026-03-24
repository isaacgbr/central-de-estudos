# 02 — Integração com Banco de Dados

Até agora você usou arrays em memória. Em produção, os dados precisam persistir em um banco de dados. Aqui você aprende a conectar sua API Express ao MySQL.

---

## 🔌 Instalação

```bash
npm install mysql2
```

O `mysql2` é a biblioteca mais usada para MySQL no Node.js — mais rápida e com suporte a promises nativo.

---

## 🏗️ Configurando a conexão

### Conexão simples (use só para testes)
```javascript
const mysql = require('mysql2/promise')

const conexao = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})
```

### Pool de conexões (use em produção)
Em vez de abrir e fechar uma conexão por requisição, o pool mantém conexões reutilizáveis — muito mais eficiente.

```javascript
// config/database.js
const mysql = require('mysql2/promise')

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'minha_api',
  waitForConnections: true,
  connectionLimit: 10,  // máximo de conexões simultâneas
  queueLimit: 0
})

module.exports = pool
```

---

## 📝 Executando queries

### SELECT
```javascript
// services/usuarios.service.js
const pool = require('../config/database')

async function listarTodos() {
  const [rows] = await pool.execute('SELECT id, nome, email FROM usuarios')
  return rows
}

async function buscarPorId(id) {
  const [rows] = await pool.execute(
    'SELECT id, nome, email FROM usuarios WHERE id = ?',
    [id]  // parâmetro — nunca concatene diretamente na query (SQL Injection!)
  )
  return rows[0] || null
}

async function buscarPorEmail(email) {
  const [rows] = await pool.execute(
    'SELECT * FROM usuarios WHERE email = ?',
    [email]
  )
  return rows[0] || null
}
```

### INSERT
```javascript
async function criar({ nome, email, senha }) {
  const [result] = await pool.execute(
    'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
    [nome, email, senha]
  )
  return { id: result.insertId, nome, email }
}
```

### UPDATE
```javascript
async function atualizar(id, { nome, email }) {
  const [result] = await pool.execute(
    'UPDATE usuarios SET nome = ?, email = ? WHERE id = ?',
    [nome, email, id]
  )
  return result.affectedRows > 0
}
```

### DELETE
```javascript
async function remover(id) {
  const [result] = await pool.execute(
    'DELETE FROM usuarios WHERE id = ?',
    [id]
  )
  return result.affectedRows > 0
}
```

---

## 🏛️ Estrutura completa com banco

```javascript
// controllers/usuarios.controller.js
const UsuariosService = require('../services/usuarios.service')

class UsuariosController {
  static async listar(req, res, next) {
    try {
      const usuarios = await UsuariosService.listarTodos()
      res.json(usuarios)
    } catch (erro) {
      next(erro)
    }
  }

  static async buscar(req, res, next) {
    try {
      const usuario = await UsuariosService.buscarPorId(req.params.id)
      if (!usuario) return res.status(404).json({ erro: 'Não encontrado' })
      res.json(usuario)
    } catch (erro) {
      next(erro)
    }
  }

  static async criar(req, res, next) {
    try {
      const usuario = await UsuariosService.criar(req.body)
      res.status(201).json(usuario)
    } catch (erro) {
      next(erro)
    }
  }
}
```

---

## ⚠️ SQL Injection — nunca concatene queries

```javascript
// ❌ NUNCA faça isso — vulnerável a SQL Injection
const email = req.body.email
const query = `SELECT * FROM usuarios WHERE email = '${email}'`
// se email = "' OR '1'='1" → retorna todos os usuários

// ✅ sempre use parâmetros
const [rows] = await pool.execute(
  'SELECT * FROM usuarios WHERE email = ?',
  [req.body.email]
)
```

---

## 🔄 Transações — operações atômicas

Quando você precisa garantir que múltiplas operações aconteçam todas ou nenhuma.

```javascript
async function transferir(idOrigem, idDestino, valor) {
  const conn = await pool.getConnection()

  try {
    await conn.beginTransaction()

    await conn.execute(
      'UPDATE contas SET saldo = saldo - ? WHERE id = ?',
      [valor, idOrigem]
    )

    await conn.execute(
      'UPDATE contas SET saldo = saldo + ? WHERE id = ?',
      [valor, idDestino]
    )

    await conn.commit()
  } catch (erro) {
    await conn.rollback()  // desfaz tudo se algo falhar
    throw erro
  } finally {
    conn.release()  // sempre devolve a conexão ao pool
  }
}
```

---

## ✏️ Exercícios

1. Crie a tabela `produtos` com os campos `id`, `nome`, `preco`, `estoque` e `criado_em`. Implemente o CRUD completo conectado ao MySQL
2. Implemente a rota `GET /produtos?preco_max=100` que filtra produtos por preço máximo usando query parametrizada
3. Implemente uma transação que cria um pedido e reduz o estoque do produto ao mesmo tempo — se o estoque for insuficiente, desfaz tudo
4. Por que nunca devemos concatenar variáveis diretamente em queries SQL? Dê um exemplo de como um usuário malicioso poderia explorar isso

---

<div align="center">
  <sub>
    <a href="./01-autenticacao-jwt.md">← anterior</a>
    &nbsp;·&nbsp;
    <a href="./README.md">fase 4</a>
    &nbsp;·&nbsp;
    <a href="./03-variaveis-de-ambiente.md">próximo →</a>
  </sub>
</div>