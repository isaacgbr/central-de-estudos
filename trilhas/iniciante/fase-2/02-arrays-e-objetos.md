# 02 — Arrays e Objetos

Variáveis simples guardam um valor. Arrays e objetos guardam conjuntos de valores — são as estruturas mais usadas em programação para organizar dados.

---

## 📋 Arrays — listas ordenadas

Um array é uma lista de valores em uma sequência. Cada item tem uma posição (índice) começando do zero.

```
frutas = ["maçã", "banana", "laranja", "uva"]
           0        1         2          3
```

### Acessando itens
```
frutas[0]  // "maçã"
frutas[2]  // "laranja"
frutas[3]  // "uva"
```

### Operações básicas
```
// Adicionar ao final
frutas.adicionar("manga")
// ["maçã", "banana", "laranja", "uva", "manga"]

// Remover o último
frutas.removerUltimo()
// ["maçã", "banana", "laranja", "uva"]

// Tamanho do array
frutas.tamanho  // 4

// Verificar se contém um item
frutas.contem("banana")  // verdadeiro
```

### Percorrendo um array
```
para cada (fruta em frutas) {
  exibir(fruta)
}
```

---

## 🗂️ Objetos — dados com contexto

Um objeto agrupa informações relacionadas em pares de **chave: valor**. Em vez de ter variáveis soltas, você organiza tudo sob um mesmo teto.

Sem objeto:
```
nome = "Isaac"
idade = 22
cidade = "Teresina"
```

Com objeto:
```
usuario = {
  nome: "Isaac",
  idade: 22,
  cidade: "Teresina"
}
```

### Acessando propriedades
```
usuario.nome    // "Isaac"
usuario.idade   // 22
usuario["cidade"]  // "Teresina"
```

### Adicionando e modificando
```
usuario.email = "isaac@email.com"   // adiciona
usuario.idade = 23                   // modifica
```

### Removendo
```
remover usuario.cidade
```

---

## 🔗 Arrays de objetos

Na prática, você vai combinar os dois o tempo todo — listas de objetos são a base de qualquer sistema real.

```
usuarios = [
  { nome: "Isaac", idade: 22 },
  { nome: "Maria", idade: 28 },
  { nome: "João",  idade: 19 }
]

// Acessando o nome do segundo usuário
usuarios[1].nome  // "Maria"

// Percorrendo todos
para cada (usuario em usuarios) {
  exibir(usuario.nome + " tem " + usuario.idade + " anos")
}
```

---

## 🔍 Busca em arrays

### Encontrar um item pelo índice
```
posicao = frutas.encontrar("banana")  // 1
```

### Filtrar itens por condição
```
numeros = [1, 2, 3, 4, 5, 6, 7, 8]
pares = numeros.filtrar(n => n % 2 == 0)
// [2, 4, 6, 8]
```

### Transformar cada item
```
precos = [10, 20, 30]
comDesconto = precos.transformar(p => p * 0.9)
// [9, 18, 27]
```

---

## ✏️ Exercícios

1. Crie um array com 5 nomes e exiba cada um com seu número de posição
2. Crie um objeto representando um produto com nome, preço e quantidade em estoque
3. Crie um array de 3 objetos de produtos e exiba o nome e preço de cada um
4. Dado o array `[3, 7, 1, 9, 2, 8, 4]`, escreva um algoritmo que encontra o maior número sem usar funções prontas

---

<div align="center">
  <sub>
    <a href="./01-introducao-algoritmos.md">← anterior</a>
    &nbsp;·&nbsp;
    <a href="./README.md">fase 2</a>
    &nbsp;·&nbsp;
    <a href="./03-busca-e-ordenacao.md">próximo →</a>
  </sub>
</div>