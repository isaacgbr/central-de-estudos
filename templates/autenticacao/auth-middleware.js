// ============================================================
// TEMPLATE — MIDDLEWARE DE AUTENTICAÇÃO JWT
// Protege rotas verificando o token antes de acessar o controller
// ============================================================

const jwt = require("jsonwebtoken");

// ─────────────────────────────────────────
// MIDDLEWARE — Verifica se o token JWT é válido
// Uso: app.use(autenticar) ou router.get("/", autenticar, controller)
// ─────────────────────────────────────────
const autenticar = (req, res, next) => {
  // Pega o token do header Authorization
  // Formato esperado: "Bearer eyJhbGci..."
  const authHeader = req.headers["authorization"];
  const token      = authHeader && authHeader.split(" ")[1];

  // Se não enviou token, bloqueia
  if (!token) {
    return res.status(401).json({ mensagem: "Token não fornecido" });
  }

  try {
    // Verifica e decodifica o token
    const decoded  = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario    = decoded; // disponibiliza os dados do usuário na requisição
    next();                   // token válido — passa para o controller
  } catch (erro) {
    return res.status(401).json({ mensagem: "Token inválido ou expirado" });
  }
};

// ─────────────────────────────────────────
// MIDDLEWARE — Permite acesso apenas para admins
// Deve ser usado APÓS o middleware autenticar
// Uso: router.delete("/", autenticar, apenasAdmin, controller.deletar)
// ─────────────────────────────────────────
const apenasAdmin = (req, res, next) => {
  if (req.usuario.role !== "admin") {
    return res.status(403).json({ mensagem: "Acesso negado — apenas admins" });
  }
  next();
};

module.exports = { autenticar, apenasAdmin };