// ============================================================
// TEMPLATE — ASYNC / AWAIT EM JAVASCRIPT
// Base para trabalhar com operações assíncronas
// ============================================================

// ─────────────────────────────────────────
// FUNÇÃO ASSÍNCRONA BÁSICA
// async → indica que a função é assíncrona
// await → pausa a execução até a Promise ser resolvida
// ─────────────────────────────────────────
const buscarDados = async (url) => {
  try {
    const resposta = await fetch(url);        // aguarda a requisição
    const dados    = await resposta.json();   // aguarda a conversão para JSON
    return dados;
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro.message);
    throw erro; // relança o erro para quem chamou a função tratar
  }
};

// ─────────────────────────────────────────
// MÚLTIPLAS OPERAÇÕES EM SEQUÊNCIA
// Cada await aguarda o anterior terminar
// ─────────────────────────────────────────
const operacoesSequenciais = async () => {
  const usuarios  = await buscarDados("/api/usuarios");
  const produtos  = await buscarDados("/api/produtos");
  const pedidos   = await buscarDados("/api/pedidos");
  return { usuarios, produtos, pedidos };
};

// ─────────────────────────────────────────
// MÚLTIPLAS OPERAÇÕES EM PARALELO
// Promise.all → executa tudo ao mesmo tempo, mais rápido
// Use quando as operações não dependem uma da outra
// ─────────────────────────────────────────
const operacoesParalelas = async () => {
  const [usuarios, produtos, pedidos] = await Promise.all([
    buscarDados("/api/usuarios"),
    buscarDados("/api/produtos"),
    buscarDados("/api/pedidos"),
  ]);
  return { usuarios, produtos, pedidos };
};

// ─────────────────────────────────────────
// TRATAMENTO DE ERRO COMPLETO
// ─────────────────────────────────────────
const comTratamentoCompleto = async () => {
  try {
    const dados = await buscarDados("/api/exemplo");
    console.log("Sucesso:", dados);
    return dados;
  } catch (erro) {
    console.error("Erro capturado:", erro.message);
    return null; // retorna null em caso de erro
  } finally {
    console.log("Sempre executa — útil para fechar conexões");
  }
};

// ─────────────────────────────────────────
// ASYNC/AWAIT NO EXPRESS (Controller)
// ─────────────────────────────────────────
const exemploController = async (req, res) => {
  try {
    const dados = await buscarDados("/api/exemplo");
    res.status(200).json(dados);
  } catch (erro) {
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

module.exports = {
  buscarDados,
  operacoesSequenciais,
  operacoesParalelas,
  comTratamentoCompleto,
};