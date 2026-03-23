# 04 — Recursão

Recursão é quando uma função chama a si mesma para resolver um problema. É um conceito que confunde no início, mas abre portas para soluções elegantes em problemas complexos.

---

## 🔄 O que é recursão?

Imagine que você quer saber quantos andares um prédio tem, mas só pode olhar um andar por vez de baixo para cima. Você pergunta: *"Tem algum andar acima deste?"* — se sim, sobe e pergunta de novo. Quando chega no topo e a resposta é não, você começa a contar de volta.

Isso é recursão — um problema que se resolve chamando a mesma solução em uma versão menor de si mesmo.

---

## 🏗️ Estrutura de uma função recursiva

Toda função recursiva precisa de duas partes obrigatórias:

1. **Caso base** — a condição que para a recursão
2. **Chamada recursiva** — a função chamando a si mesma com um problema menor

```
função recursiva(problema) {
  // 1. Caso base — quando parar
  se (problema é simples o suficiente) {
    retornar solução direta
  }

  // 2. Chamada recursiva — problema menor
  retornar recursiva(versão menor do problema)
}
```

---

## 📐 Exemplo clássico — Fatorial

O fatorial de 5 é `5 × 4 × 3 × 2 × 1 = 120`.  
Perceba que `fatorial(5) = 5 × fatorial(4)` — o problema se repete em versão menor.

```
função fatorial(n) {
  // caso base
  se (n == 0 ou n == 1) {
    retornar 1
  }

  // chamada recursiva
  retornar n * fatorial(n - 1)
}

fatorial(5)
// 5 * fatorial(4)
// 5 * 4 * fatorial(3)
// 5 * 4 * 3 * fatorial(2)
// 5 * 4 * 3 * 2 * fatorial(1)
// 5 * 4 * 3 * 2 * 1
// 120
```

---

## 🔢 Exemplo — Sequência de Fibonacci

Cada número é a soma dos dois anteriores: `0, 1, 1, 2, 3, 5, 8, 13, 21...`

```
função fibonacci(n) {
  // caso base
  se (n <= 1) {
    retornar n
  }

  // chamada recursiva
  retornar fibonacci(n - 1) + fibonacci(n - 2)
}

fibonacci(6)  // 8
```

---

## ⚠️ Cuidados com recursão

### Stack overflow — recursão sem fim
Se o caso base nunca for atingido, a função chama a si mesma infinitamente até o programa travar.

```
// ❌ sem caso base — trava o programa
função contar(n) {
  exibir(n)
  contar(n + 1)  // nunca para
}
```

### Performance
Recursão pode ser mais lenta que loops em alguns casos — cada chamada ocupa espaço na memória (a pilha de chamadas). Para problemas simples, loops costumam ser mais eficientes.

---

## 🆚 Recursão vs Loop

A maioria dos problemas pode ser resolvida das duas formas. A recursão costuma ser mais elegante para problemas naturalmente recursivos — como árvores e estruturas aninhadas.

```
// Com loop
função fatorialLoop(n) {
  resultado = 1
  para (i = 2; i <= n; i++) {
    resultado = resultado * i
  }
  retornar resultado
}

// Com recursão
função fatorialRecursivo(n) {
  se (n <= 1) retornar 1
  retornar n * fatorialRecursivo(n - 1)
}
```

---

## ✏️ Exercícios

1. Escreva uma função recursiva que calcula a soma de todos os números de 1 até n
2. Escreva uma função recursiva que inverte uma string
3. Escreva uma função recursiva que verifica se uma palavra é palíndromo (igual de trás para frente)
4. Por que toda função recursiva precisa de um caso base? O que acontece sem ele?

---

## 🏁 Fim da Fase 2

Você agora sabe pensar em algoritmos, trabalhar com arrays e objetos, buscar e ordenar dados, e entender recursão. Esses são os blocos fundamentais que aparecem em toda entrevista técnica e em todo sistema real.

---

<div align="center">
  <sub>
    <a href="./03-busca-e-ordenacao.md">← anterior</a>
    &nbsp;·&nbsp;
    <a href="./README.md">fase 2</a>
    &nbsp;·&nbsp;
    <a href="../fase-3/README.md">próxima fase →</a>
  </sub>
</div>