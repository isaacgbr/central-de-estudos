# 02 — ES6 e Além

ES6 (ECMAScript 2015) trouxe uma reviravolta no JavaScript. Os recursos lançados a partir dessa versão são usados em absolutamente todo projeto moderno — conhecê-los bem separa quem escreve código funcional de quem escreve código limpo e profissional.

---

## 📦 Destructuring — extraindo valores com elegância

Em vez de acessar propriedades uma a uma, você extrai várias de uma vez.

### Em objetos
```javascript
const usuario = { nome: "Isaac", idade: 22, cidade: "Teresina" }

// sem destructuring
const nome = usuario.nome
const idade = usuario.idade

// com destructuring
const { nome, idade } = usuario
console.log(nome, idade)  // "Isaac" 22

// renomeando ao extrair
const { nome: nomeUsuario } = usuario
console.log(nomeUsuario)  // "Isaac"

// valor padrão se não existir
const { email = "não informado" } = usuario
console.log(email)  // "não informado"
```

### Em arrays
```javascript
const cores = ["vermelho", "verde", "azul"]

const [primeira, segunda] = cores
console.log(primeira)  // "vermelho"
console.log(segunda)   // "verde"

// pulando itens
const [, , terceira] = cores
console.log(terceira)  // "azul"
```

### Em parâmetros de função
```javascript
// sem destructuring
function exibirUsuario(usuario) {
  console.log(usuario.nome, usuario.idade)
}

// com destructuring — muito mais limpo
function exibirUsuario({ nome, idade }) {
  console.log(nome, idade)
}

exibirUsuario({ nome: "Isaac", idade: 22 })
```

---

## 🌀 Spread e Rest

### Spread `...` — espalhando valores
```javascript
// copiando arrays
const original = [1, 2, 3]
const copia = [...original]

// combinando arrays
const a = [1, 2]
const b = [3, 4]
const combinado = [...a, ...b]  // [1, 2, 3, 4]

// copiando objetos
const base = { nome: "Isaac", idade: 22 }
const atualizado = { ...base, cidade: "Teresina" }
// { nome: "Isaac", idade: 22, cidade: "Teresina" }

// sobrescrevendo propriedades
const corrigido = { ...base, idade: 23 }
// { nome: "Isaac", idade: 23 }
```

### Rest `...` — agrupando o restante
```javascript
// em arrays
const [primeiro, ...restante] = [1, 2, 3, 4, 5]
console.log(primeiro)   // 1
console.log(restante)   // [2, 3, 4, 5]

// em funções — número variável de argumentos
function somar(...numeros) {
  return numeros.reduce((acc, n) => acc + n, 0)
}

console.log(somar(1, 2, 3))        // 6
console.log(somar(1, 2, 3, 4, 5))  // 15
```

---

## 📝 Template Literals — strings modernas

```javascript
const nome = "Isaac"
const idade = 22

// concatenação antiga — feio e propenso a erro
const msg1 = "Olá, " + nome + "! Você tem " + idade + " anos."

// template literal — limpo e legível
const msg2 = `Olá, ${nome}! Você tem ${idade} anos.`

// expressões dentro
const preco = 100
const desconto = 0.2
console.log(`Preço final: R$ ${(preco * (1 - desconto)).toFixed(2)}`)
// "Preço final: R$ 80.00"

// múltiplas linhas
const html = `
  <div>
    <h1>${nome}</h1>
    <p>Idade: ${idade}</p>
  </div>
`
```

---

## 🔄 Módulos — organizando o código em arquivos

Em vez de um arquivo gigante, você divide o código em módulos — cada arquivo tem uma responsabilidade e exporta o que precisa compartilhar.

### Exportando
```javascript
// utils.js
export function somar(a, b) {
  return a + b
}

export function subtrair(a, b) {
  return a - b
}

export const PI = 3.14159
```

### Exportação padrão
```javascript
// usuario.js
export default class Usuario {
  constructor(nome, email) {
    this.nome = nome
    this.email = email
  }
}
```

### Importando
```javascript
// main.js
import { somar, PI } from './utils.js'
import Usuario from './usuario.js'

console.log(somar(2, 3))  // 5
const u = new Usuario("Isaac", "isaac@email.com")
```

---

## 🔗 Optional Chaining `?.` e Nullish Coalescing `??`

### Optional Chaining — acesso seguro a propriedades aninhadas
```javascript
const usuario = {
  nome: "Isaac",
  endereco: {
    cidade: "Teresina"
  }
}

// sem optional chaining — pode quebrar
console.log(usuario.telefone.numero)  // ❌ TypeError

// com optional chaining — retorna undefined se não existir
console.log(usuario.telefone?.numero)  // undefined
console.log(usuario.endereco?.cidade)  // "Teresina"
```

### Nullish Coalescing — valor padrão para null/undefined
```javascript
const nome = null
const exibir = nome ?? "Usuário anônimo"
console.log(exibir)  // "Usuário anônimo"

// diferença do || (OR)
const idade = 0
console.log(idade || 18)   // 18 — porque 0 é falsy
console.log(idade ?? 18)   // 0  — porque 0 não é null/undefined
```

---

## ✏️ Exercícios

1. Dado o objeto abaixo, use destructuring para extrair `nome`, `email` e `cidade` (com valor padrão "não informada" se não existir):
   ```javascript
   const perfil = { nome: "Isaac", email: "isaac@email.com", idade: 22 }
   ```

2. Use spread para criar um novo objeto `produtoAtualizado` a partir de `produto`, alterando apenas o preço:
   ```javascript
   const produto = { id: 1, nome: "Mouse", preco: 80, estoque: 15 }
   ```

3. Crie uma função `criarMensagem(template, ...valores)` que recebe um template com marcadores `{}` e substitui cada marcador pelo valor correspondente

4. Refatore o código abaixo usando optional chaining e nullish coalescing:
   ```javascript
   const cidade = usuario && usuario.endereco && usuario.endereco.cidade
     ? usuario.endereco.cidade
     : "não informada"
   ```

---

<div align="center">
  <sub>
    <a href="./01-javascript-fundamentos.md">← anterior</a>
    &nbsp;·&nbsp;
    <a href="./README.md">fase 1</a>
    &nbsp;·&nbsp;
    <a href="./03-typescript-intro.md">próximo →</a>
  </sub>
</div>