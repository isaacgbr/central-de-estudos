# 02 — Módulos e Filesystem

Node.js tem um sistema de módulos poderoso — ele permite dividir o código em arquivos, reutilizar funcionalidades e usar o ecossistema npm. Além disso, o acesso ao sistema de arquivos é uma das capacidades mais usadas no backend.

---

## 📦 Sistema de Módulos

### CommonJS — o padrão original do Node.js

```javascript
// matematica.js — exportando
function somar(a, b) {
  return a + b
}

function subtrair(a, b) {
  return a - b
}

module.exports = { somar, subtrair }
```

```javascript
// app.js — importando
const { somar, subtrair } = require('./matematica')

console.log(somar(5, 3))      // 8
console.log(subtrair(10, 4))  // 6
```

### Exportação padrão
```javascript
// usuario.js
class Usuario {
  constructor(nome, email) {
    this.nome = nome
    this.email = email
  }

  apresentar() {
    return `${this.nome} — ${this.email}`
  }
}

module.exports = Usuario
```

```javascript
// app.js
const Usuario = require('./usuario')
const u = new Usuario('Isaac', 'isaac@email.com')
console.log(u.apresentar())
```

---

## 🆕 ESM — módulos modernos (ES Modules)

A partir do Node.js 12+, você pode usar a sintaxe moderna de módulos — a mesma do browser e do TypeScript.

```javascript
// matematica.js
export function somar(a, b) {
  return a + b
}

export const PI = 3.14159
```

```javascript
// app.js
import { somar, PI } from './matematica.js'
```

Para usar ESM no Node.js, adicione `"type": "module"` no `package.json` ou use a extensão `.mjs`.

**Quando usar qual?**
- **CommonJS** — projetos existentes, bibliotecas mais antigas, quando a compatibilidade importa
- **ESM** — projetos novos, TypeScript, quando você quer consistência com o frontend

---

## 📁 Módulos nativos essenciais

### `path` — manipulando caminhos de arquivo
```javascript
const path = require('path')

// juntando caminhos de forma segura (funciona no Windows e Linux)
const caminho = path.join(__dirname, 'arquivos', 'dados.json')
// /home/isaac/projeto/arquivos/dados.json

// extensão do arquivo
path.extname('relatorio.pdf')   // '.pdf'

// nome sem extensão
path.basename('relatorio.pdf', '.pdf')  // 'relatorio'

// diretório do arquivo
path.dirname('/home/isaac/projeto/app.js')  // '/home/isaac/projeto'
```

### `os` — informações do sistema operacional
```javascript
const os = require('os')

console.log(os.platform())   // 'linux', 'win32', 'darwin'
console.log(os.hostname())   // nome do computador
console.log(os.cpus().length)  // número de núcleos
console.log(os.freemem())    // memória disponível em bytes
```

---

## 📂 Filesystem — lendo e escrevendo arquivos

### Leitura de arquivo
```javascript
const fs = require('fs')

// síncrono — bloqueia o event loop (evite em produção)
const conteudo = fs.readFileSync('./dados.txt', 'utf8')
console.log(conteudo)

// assíncrono com callback
fs.readFile('./dados.txt', 'utf8', (erro, conteudo) => {
  if (erro) {
    console.error('Erro ao ler:', erro)
    return
  }
  console.log(conteudo)
})

// assíncrono com promises (moderno)
const fsPromises = require('fs').promises

async function lerArquivo() {
  try {
    const conteudo = await fsPromises.readFile('./dados.txt', 'utf8')
    console.log(conteudo)
  } catch (erro) {
    console.error('Erro:', erro.message)
  }
}
```

### Escrita de arquivo
```javascript
const fs = require('fs').promises

// cria ou sobrescreve o arquivo
await fs.writeFile('./saida.txt', 'Conteúdo do arquivo')

// adiciona ao final sem sobrescrever
await fs.appendFile('./log.txt', `[${new Date().toISOString()}] Nova entrada\n`)
```

### Trabalhando com JSON
```javascript
const fs = require('fs').promises
const path = require('path')

// lendo JSON
async function lerDados() {
  const caminho = path.join(__dirname, 'dados.json')
  const raw = await fs.readFile(caminho, 'utf8')
  return JSON.parse(raw)
}

// salvando JSON
async function salvarDados(dados) {
  const caminho = path.join(__dirname, 'dados.json')
  await fs.writeFile(caminho, JSON.stringify(dados, null, 2))
}
```

### Verificando e listando
```javascript
const fs = require('fs').promises

// verificar se existe
async function existe(caminho) {
  try {
    await fs.access(caminho)
    return true
  } catch {
    return false
  }
}

// listar arquivos de uma pasta
const arquivos = await fs.readdir('./uploads')
console.log(arquivos)  // ['foto1.jpg', 'foto2.png', ...]

// criar diretório
await fs.mkdir('./uploads', { recursive: true })
```

---

## ✏️ Exercícios

1. Crie um módulo `validacoes.js` que exporta funções para validar email e CPF. Importe e use no `app.js`
2. Crie um script que lê um arquivo `usuarios.json`, adiciona um novo usuário e salva de volta
3. Crie um logger simples — uma função que recebe uma mensagem e a appenda em um arquivo `app.log` com timestamp
4. Qual é a diferença prática entre usar `readFileSync` e `readFile` com callback? Em que situação cada um é mais adequado?

---

<div align="center">
  <sub>
    <a href="./01-node-puro.md">← anterior</a>
    &nbsp;·&nbsp;
    <a href="./README.md">fase 2</a>
    &nbsp;·&nbsp;
    <a href="./03-quando-usar-sem-framework.md">próximo →</a>
  </sub>
</div>