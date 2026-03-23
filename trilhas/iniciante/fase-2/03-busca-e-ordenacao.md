# 03 — Busca e Ordenação

Dois dos problemas mais comuns em programação são encontrar um dado em uma coleção e colocar dados em ordem. Existem algoritmos clássicos para isso — entendê-los te faz um programador muito melhor.

---

## 🔍 Algoritmos de Busca

### Busca Linear

Percorre cada item da lista um por um até encontrar o que procura.

```
função buscaLinear(lista, alvo) {
  para (i = 0; i < lista.tamanho; i++) {
    se (lista[i] == alvo) {
      retornar i  // retorna a posição
    }
  }
  retornar -1  // não encontrado
}

numeros = [4, 7, 2, 9, 1, 5]
buscaLinear(numeros, 9)  // retorna 3
```

**Quando usar:** listas pequenas ou não ordenadas  
**Eficiência:** no pior caso, verifica todos os itens — lento para listas grandes

---

### Busca Binária

Só funciona em listas **ordenadas**. Divide a lista ao meio repetidamente — a cada passo elimina metade dos itens restantes.

```
função buscaBinaria(lista, alvo) {
  inicio = 0
  fim = lista.tamanho - 1

  enquanto (inicio <= fim) {
    meio = (inicio + fim) / 2

    se (lista[meio] == alvo) {
      retornar meio
    } senão se (lista[meio] < alvo) {
      inicio = meio + 1
    } senão {
      fim = meio - 1
    }
  }
  retornar -1
}

numeros = [1, 3, 5, 7, 9, 11, 13]
buscaBinaria(numeros, 7)  // retorna 3
```

**Quando usar:** listas grandes e ordenadas  
**Eficiência:** muito mais rápido — uma lista de 1 milhão de itens precisa de no máximo 20 verificações

---

## 📊 Algoritmos de Ordenação

### Bubble Sort

Compara pares de itens adjacentes e os troca de posição se estiverem na ordem errada. Repete até a lista estar ordenada.

```
função bubbleSort(lista) {
  para (i = 0; i < lista.tamanho; i++) {
    para (j = 0; j < lista.tamanho - i - 1; j++) {
      se (lista[j] > lista[j+1]) {
        // troca os dois
        temp = lista[j]
        lista[j] = lista[j+1]
        lista[j+1] = temp
      }
    }
  }
  retornar lista
}

bubbleSort([5, 3, 8, 1, 9, 2])
// [1, 2, 3, 5, 8, 9]
```

**Quando usar:** fins educacionais — fácil de entender, mas lento para listas grandes

---

### Selection Sort

Encontra o menor item da lista e o coloca na primeira posição. Depois encontra o segundo menor e o coloca na segunda posição. E assim por diante.

```
função selectionSort(lista) {
  para (i = 0; i < lista.tamanho; i++) {
    indiceMenor = i
    para (j = i + 1; j < lista.tamanho; j++) {
      se (lista[j] < lista[indiceMenor]) {
        indiceMenor = j
      }
    }
    // troca o menor com a posição atual
    temp = lista[i]
    lista[i] = lista[indiceMenor]
    lista[indiceMenor] = temp
  }
  retornar lista
}
```

---

### Na prática — use as funções prontas

Na vida real, você raramente vai implementar algoritmos de ordenação do zero. As linguagens oferecem funções otimizadas:

```
numeros = [5, 3, 8, 1, 9, 2]
numeros.ordenar()
// [1, 2, 3, 5, 8, 9]

// Ordem decrescente
numeros.ordenar(decrescente)
// [9, 8, 5, 3, 2, 1]

// Ordenar objetos por propriedade
usuarios.ordenarPor(u => u.nome)
```

O valor de estudar os algoritmos clássicos é **entender como funciona por baixo** — isso te ajuda a tomar decisões melhores e a resolver problemas mais complexos.

---

## ✏️ Exercícios

1. Implemente a busca linear para encontrar um nome em uma lista de nomes
2. Dado o array ordenado `[2, 5, 8, 12, 16, 23, 38, 56]`, trace manualmente os passos da busca binária procurando pelo número 23
3. Implemente o bubble sort e teste com a lista `[64, 34, 25, 12, 22, 11, 90]`
4. Qual algoritmo de busca você usaria para uma lista de 10 itens não ordenados? E para uma lista de 1 milhão de itens ordenados? Por quê?

---

<div align="center">
  <sub>
    <a href="./02-arrays-e-objetos.md">← anterior</a>
    &nbsp;·&nbsp;
    <a href="./README.md">fase 2</a>
    &nbsp;·&nbsp;
    <a href="./04-recursao.md">próximo →</a>
  </sub>
</div>