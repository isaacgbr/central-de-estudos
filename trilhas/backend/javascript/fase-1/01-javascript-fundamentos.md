# 01 — JavaScript Fundamentos

Você já conhece lógica de programação. Agora é hora de aplicar isso em JavaScript com foco no que realmente importa para o backend — escopo, funções, assincronismo e como o JavaScript funciona por baixo.

---

## 🔍 Escopo — onde as variáveis vivem

Escopo define onde uma variável pode ser acessada. Em JavaScript existem três formas de declarar variáveis — e a escolha importa.

```javascript
var nome = "Isaac"    // escopo de função — evite, comportamento imprevisível
let idade = 22        // escopo de bloco — use para valores que mudam
const cidade = "Teresina"  // escopo de bloco — use para valores fixos
```

**Regra prática:** use sempre `const` por padrão. Use `let` só quando precisar reatribuir. Nunca use `var`.

### Escopo de bloco
```javascript
if (true) {
  let mensagem = "dentro do if"
  console.log(mensagem)  // funciona
}
console.log(mensagem)  // ❌ erro — mensagem não existe aqui
```

---

## 🔗 Closures

Uma closure é uma função que "lembra" do escopo onde foi criada, mesmo depois que esse escopo não existe mais.

```javascript
function criarContador() {
  let count = 0  // variável do escopo externo

  return function() {
    count++
    return count
  }
}

const contador = criarContador()
console.log(contador())  // 1
console.log(contador())  // 2
console.log(contador())  // 3
```

A função interna continua acessando `count` mesmo depois que `criarContador` terminou. Isso é uma closure.

**Por que importa no backend?** Closures aparecem em middlewares, callbacks e na construção de módulos — você vai encontrá-las o tempo todo.

---

## ⏳ Assincronismo — a alma do Node.js

JavaScript é single-thread — executa uma coisa por vez. Mas o Node.js consegue lidar com muitas requisições simultâneas porque operações lentas (banco de dados, arquivos, APIs externas) são executadas de forma **assíncrona** — o programa não para esperando, ele continua e volta quando a resposta chega.

### Callbacks — a forma original
```javascript
function buscarUsuario(id, callback) {
  // simula busca no banco
  setTimeout(() => {
    const usuario = { id, nome: "Isaac" }
    callback(null, usuario)
  }, 1000)
}

buscarUsuario(1, (erro, usuario) => {
  if (erro) {
    console.log("Erro:", erro)
    return
  }
  console.log("Usuário:", usuario)
})
```

O problema dos callbacks: quando você encadeia muitos, o código fica difícil de ler — o famoso **callback hell**.

### Promises — a evolução
```javascript
function buscarUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id <= 0) {
        reject(new Error("ID inválido"))
        return
      }
      resolve({ id, nome: "Isaac" })
    }, 1000)
  })
}

buscarUsuario(1)
  .then(usuario => console.log("Usuário:", usuario))
  .catch(erro => console.log("Erro:", erro))
```

### Async/Await — a forma moderna
A mesma lógica das Promises, mas com código que parece síncrono — muito mais legível.

```javascript
async function buscarEExibirUsuario(id) {
  try {
    const usuario = await buscarUsuario(id)
    console.log("Usuário:", usuario)
  } catch (erro) {
    console.log("Erro:", erro.message)
  }
}

buscarEExibirUsuario(1)
```

**Regra prática:** use sempre `async/await` em código novo. Entenda callbacks e Promises porque você vai encontrá-los em código legado e bibliotecas.

---

## 🧩 Funções — revisão com foco prático

### Funções como valores
Em JavaScript, funções são valores — você pode armazená-las em variáveis, passá-las como argumento e retorná-las de outras funções.

```javascript
const somar = function(a, b) {
  return a + b
}

function executar(operacao, a, b) {
  return operacao(a, b)
}

console.log(executar(somar, 5, 3))  // 8
```

### Arrow functions
Sintaxe mais curta para funções. Muito usada em callbacks e métodos de array.

```javascript
// função tradicional
function dobrar(n) {
  return n * 2
}

// arrow function
const dobrar = (n) => n * 2

// com múltiplas linhas
const processar = (n) => {
  const resultado = n * 2
  return resultado
}
```

---

## 🗂️ Manipulação de arrays — métodos essenciais

Esses métodos aparecem em todo código JavaScript moderno — você precisa dominar todos.

```javascript
const usuarios = [
  { nome: "Isaac", idade: 22, ativo: true },
  { nome: "Maria", idade: 28, ativo: false },
  { nome: "João",  idade: 19, ativo: true }
]

// map — transforma cada item
const nomes = usuarios.map(u => u.nome)
// ["Isaac", "Maria", "João"]

// filter — filtra por condição
const ativos = usuarios.filter(u => u.ativo)
// [{ nome: "Isaac"... }, { nome: "João"... }]

// find — retorna o primeiro que satisfaz a condição
const usuario = usuarios.find(u => u.nome === "Maria")
// { nome: "Maria", idade: 28, ativo: false }

// reduce — acumula um resultado
const somaIdades = usuarios.reduce((acc, u) => acc + u.idade, 0)
// 69

// some — verifica se pelo menos um satisfaz
const temMenorDeIdade = usuarios.some(u => u.idade < 18)
// false

// every — verifica se todos satisfazem
const todosAtivos = usuarios.every(u => u.ativo)
// false
```

---

## ✏️ Exercícios

1. Explique a diferença entre `let`, `const` e `var`. Em que situação você usaria cada um?
2. Crie uma função `criarMultiplicador(fator)` que retorna uma função capaz de multiplicar qualquer número pelo fator — use closure
3. Reescreva esse código usando `async/await`:
   ```javascript
   fetch('/api/usuarios')
     .then(res => res.json())
     .then(dados => console.log(dados))
     .catch(erro => console.log(erro))
   ```
4. Dado o array de produtos abaixo, use `filter` e `map` para retornar os nomes dos produtos com preço acima de 50:
   ```javascript
   const produtos = [
     { nome: "Caneta", preco: 3 },
     { nome: "Notebook", preco: 3500 },
     { nome: "Mouse", preco: 80 },
     { nome: "Caderno", preco: 25 }
   ]
   ```

---

<div align="center">
  <sub>
    <a href="./README.md">← voltar para Fase 1</a>
    &nbsp;·&nbsp;
    <a href="./02-es6-e-alem.md">próximo →</a>
  </sub>
</div>