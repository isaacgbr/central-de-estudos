// ============================================================
// TEMPLATE — CLASSE MODELO EM JAVASCRIPT (Orientação a Objetos)
// Base para criar qualquer entidade no padrão OO
// ============================================================

class EntidadeModelo {

  // ─────────────────────────────────────────
  // CONSTRUTOR — executado ao criar um objeto com "new"
  // Recebe os dados e atribui às propriedades da instância
  // ─────────────────────────────────────────
  constructor(id, nome, descricao, ativo = true) {
    this.id        = id;
    this.nome      = nome;
    this.descricao = descricao;
    this.ativo     = ativo;                    // valor padrão = true
    this.criadoEm  = new Date().toISOString(); // gerado automaticamente
  }

  // ─────────────────────────────────────────
  // MÉTODO DE INSTÂNCIA — age sobre os dados do objeto
  // Acesse com: objeto.nomeDoMetodo()
  // ─────────────────────────────────────────
  apresentar() {
    return `ID: ${this.id} | Nome: ${this.nome} | Ativo: ${this.ativo}`;
  }

  // ─────────────────────────────────────────
  // MÉTODO ESTÁTICO — não precisa de instância para usar
  // Acesse com: EntidadeModelo.nomeDoMetodo()
  // ─────────────────────────────────────────
  static validar({ nome, descricao }) {
    if (!nome)      return "Campo nome é obrigatório";
    if (!descricao) return "Campo descrição é obrigatório";
    return null; // null = sem erros
  }
}

// ─────────────────────────────────────────
// Exportar a classe para uso em outros arquivos
// ─────────────────────────────────────────
module.exports = EntidadeModelo;

// ─────────────────────────────────────────
// EXEMPLO DE USO
// ─────────────────────────────────────────
// const EntidadeModelo = require("./classe-modelo");
//
// const item = new EntidadeModelo(1, "Produto X", "Descrição do produto");
// console.log(item.apresentar());
//
// const erro = EntidadeModelo.validar({ nome: "", descricao: "Teste" });
// console.log(erro); // "Campo nome é obrigatório"