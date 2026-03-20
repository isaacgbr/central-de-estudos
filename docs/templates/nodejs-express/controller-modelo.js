// ============================================================
// TEMPLATE — CONTROLLER MODELO (Orientação a Objetos)
// Recebe as requisições HTTP e devolve as respostas
// Nunca contém lógica de dados — delega para o Service
// ============================================================

// Substitua "Entidade" pelo nome real (ex: Produto, Usuario)
const EntidadeService = require("../services/entidadeService");

class EntidadeController {

  // ─────────────────────────────────────────
  // GET /entidades
  // Retorna todos os registros
  // ─────────────────────────────────────────
  listarTodos(req, res) {
    const itens = EntidadeService.listarTodos();
    res.status(200).json(itens);
  }

  // ─────────────────────────────────────────
  // GET /entidades/:id
  // Retorna um registro pelo ID
  // ─────────────────────────────────────────
  buscarPorId(req, res) {
    const item = EntidadeService.buscarPorId(req.params.id);
    if (!item) {
      return res.status(404).json({ mensagem: "Registro não encontrado" });
    }
    res.status(200).json(item);
  }

  // ─────────────────────────────────────────
  // POST /entidades
  // Cria um novo registro
  // ─────────────────────────────────────────
  criar(req, res) {
    const item = EntidadeService.criar(req.body);
    if (!item) {
      return res.status(400).json({ mensagem: "Dados inválidos ou conflito" });
    }
    res.status(201).json(item);
  }

  // ─────────────────────────────────────────
  // PUT /entidades/:id
  // Atualiza um registro existente
  // ─────────────────────────────────────────
  atualizar(req, res) {
    const item = EntidadeService.atualizar(req.params.id, req.body);
    if (!item) {
      return res.status(404).json({ mensagem: "Registro não encontrado" });
    }
    res.status(200).json(item);
  }

  // ─────────────────────────────────────────
  // DELETE /entidades/:id
  // Remove um registro pelo ID
  // ─────────────────────────────────────────
  deletar(req, res) {
    const sucesso = EntidadeService.deletar(req.params.id);
    if (!sucesso) {
      return res.status(404).json({ mensagem: "Registro não encontrado" });
    }
    res.status(200).json({ mensagem: "Registro deletado com sucesso" });
  }
}

// Exporta uma única instância — padrão Singleton
module.exports = new EntidadeController();