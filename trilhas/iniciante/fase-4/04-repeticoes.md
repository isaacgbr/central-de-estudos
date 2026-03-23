# 04 — Repetições e Estruturas de Controle

Muitas tarefas em programas precisam ser executadas várias vezes.

Imagine ter que repetir a mesma ação manualmente dezenas ou centenas de vezes.

Isso seria demorado e ineficiente.

Para resolver esse problema, usamos **estruturas de repetição**.

---

## 🔁 O que são repetições?

Repetições permitem executar um bloco de instruções várias vezes automaticamente.

Funciona como dizer ao programa:

> “Repita isso até que uma condição seja satisfeita.”

---

## 🧠 Estrutura básica (conceito)

Uma repetição segue esta lógica:

```id="7n64ts"
ENQUANTO condição for verdadeira
    execute as instruções
```

Ou:

```id="y2mq9s"
PARA cada item de uma sequência
    execute as instruções
```

---

## 💻 Exemplo prático (conceitual)

Imagine um sistema que envia notificações para 5 usuários.

Sem repetição:

Enviar notificação para usuário 1
Enviar notificação para usuário 2
Enviar notificação para usuário 3
Enviar notificação para usuário 4
Enviar notificação para usuário 5

Com repetição:

```id="z0om7w"
PARA cada usuário da lista
    enviar notificação
```

Muito mais simples e organizado.

---

## 🔢 Outro exemplo: contagem automática

Imagine que um sistema precisa contar de 1 até 10.

```id="5pkh9m"
contador começa em 1

ENQUANTO contador ≤ 10
    mostrar contador
    aumentar contador em 1
```

O programa executa automaticamente cada etapa da contagem.

---

## 🎯 Por que repetições são importantes?

Permitem:

* Processar listas de dados
* Automatizar tarefas repetitivas
* Criar sistemas mais eficientes
* Reduzir quantidade de código
* Trabalhar com grandes volumes de informação

Sem repetições, programas seriam longos e difíceis de manter.

---

## 🧠 Repetições + Condições

Repetições quase sempre dependem de decisões.

O programa repete **enquanto** uma condição for verdadeira.

Quando a condição se torna falsa, a repetição para.

Isso evita loops infinitos.

---

## 🏁 Conclusão da fase

Agora você entende os principais pilares da programação:

✔ Variáveis guardam dados
✔ Condicionais permitem decisões
✔ Repetições automatizam tarefas

Com esses três conceitos, você já consegue entender como a maioria dos programas funciona internamente.

Você construiu a base da lógica usada em qualquer linguagem de programação.

---

## ✏️ Exercícios

1. Explique com suas palavras o que é uma estrutura de repetição.
2. Crie um exemplo onde repetição seria útil em um sistema escolar.
3. Qual a vantagem de usar repetição em vez de repetir comandos manualmente?
4. Imagine um programa que nunca para de repetir. Qual seria o problema?

---

<div align="center">
  <sub>
    <a href="./03-condicionais.md">← anterior</a>
    &nbsp;·&nbsp;
    <a href="./README.md">fase 4</a>
    &nbsp;·&nbsp;
    <a href="../fase-5/README.md">próxima fase →</a>
  </sub>
</div>
