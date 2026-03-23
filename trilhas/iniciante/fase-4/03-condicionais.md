# 03 — Condicionais e Decisões

Programas precisam tomar decisões o tempo todo.

Eles analisam situações e executam ações diferentes dependendo das condições.

Isso é chamado de **estrutura condicional**.

---

## 🧠 O que são condicionais?

Condicionais permitem que o programa escolha o que fazer com base em uma regra.

Funciona como na vida real:

> Se estiver chovendo → levo guarda-chuva
> Se não estiver → saio normalmente

O programa avalia uma condição para decidir qual caminho seguir.

---

## ⚖️ Estrutura básica (conceito)

Uma decisão segue esta lógica:

```
SE condição for verdadeira
    faça isto
SENÃO
    faça outra coisa
```

O programa sempre escolhe apenas um caminho.

---

## 💻 Exemplo prático (conceitual)

Imagine um sistema de notas escolares.

```
SE nota ≥ 7
    aluno aprovado
SENÃO
    aluno reprovado
```

Outro exemplo em um sistema de loja:

```
SE pagamento aprovado
    liberar pedido
SENÃO
    cancelar compra
```

Condicionais controlam o fluxo do programa.

---

## 🔍 Comparações lógicas

Para tomar decisões, o programa faz comparações.

Alguns exemplos de comparações:

* Igualdade
* Diferença
* Maior que
* Menor que
* Maior ou igual
* Menor ou igual

Essas comparações retornam apenas dois resultados:

* Verdadeiro
* Falso

---

## 🧠 Exemplo com múltiplas decisões

Imagine um sistema de acesso por idade.

```
SE idade < 12
    acesso infantil
SENÃO SE idade < 18
    acesso juvenil
SENÃO
    acesso adulto
```

O programa testa várias condições até encontrar a correta.

---

## 🎯 Por que condicionais são essenciais?

Sem decisões, programas seriam lineares e limitados.

Condicionais permitem:

* Criar regras de negócio
* Validar dados
* Controlar permissões
* Personalizar experiências
* Responder às ações do usuário

São fundamentais para qualquer sistema inteligente.

---

## ✏️ Exercícios

1. Explique com suas palavras o que é uma estrutura condicional.
2. Crie um exemplo de decisão para um sistema de login.
3. Crie uma regra para classificar produtos como “barato” ou “caro”.
4. Imagine um sistema sem decisões. Que limitações ele teria?

---

<div align="center">
  <sub>
    <a href="./02-variaveis-e-tipos.md">← anterior</a>
    &nbsp;·&nbsp;
    <a href="./README.md">fase 4</a>
    &nbsp;·&nbsp;
    <a href="./04-repeticoes.md">próximo →</a>
  </sub>
</div>
