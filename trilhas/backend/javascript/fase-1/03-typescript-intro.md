# 03 — Introdução ao TypeScript

TypeScript é JavaScript com tipagem estática. Ele não substitui o JavaScript — ele compila para JavaScript. O objetivo é tornar o código mais seguro, previsível e fácil de manter, especialmente em projetos grandes.

---

## 🤔 Por que TypeScript existe?

JavaScript foi criado para scripts simples no browser. Com o tempo passou a rodar no servidor, em apps mobile, em sistemas complexos com times grandes. O problema: JavaScript não avisa quando você comete erros de tipo — o erro só aparece em tempo de execução, muitas vezes em produção.

```javascript
// JavaScript — nenhum erro até executar
function somar(a, b) {
  return a + b
}

somar(5, "3")  // retorna "53" em vez de 8 — sem aviso!
```

TypeScript pega esse erro antes mesmo de rodar o código.

```typescript
// TypeScript — erro apontado na hora que você digita
function somar(a: number, b: number): number {
  return a + b
}

somar(5, "3")  // ❌ Erro: Argument of type 'string' is not assignable to parameter of type 'number'
```

---

## 🏷️ Tipagem básica

### Tipos primitivos
```typescript
let nome: string = "Isaac"
let idade: number = 22
let ativo: boolean = true
let indefinido: undefined = undefined
let nulo: null = null
```

### Arrays
```typescript
let numeros: number[] = [1, 2, 3]
let nomes: string[] = ["Isaac", "Maria"]
let misturado: (string | number)[] = ["Isaac", 22]
```

### Objetos com interface
```typescript
interface Usuario {
  id: number
  nome: string
  email: string
  ativo?: boolean  // ? = propriedade opcional
}

const usuario: Usuario = {
  id: 1,
  nome: "Isaac",
  email: "isaac@email.com"
  // ativo é opcional, não precisa incluir
}
```

### Funções tipadas
```typescript
function somar(a: number, b: number): number {
  return a + b
}

// arrow function
const multiplicar = (a: number, b: number): number => a * b

// sem retorno
function exibir(mensagem: string): void {
  console.log(mensagem)
}
```

---

## 🔀 Union Types — múltiplos tipos possíveis

```typescript
let id: string | number

id = 1          // válido
id = "abc-123"  // válido
id = true       // ❌ erro
```

---

## 🎯 Type vs Interface

Ambos definem formatos de objetos. `interface` é mais comum para objetos e classes. `type` é mais flexível para unions e aliases.

```typescript
// Interface — preferida para objetos
interface Produto {
  id: number
  nome: string
  preco: number
}

// Type — útil para unions e tipos complexos
type Status = "ativo" | "inativo" | "pendente"
type ID = string | number
```

---

## ✅ Quando usar TypeScript?

**Vale a pena usar quando:**
- O projeto é de médio ou grande porte
- Há mais de uma pessoa no time
- Você quer autocompletar e segurança no editor
- O projeto vai crescer e ser mantido por muito tempo

**Pode dispensar quando:**
- É um script simples ou projeto pequeno
- Você está aprendendo — comece com JS puro e migre depois
- O prazo é muito curto e o time não conhece TS

> Nesta trilha você vai aprender Node.js e Express com JavaScript puro primeiro. TypeScript será introduzido na fase de qualidade — quando você já entende o que está tipando.

---

## 🚀 Como começar

```bash
# instalar o TypeScript
npm install -g typescript

# criar um arquivo
touch index.ts

# compilar para JavaScript
tsc index.ts

# iniciar um projeto com configuração
tsc --init  # gera o tsconfig.json
```

### tsconfig.json — configuração básica
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

---

## ✏️ Exercícios

1. Crie uma interface `Produto` com as propriedades `id`, `nome`, `preco` e `estoque` (opcional). Instancie dois produtos válidos e tente criar um com uma propriedade inválida
2. Crie uma função `calcularDesconto(preco: number, percentual: number): number` e chame-a com argumentos do tipo errado para ver o erro do TypeScript
3. Crie um type `StatusPedido` que aceite apenas os valores `"pendente"`, `"aprovado"` e `"cancelado"`
4. Qual é a diferença prática entre usar TypeScript e JavaScript em um projeto com 3 desenvolvedores? Quais problemas o TypeScript previne?

---

## 🏁 Fim da Fase 1

Você agora tem uma base sólida em JavaScript moderno — escopo, closures, assincronismo, ES6+ e uma introdução a TypeScript. Esses são os fundamentos que vão aparecer em todo código Node.js que você escrever.

Na próxima fase você vai ver o Node.js funcionando sem nenhum framework — só o runtime puro — para entender o que acontece por baixo antes de usar qualquer abstração.

---

<div align="center">
  <sub>
    <a href="./02-es6-e-alem.md">← anterior</a>
    &nbsp;·&nbsp;
    <a href="./README.md">fase 1</a>
    &nbsp;·&nbsp;
    <a href="../fase-2/README.md">próxima fase →</a>
  </sub>
</div>