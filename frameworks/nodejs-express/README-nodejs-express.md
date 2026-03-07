# 🟢 Node.js & Express — Guia de Referência Rápida

> Resumo completo sobre Node.js e Express — do ambiente ao CRUD completo de uma API REST.

---

## O que é Node.js?

- Ambiente de execução que permite rodar JavaScript fora do navegador
- Baseado no motor V8 do Google Chrome
- Usado para criar servidores, APIs, ferramentas de linha de comando

## O que é Express?

- Framework minimalista instalado no Node.js
- Facilita a criação de rotas, middlewares e APIs REST
- O mais usado para backend com JavaScript

> **Resumindo:** Node.js é o motor. Express é a ferramenta que você usa em cima dele.

---

## Instalação e Configuração

```bash
# Verificar instalação do Node.js
node --version
npm --version

# Iniciar projeto
npm init -y

# Instalar Express
npm install express

# Rodar o servidor
node server.js

# Rodar com reinício automático
node --watch server.js
```

---

## Estrutura de Pastas Recomendada

```
back-end/
├── controllers/   ← manipuladores de rota
├── services/      ← lógica de negócio e dados
├── models/        ← estrutura das entidades
├── routes/        ← definição das rotas
├── middlewares/   ← funções intermediárias
├── utils/         ← helpers e funções auxiliares
└── server.js      ← ponto de entrada
```

---

## server.js — Configuração Básica

```javascript
const express = require("express");
const app     = express();

// Permite receber JSON no body das requisições
app.use(express.json());

// Rotas
const produtoRoutes = require("./routes/produtoRoutes");
app.use("/produtos", produtoRoutes);

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
```

---

## Rotas — Métodos HTTP

```javascript
const express = require("express");
const router  = express.Router();

router.get("/",      (req, res) => res.status(200).json([]));      // listar
router.get("/:id",   (req, res) => res.status(200).json({}));      // buscar por id
router.post("/",     (req, res) => res.status(201).json({}));      // criar
router.put("/:id",   (req, res) => res.status(200).json({}));      // atualizar
router.delete("/:id",(req, res) => res.status(200).json({}));      // deletar

module.exports = router;
```

| Método | Uso | Status de sucesso |
|--------|-----|-------------------|
| GET | Buscar dados | 200 OK |
| POST | Criar registro | 201 Created |
| PUT | Atualizar registro | 200 OK |
| DELETE | Deletar registro | 200 OK |

---

## req e res — Objetos Essenciais

```javascript
// req — dados da requisição
req.params.id     // parâmetro da URL → /produtos/1
req.query.nome    // query string → /produtos?nome=arroz
req.body          // corpo da requisição (POST/PUT)
req.headers       // cabeçalhos da requisição

// res — resposta ao cliente
res.status(200).json({ mensagem: "Ok" });      // sucesso com JSON
res.status(201).json(novoItem);                // criado
res.status(404).json({ mensagem: "Não encontrado" }); // não encontrado
res.status(400).json({ mensagem: "Dados inválidos" }); // erro do cliente
res.status(500).json({ mensagem: "Erro interno" });    // erro do servidor
```

---

## Padrão MVC com Orientação a Objetos

### Model
```javascript
class Produto {
  constructor(id, nome, preco, quantidade) {
    this.id         = id;
    this.nome       = nome;
    this.preco      = preco;
    this.quantidade = quantidade;
    this.criadoEm   = new Date().toISOString();
  }
}

module.exports = Produto;
```

