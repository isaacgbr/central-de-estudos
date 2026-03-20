// ============================================================
// TEMPLATE — SERVICE MODELO (Orientação a Objetos)
// Contém toda a lógica de negócio e acesso aos dados
// Quando o banco de dados for integrado, apenas este arquivo muda
// ============================================================

// Substitua "Entidade" pelo nome real (ex: Produto, Usuario)
const Entidade = require("../models/entidade");

class EntidadeService {

  constructor() {
    this.itens     = []; // banco de dados em memória — substituir futuramente
    this.proximoId = 1;  // controla o incremento do ID
  }

  // ─────────────────────────────────────────
  // Retorna todos os registros
  // ─────────────────────────────────────────
  listarTodos() {
    return this.itens;
  }

  // ─────────────────────────────────────────
  // Busca um registro pelo ID
  // parseInt() garante comparação correta (string vs number)
  // ─────────────────────────────────────────
  buscarPorId(id) {
    return this.itens.find((item) => item.id === parseInt(id));
  }

  // ─────────────────────────────────────────
  // Cria um novo registro
  // Desestruture os campos esperados no parâmetro
  // ─────────────────────────────────────────
  criar({ nome, descricao }) {
    const novo = new Entidade(this.proximoId++, nome, descricao);
    this.itens.push(novo);
    return novo;
  }

  // ─────────────────────────────────────────
  // Atualiza apenas os campos enviados
  // ?? (nullish coalescing) mantém o valor original se o novo for null/undefined
  // ─────────────────────────────────────────
  atualizar(id, { nome, descricao, ativo }) {
    const item = this.buscarPorId(id);
    if (!item) return null;

    item.nome      = nome      ?? item.nome;
    item.descricao = descricao ?? item.descricao;
    item.ativo     = ativo     ?? item.ativo;

    return item;
  }

  // ─────────────────────────────────────────
  // Remove um registro pelo ID
  // splice(index, 1) remove 1 elemento na posição encontrada
  // ─────────────────────────────────────────
  deletar(id) {
    const index = this.itens.findIndex((item) => item.id === parseInt(id));
    if (index === -1) return false;
    this.itens.splice(index, 1);
    return true;
  }
}

// Exporta uma única instância — padrão Singleton
// Garante que o array em memória seja compartilhado em toda a aplicação
module.exports = new EntidadeService();