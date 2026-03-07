// ============================================================
// TEMPLATE — CRUD BÁSICO EM JAVASCRIPT
// Estrutura base para operações de Create, Read, Update, Delete
// ============================================================

// Array simulando um banco de dados em memória
let itens = [];
let proximoId = 1;

// ─────────────────────────────────────────
// CREATE — Criar um novo item
// ─────────────────────────────────────────
const criar = (dados) => {
  const novoItem = {
    id: proximoId++,  // incrementa o ID automaticamente
    ...dados,         // spread — copia todos os campos recebidos
    criadoEm: new Date().toISOString(), // data de criação automática
  };
  itens.push(novoItem);
  return novoItem;
};

// ─────────────────────────────────────────
// READ — Listar todos os itens
// ─────────────────────────────────────────
const listarTodos = () => itens;

// ─────────────────────────────────────────
// READ — Buscar um item pelo ID
// ─────────────────────────────────────────
const buscarPorId = (id) => {
  return itens.find((item) => item.id === parseInt(id));
};

// ─────────────────────────────────────────
// UPDATE — Atualizar um item existente
// ?? = nullish coalescing — só substitui se o valor novo não for null/undefined
// ─────────────────────────────────────────
const atualizar = (id, dados) => {
  const item = buscarPorId(id);
  if (!item) return null; // retorna null se não encontrar

  // atualiza apenas os campos enviados
  Object.keys(dados).forEach((chave) => {
    item[chave] = dados[chave] ?? item[chave];
  });

  return item;
};

// ─────────────────────────────────────────
// DELETE — Remover um item pelo ID
// ─────────────────────────────────────────
const deletar = (id) => {
  const index = itens.findIndex((item) => item.id === parseInt(id));
  if (index === -1) return false; // retorna false se não encontrar
  itens.splice(index, 1);        // remove 1 elemento na posição encontrada
  return true;
};

// ─────────────────────────────────────────
// Exportar funções para uso em outros arquivos
// ─────────────────────────────────────────
module.exports = { criar, listarTodos, buscarPorId, atualizar, deletar };