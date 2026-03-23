# 01 — Introdução a Algoritmos

Um algoritmo é uma sequência de passos bem definidos para resolver um problema. Você já usa algoritmos no dia a dia — uma receita de bolo, as instruções de montagem de um móvel, o caminho que você segue para chegar ao trabalho.

---

## 🧠 O que é um algoritmo?

Em programação, um algoritmo é uma solução descrita em passos lógicos e ordenados. Antes de escrever qualquer código, um bom programador pensa no algoritmo — ou seja, no **como resolver** antes do **como escrever**.

Exemplo — algoritmo para fazer café:
```
1. Colocar água na chaleira
2. Ligar a chaleira
3. Aguardar a água ferver
4. Colocar o pó de café no coador
5. Despejar a água quente sobre o pó
6. Aguardar o café coar
7. Servir
```

Simples, direto, sem ambiguidade. É exatamente assim que um computador precisa que você pense.

---

## 📐 Características de um bom algoritmo

- **Finito** — tem um início e um fim, não fica rodando para sempre
- **Definido** — cada passo é claro e sem ambiguidade
- **Eficiente** — resolve o problema sem desperdício de recursos
- **Correto** — produz o resultado esperado para qualquer entrada válida

---

## ✍️ Formas de escrever um algoritmo

### Pseudocódigo
Descrição do algoritmo em linguagem próxima do humano, sem se preocupar com sintaxe de linguagem específica.

```
ALGORITMO calcularMedia
  LEIA nota1, nota2, nota3
  media = (nota1 + nota2 + nota3) / 3
  SE media >= 60
    ESCREVA "Aprovado"
  SENÃO
    ESCREVA "Reprovado"
FIM
```

### Fluxograma
Representação visual do algoritmo com formas geométricas:
- Oval — início e fim
- Retângulo — processo / instrução
- Losango — decisão (sim/não)
- Paralelogramo — entrada/saída de dados

---

## 🔍 Complexidade — algoritmos mais rápidos que outros

Nem todo algoritmo é igualmente eficiente. Imagine procurar um nome em uma lista:

**Busca linear** — verifica cada item um por um
```
Para uma lista de 1000 itens → até 1000 verificações
```

**Busca binária** — divide a lista ao meio repetidamente
```
Para uma lista de 1000 itens → até 10 verificações
```

O segundo algoritmo é muito mais rápido. Essa diferença de eficiência é chamada de **complexidade de tempo** — um conceito que você vai aprofundar ao longo dos estudos.

---

## 💡 Como pensar em algoritmos

1. **Entenda o problema** — o que você recebe? O que precisa devolver?
2. **Pense no passo a passo** — como você resolveria manualmente?
3. **Escreva o pseudocódigo** — antes do código, escreva em português
4. **Traduza para código** — agora sim, escreva na linguagem
5. **Teste** — tente casos normais, casos extremos e entradas inválidas

---

## ✏️ Exercícios

1. Escreva em pseudocódigo um algoritmo que lê dois números e exibe o maior deles
2. Escreva um algoritmo que verifica se um número é par ou ímpar
3. Escreva um algoritmo que conta quantas vogais tem em uma palavra
4. Qual é a diferença entre um algoritmo correto e um algoritmo eficiente? Podem existir algoritmos corretos mas ineficientes?

---

<div align="center">
  <sub>
    <a href="./README.md">← voltar para Fase 2</a>
    &nbsp;·&nbsp;
    <a href="./02-arrays-e-objetos.md">próximo →</a>
  </sub>
</div>