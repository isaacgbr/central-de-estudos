// ============================================================
// TEMPLATE — ROUTES MODELO (Express)
// Mapeia os endpoints HTTP para os métodos do Controller
// ============================================================

const express            = require("express");
const router             = express.Router();

// Substitua pelo controller real (ex: produtoController)
const EntidadeController = require("../controllers/entidadeController");

// ─────────────────────────────────────────
// Quando usar classes como controller, o .bind() é obrigatório
// Garante que o "this" funcione corretamente dentro dos métodos
// ─────────────────────────────────────────

router.get(    "/",    EntidadeController.listarTodos.bind(EntidadeController)); // GET    /entidades
router.get(    "/:id", EntidadeController.buscarPorId.bind(EntidadeController)); // GET    /entidades/:id
router.post(   "/",    EntidadeController.criar.bind(EntidadeController));       // POST   /entidades
router.put(    "/:id", EntidadeController.atualizar.bind(EntidadeController));   // PUT    /entidades/:id
router.delete( "/:id", EntidadeController.deletar.bind(EntidadeController));     // DELETE /entidades/:id

// ─────────────────────────────────────────
// Para adicionar middleware em rota específica:
// router.post("/", autenticar, apenasAdmin, EntidadeController.criar.bind(...));
// ─────────────────────────────────────────

module.exports = router;