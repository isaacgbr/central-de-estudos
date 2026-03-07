# 🔐 Autenticação em JavaScript

> Resumo rápido sobre Login, JWT, Criptografia de Senha e Proteção de Rotas.

---

## O que é Autenticação?

| Conceito | Significado |
|----------|-------------|
| **Autenticação** | Verificar QUEM é o usuário (login) |
| **Autorização** | Verificar O QUE ele pode fazer (permissões) |
| **Token** | Crachá digital gerado após o login |

---

## Criptografia de Senha — bcrypt

Nunca salve senha em texto puro. Use **bcrypt** para criptografar.

```bash
npm install bcryptjs
```

```javascript
// Criptografar (ao criar usuário)
const hash = await bcrypt.hash("minha123", 10);

// Verificar (no login)
const ok = await bcrypt.compare("minha123", hash); // true
```

---

## JWT — JSON Web Token

Token gerado após o login, composto por 3 partes:

- **Header** → tipo e algoritmo
- **Payload** → dados do usuário (id, role)
- **Assinatura** → garante que não foi alterado

```bash
npm install jsonwebtoken
```

```javascript
// Gerar token
const token = jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "1d" });

// Verificar token
const decoded = jwt.verify(token, process.env.JWT_SECRET);
```

---

## Proteção de Rotas — Middleware

Função que roda **antes** do controller para validar o token.

```javascript
const autenticar = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ mensagem: "Token não fornecido" });
  try {
    req.usuario = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ mensagem: "Token inválido ou expirado" });
  }
};
```

---

## Aplicando no server.js

```javascript
app.use("/auth", authRoutes);  // 🔓 pública — sem token

app.use(autenticar);           // 🔒 tudo abaixo exige token

app.use("/produtos",   produtoRoutes);
app.use("/usuarios",   usuarioRoutes);
```

---

## Como testar no Thunder Client

```
POST /auth/login
Body: { "email": "admin@email.com", "senha": "123456" }

Resposta: { "token": "eyJhbGci..." }

Próximas requisições → Headers:
Authorization: Bearer eyJhbGci...
```

---

## Erros Comuns

| Erro | Causa | Solução |
|------|-------|---------|
| 401 Unauthorized | Token ausente ou inválido | Verificar header Authorization |
| 403 Forbidden | Sem permissão | Verificar role do usuário |
| TokenExpiredError | Token expirou | Fazer login novamente |
| Senha não confere | Texto puro vs hash | Usar bcrypt.compare() |

---

## Boas Práticas

- Guarde o `JWT_SECRET` no arquivo `.env`
- Defina expiração do token (`expiresIn: "1d"`)
- Nunca coloque senhas no payload do JWT
- Use HTTPS em produção

```bash
# .env
JWT_SECRET=sua_chave_super_secreta
```