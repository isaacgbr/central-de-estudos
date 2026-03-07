# 🟨 JavaScript — Guia de Referência Rápida

> Resumo completo de JavaScript — do básico ao essencial para o dia a dia.

---

## O que é JavaScript?

- Linguagem de programação interpretada, criada em 1995
- Roda no navegador e no servidor (Node.js)
- Base do desenvolvimento web moderno — frontend e backend

---

## Variáveis

```javascript
var   nome = "João";  // evite — escopo global, legado
let   idade = 25;     // use — pode ser reatribuída
const PI    = 3.14;   // use — valor fixo, não muda
```

> Regra: use `const` por padrão. Use `let` quando precisar reatribuir. Evite `var`.

---

## Tipos de Dados

```javascript
// Primitivos
let texto    = "Olá";          // String
let numero   = 42;             // Number
let decimal  = 3.14;           // Number
let ativo    = true;           // Boolean
let vazio    = null;           // Null
let indefinido;                // Undefined

// Referência
let lista    = [1, 2, 3];      // Array
let pessoa   = { nome: "Ana" };// Object
```

---

## Operadores

```javascript
// Aritméticos
a + b  // soma
a - b  // subtração
a * b  // multiplicação
a / b  // divisão
a % b  // resto
a ** b // potência

// Comparação
a === b  // igual (valor E tipo) ← use sempre esse
a !== b  // diferente
a > b    // maior
a < b    // menor

// Lógicos
&&  // E
||  // OU
!   // NÃO
```

---

## Condicionais

```javascript
// if / else
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

// Ternário
const status = idade >= 18 ? "Maior" : "Menor";

// Switch
switch (dia) {
  case "Segunda": console.log("Início da semana"); break;
  case "Sexta":   console.log("Quase fim de semana"); break;
  default:        console.log("Dia comum");
}
```

---

## Loops

```javascript
// for
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while
let i = 0;
while (i < 5) { i++; }

// for...of (arrays)
const nomes = ["Ana", "João"];
for (const nome of nomes) {
  console.log(nome);
}

// for...in (objetos)
const pessoa = { nome: "Ana", idade: 25 };
for (const chave in pessoa) {
  console.log(chave, pessoa[chave]);
}
```

---

## Funções

```javascript
// Declaração tradicional
function somar(a, b) {
  return a + b;
}

// Arrow function (mais usada atualmente)
const somar = (a, b) => a + b;

// Com múltiplas linhas
const saudar = (nome) => {
  const mensagem = `Olá, ${nome}!`;
  return mensagem;
};

// Parâmetro padrão
const saudar = (nome = "visitante") => `Olá, ${nome}!`;
```

---

## Arrays — Métodos Essenciais

```javascript
const nums = [1, 2, 3, 4, 5];

nums.push(6);          // adiciona no final
nums.pop();            // remove do final
nums.shift();          // remove do início
nums.unshift(0);       // adiciona no início
nums.length;           // tamanho

// Métodos funcionais
nums.map(n => n * 2);           // transforma → [2,4,6,8,10]
nums.filter(n => n > 2);        // filtra → [3,4,5]
nums.find(n => n > 3);          // acha o primeiro → 4
nums.includes(3);               // verifica → true
nums.forEach(n => console.log(n)); // percorre
nums.reduce((acc, n) => acc + n, 0); // acumula → 15
```

---

## Objetos

```javascript
const pessoa = {
  nome: "Ana",
  idade: 25,
  apresentar() {
    console.log(`Olá, sou ${this.nome}`);
  }
};

// Acessar
pessoa.nome;          // "Ana"
pessoa["idade"];      // 25
pessoa.apresentar();  // Olá, sou Ana

// Desestruturação
const { nome, idade } = pessoa;

// Spread
const copia = { ...pessoa, cidade: "SP" };
```

---

## Classes (Orientação a Objetos)

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome  = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, sou ${this.nome}`);
  }
}

// Herança
class Funcionario extends Pessoa {
  constructor(nome, idade, cargo) {
    super(nome, idade); // chama o construtor da classe pai
    this.cargo = cargo;
  }
}

const func = new Funcionario("Ana", 25, "Dev");
func.apresentar(); // Olá, sou Ana
```

---

## Promises e Async/Await

```javascript
// Promise
fetch("https://api.exemplo.com/dados")
  .then(res  => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Async/Await (mais legível)
const buscarDados = async () => {
  try {
    const res  = await fetch("https://api.exemplo.com/dados");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
```

---

## Módulos (ES6)

```javascript
// Exportar
export const somar = (a, b) => a + b;
export default class Pessoa { }

// Importar
import { somar }   from "./utils.js";
import Pessoa      from "./Pessoa.js";

// CommonJS (Node.js)
module.exports = { somar };
const { somar } = require("./utils");
```

---

## Boas Práticas

- Use `const` e `let` — nunca `var`
- Use `===` em vez de `==`
- Prefira arrow functions para callbacks
- Sempre trate erros com `try/catch` em async/await
- Nomes descritivos: `calcularTotal()` em vez de `calc()`
- Uma responsabilidade por função