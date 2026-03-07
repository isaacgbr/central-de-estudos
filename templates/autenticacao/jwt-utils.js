// ============================================================
// TEMPLATE — JWT UTILS
// Funções auxiliares para gerar e verificar tokens JWT
// ============================================================

const jwt = require("jsonwebtoken");

// ─────────────────────────────────────────
// Chave secreta — sempre use variável de ambiente
// Nunca escreva a chave diretamente no código
// ─────────────────────────────────────────
const SEGREDO = process.env.JWT_SECRET || "chave_padrao_dev";

// ─────────────────────────────────────────
// Gera um token JWT com os dados do usuário
// payload → dados que ficarão no token (id, role, email)
// expiresIn → tempo de validade ("1d", "2h", "30m")
// ─────────────────────────────────────────
const gerarToken = (payload) => {
  return jwt.sign(payload, SEGREDO, { expiresIn: "1d" });
};

// ─────────────────────────────────────────
// Verifica e decodifica um token
// Lança erro automaticamente se o token for inválido ou expirado
// ─────────────────────────────────────────
const verificarToken = (token) => {
  return jwt.verify(token, SEGREDO);
};

module.exports = { gerarToken, verificarToken };

// ─────────────────────────────────────────
// EXEMPLO DE USO
// ─────────────────────────────────────────
// const { gerarToken, verificarToken } = require("../utils/jwt");
//
// // Gerar token após login
// const token = gerarToken({ id: 1, role: "admin" });
//
// // Verificar token no middleware
// const decoded = verificarToken(token);
// console.log(decoded); // { id: 1, role: "admin", iat: ..., exp: ... }