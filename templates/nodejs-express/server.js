// ============================================================
// TEMPLATE — SERVER.JS
// Ponto de entrada da aplicação Express
// ============================================================

const express = require("express");
const app     = express();

// ─────────────────────────────────────────
// VARIÁVEIS DE AMBIENTE
// Carrega o arquivo .env automaticamente
// Instalar: npm install dotenv
// ─────────────────────────────────────────
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// ─────────────────────────────────────────
// MIDDLEWARES GLOBAIS
// Executam em todas as requisições
// ─────────────────────────────────────────
app.use(express.json());    // permite receber JSON no body
app.use(express.urlencoded({ extended: true })); // permite receber form data

// Middleware de log — registra todas as requisições
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // obrigatório — passa para o próximo middleware/rota
});

// ─────────────────────────────────────────
// ROTAS PÚBLICAS — não exigem autenticação
// ─────────────────────────────────────────
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes); // POST /auth/login

// ─────────────────────────────────────────
// MIDDLEWARE DE AUTENTICAÇÃO
// Tudo abaixo desta linha exige token válido
// ─────────────────────────────────────────
// const { autenticar } = require("./middlewares/authMiddleware");
// app.use(autenticar);

// ─────────────────────────────────────────
// ROTAS PROTEGIDAS — exigem autenticação
// ─────────────────────────────────────────
// const produtoRoutes  = require("./routes/produtoRoutes");
// const usuarioRoutes  = require("./routes/usuarioRoutes");
// const categoriaRoutes = require("./routes/categoriaRoutes");

// app.use("/produtos",    produtoRoutes);
// app.use("/usuarios",    usuarioRoutes);
// app.use("/categorias",  categoriaRoutes);

// ─────────────────────────────────────────
// ROTA PADRÃO — verifica se o servidor está online
// ─────────────────────────────────────────
app.get("/", (req, res) => {
  res.status(200).json({ mensagem: "Servidor online ✅" });
});

// ─────────────────────────────────────────
// MIDDLEWARE DE ERRO GLOBAL
// Captura qualquer erro não tratado nas rotas
// Deve sempre ser o ÚLTIMO middleware
// ─────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error("Erro não tratado:", err.message);
  res.status(500).json({ mensagem: "Erro interno do servidor" });
});

// ─────────────────────────────────────────
// INICIAR SERVIDOR
// ─────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});