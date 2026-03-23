# 03 — Loops

Repetir ações é uma das coisas mais comuns em programação. Loops permitem executar um bloco de código várias vezes sem precisar escrever a mesma coisa repetidamente.

---

## 🔁 O que é um loop?

Imagine que você precisa exibir os números de 1 a 100. Sem loop, você escreveria 100 linhas. Com loop, você escreve 3.

```
para (i de 1 até 100) {
  exibir(i)
}
```

---

## 🔂 for — quando você sabe quantas vezes repetir

O loop `for` é ideal quando você já sabe de antemão quantas vezes quer repetir algo.

Estrutura:
```
para (início; condição; incremento) {
  // código a repetir
}
```

Exemplo — contar de 1 a 5:
```
para (i = 1; i <= 5; i++) {
  exibir(i)
}
// resultado: 1, 2, 3, 4, 5
```

Exemplo — percorrer uma lista:
```
frutas = ["maçã", "banana", "laranja"]

para (i = 0; i < tamanho(frutas); i++) {
  exibir(frutas[i])
}
// resultado: maçã, banana, laranja
```

---

## 🔂 while — quando você não sabe quantas vezes repetir

O loop `while` continua executando enquanto uma condição for verdadeira. Ideal quando você não sabe exatamente quantas repetições vai precisar.

```
enquanto (condição) {
  // código a repetir
}
```

Exemplo — pedir senha até acertar:
```
senha_correta = "abc123"
tentativa = ""

enquanto (tentativa != senha_correta) {
  tentativa = lerEntrada("Digite a senha: ")
}

exibir("Acesso liberado!")
```

---

## ⚠️ Loop infinito — cuidado!

Se a condição do `while` nunca se tornar falsa, o programa trava para sempre.

```
// ❌ loop infinito — nunca para
enquanto (verdadeiro) {
  exibir("Isso nunca termina")
}
```

Sempre garanta que o loop tem uma condição que eventualmente se tornará falsa.

---

## ⏭️ Controlando loops

### break — interrompe o loop imediatamente
```
para (i = 1; i <= 10; i++) {
  se (i == 5) {
    parar  // sai do loop quando i chegar em 5
  }
  exibir(i)
}
// resultado: 1, 2, 3, 4
```

### continue — pula para a próxima iteração
```
para (i = 1; i <= 5; i++) {
  se (i == 3) {
    continuar  // pula o número 3
  }
  exibir(i)
}
// resultado: 1, 2, 4, 5
```

---

## 🔃 for…in / for…each — percorrendo listas

Uma forma mais limpa de percorrer cada item de uma lista sem precisar gerenciar o índice manualmente.

```
frutas = ["maçã", "banana", "laranja"]

para cada (fruta em frutas) {
  exibir(fruta)
}
// resultado: maçã, banana, laranja
```

---

## ✏️ Exercícios

1. Escreva um loop que exibe todos os números pares de 1 a 20
2. Use um loop para somar todos os números de 1 a 100 e exibir o resultado
3. Percorra a lista `["HTML", "CSS", "JavaScript", "Node.js"]` e exiba cada item com seu número de ordem
4. Escreva um loop que pede um número ao usuário e para apenas quando o número digitado for maior que 10

---

<div align="center">
  <sub>
    <a href="./02-condicionais.md">← anterior</a>
    &nbsp;·&nbsp;
    <a href="./README.md">fase 1</a>
    &nbsp;·&nbsp;
    <a href="./04-funcoes.md">próximo →</a>
  </sub>
</div>