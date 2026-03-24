# 04 — Boas Práticas

Fazer funcionar é o mínimo. Fazer funcionar de forma segura, organizada e sustentável é o que define um desenvolvedor profissional. Esta seção consolida os padrões que você deve carregar em todo projeto backend.

---

## 🏗️ Estrutura de projeto

Uma estrutura clara facilita a navegação, a manutenção e o onboarding de novos devs.

```
src/
├── config/
│   └── index.js          ← variáveis de ambiente centralizadas
├── middlewares/
│   ├── auth.js           ← autenticação JWT
│   ├── validacao.js      ← validação de dados
│   └── erros.js          ← tratamento centralizado de erros
├── routes/
│   ├── index.js          ← agrupa todas as rotas
│   ├── auth.routes.js
│   └── usuarios.routes.js
├── controllers/
│   └── usuarios.controller.js
├── services/
│   └── usuarios.service.js
├── models/ (opcional)
│   └── usuario.model.js
└── app.js
```

**Regra:** cada camada tem uma responsabilidade única.
- **Route** — define o caminho e aplica middlewares
- **Controller** — recebe a requisição e devolve a resposta
- **Service** — contém a lógica de negócio
- **Model** — representa e valida a estrutura dos dados

---

## 🔒 Segurança

### Helmet — headers de segurança
```bash
npm install helmet
```
```javascript
const helmet = require('helmet')
app.use(helmet())  // adiciona dezenas de headers de segurança automaticamente
```

### Rate limiting — limite de requisições
```bash
npm install express-rate-limit
```
```javascript
const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutos
  max: 100,                   // máximo de 100 requisições por IP
  message: { erro: 'Muitas requisições — tente novamente mais tarde' }
})

app.use(limiter)

// mais restritivo para login (evitar brute force)
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { erro: 'Muitas tentativas de login' }
})

app.post('/auth/login', loginLimiter, AuthController.login)
```

### CORS configurado corretamente
```bash
npm install cors
```
```javascript
const cors = require('cors')

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
```

---

## ❗ Tratamento de erros consistente

### Classe de erro customizada
```javascript
// utils/AppError.js
class AppError extends Error {
  constructor(mensagem, statusCode = 500) {
    super(mensagem)
    this.statusCode = statusCode
    this.name = 'AppError'
  }
}

module.exports = AppError
```

### Usando nos serviços
```javascript
const AppError = require('../utils/AppError')

async function buscarPorId(id) {
  const usuario = await UsuariosRepository.buscar(id)
  if (!usuario) throw new AppError('Usuário não encontrado', 404)
  return usuario
}
```

### Middleware de erros centralizado
```javascript
// middlewares/erros.js
function tratarErros(err, req, res, next) {
  // erro conhecido da aplicação
  if (err.name === 'AppError') {
    return res.status(err.statusCode).json({ erro: err.message })
  }

  // erro de JWT
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ erro: 'Token inválido' })
  }

  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({ erro: 'Token expirado' })
  }

  // erro inesperado — não expõe detalhes em produção
  console.error(err)
  res.status(500).json({
    erro: process.env.NODE_ENV === 'development'
      ? err.message
      : 'Erro interno do servidor'
  })
}

module.exports = { tratarErros }
```

---

## 📋 Padrão de resposta da API

Respostas consistentes facilitam a vida de quem consome a API.

```javascript
// utils/resposta.js
const sucesso = (res, dados, statusCode = 200) => {
  res.status(statusCode).json({
    sucesso: true,
    dados
  })
}

const erro = (res, mensagem, statusCode = 400) => {
  res.status(statusCode).json({
    sucesso: false,
    erro: mensagem
  })
}

module.exports = { sucesso, erro }
```

```javascript
// usando no controller
const { sucesso, erro } = require('../utils/resposta')

static async listar(req, res, next) {
  try {
    const usuarios = await UsuariosService.listarTodos()
    sucesso(res, usuarios)
  } catch (err) {
    next(err)
  }
}
```

---

## 📝 Checklist antes de subir para produção

```
Segurança
☐ Senhas com hash (bcrypt)
☐ Tokens JWT com secret forte e expiração curta
☐ Helmet instalado e configurado
☐ Rate limiting nas rotas sensíveis
☐ CORS restrito ao domínio do frontend
☐ Queries com parâmetros (sem SQL Injection)
☐ .env no .gitignore

Código
☐ Variáveis de ambiente validadas na inicialização
☐ Tratamento de erros centralizado
☐ Logs úteis (sem dados sensíveis)
☐ Nenhuma credencial hardcoded no código

Estrutura
☐ Separação em routes/controllers/services
☐ .env.example atualizado
☐ README com instruções de como rodar o projeto
```

---

## 🏁 Fim da Trilha Backend — JavaScript

Parabéns! Você percorreu todo o caminho — de JavaScript puro ao Node.js sem framework, de um servidor simples a uma API com autenticação, banco de dados e boas práticas de segurança.

Você agora tem a base para construir APIs profissionais e está pronto para o mercado como desenvolvedor backend JavaScript.

**Próximos passos sugeridos:**
- Construa um projeto completo do zero aplicando tudo que aprendeu
- Explore testes automatizados com Jest
- Aprenda Docker para containerizar sua aplicação
- Estude sobre deploy em serviços como Railway, Render ou AWS

---

## ✏️ Exercícios

1. Adicione Helmet e rate limiting a uma API existente sua
2. Implemente a classe `AppError` e refatore todos os erros da sua API para usá-la
3. Crie um padrão de resposta consistente e aplique em todos os endpoints
4. Percorra o checklist de produção em um projeto seu — quantos itens já estão marcados?

---

<div align="center">
  <sub>
    <a href="./03-variaveis-de-ambiente.md">← anterior</a>
    &nbsp;·&nbsp;
    <a href="./README.md">fase 4</a>
    &nbsp;·&nbsp;
    <a href="../../README.md">← voltar para JavaScript Backend</a>
  </sub>
</div>