### Service
```javascript
const Produto = require("../models/produto");

class ProdutoService {
  constructor() {
    this.produtos  = []; // substituir pelo banco futuramente
    this.proximoId = 1;
  }

  listarTodos()          { return this.produtos; }
  buscarPorId(id)        { return this.produtos.find(p => p.id === parseInt(id)); }

  criar({ nome, preco, quantidade }) {
    const novo = new Produto(this.proximoId++, nome, preco, quantidade);
    this.produtos.push(novo);
    return novo;
  }

  atualizar(id, dados) {
    const produto = this.buscarPorId(id);
    if (!produto) return null;
    produto.nome       = dados.nome       ?? produto.nome;
    produto.preco      = dados.preco      ?? produto.preco;
    produto.quantidade = dados.quantidade ?? produto.quantidade;
    return produto;
  }

  deletar(id) {
    const index = this.produtos.findIndex(p => p.id === parseInt(id));
    if (index === -1) return false;
    this.produtos.splice(index, 1);
    return true;
  }
}

module.exports = new ProdutoService();
```

### Controller
```javascript
const ProdutoService = require("../services/produtoService");

class ProdutoController {
  listarTodos(req, res) {
    res.status(200).json(ProdutoService.listarTodos());
  }

  buscarPorId(req, res) {
    const produto = ProdutoService.buscarPorId(req.params.id);
    if (!produto) return res.status(404).json({ mensagem: "Não encontrado" });
    res.status(200).json(produto);
  }

  criar(req, res) {
    const produto = ProdutoService.criar(req.body);
    res.status(201).json(produto);
  }

  atualizar(req, res) {
    const produto = ProdutoService.atualizar(req.params.id, req.body);
    if (!produto) return res.status(404).json({ mensagem: "Não encontrado" });
    res.status(200).json(produto);
  }

  deletar(req, res) {
    const sucesso = ProdutoService.deletar(req.params.id);
    if (!sucesso) return res.status(404).json({ mensagem: "Não encontrado" });
    res.status(200).json({ mensagem: "Deletado com sucesso" });
  }
}

module.exports = new ProdutoController();
```

### Routes
```javascript
const express           = require("express");
const router            = express.Router();
const ProdutoController = require("../controllers/produtoController");

router.get("/",       ProdutoController.listarTodos.bind(ProdutoController));
router.get("/:id",    ProdutoController.buscarPorId.bind(ProdutoController));
router.post("/",      ProdutoController.criar.bind(ProdutoController));
router.put("/:id",    ProdutoController.atualizar.bind(ProdutoController));
router.delete("/:id", ProdutoController.deletar.bind(ProdutoController));

module.exports = router;
```

> ⚠️ O `.bind()` é necessário ao usar classes com Express — garante que o `this` funcione corretamente dentro dos métodos.

---

## Middlewares

Funções que executam **antes** do controller. Usadas para autenticação, validação, logs etc.

```javascript
// Middleware global — aplica em todas as rotas
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // passa para o próximo
});

// Middleware em rota específica
router.get("/", autenticar, ProdutoController.listarTodos);

// Middleware de erro
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ mensagem: "Erro interno do servidor" });
});
```

---

## Variáveis de Ambiente — .env

```bash
# Instalar
npm install dotenv
```

```javascript
// .env
PORT=3000
JWT_SECRET=minha_chave_secreta

// server.js
require("dotenv").config();
const PORT = process.env.PORT || 3000;
```

> ⚠️ Nunca suba o arquivo `.env` para o GitHub — adicione ao `.gitignore`.

---

## .gitignore recomendado

```
node_modules/
.env
```

---

## Códigos de Status HTTP

| Código | Significado | Quando usar |
|--------|-------------|-------------|
| 200 | OK | Requisição bem-sucedida |
| 201 | Created | Registro criado |
| 400 | Bad Request | Dados inválidos enviados |
| 401 | Unauthorized | Não autenticado |
| 403 | Forbidden | Sem permissão |
| 404 | Not Found | Recurso não encontrado |
| 500 | Internal Server Error | Erro no servidor |

---

## Boas Práticas

- Separe sempre em Model → Service → Controller → Route
- Use variáveis de ambiente para dados sensíveis
- Nunca suba `node_modules` ou `.env` para o GitHub
- Trate sempre os casos de erro (404, 400, 500)
- Use `.bind()` ao exportar instâncias de classes como controllers
- Mantenha uma responsabilidade por arquivo