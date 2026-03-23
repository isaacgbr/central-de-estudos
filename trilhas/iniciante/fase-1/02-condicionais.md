# 02 — Condicionais

Programas precisam tomar decisões. Condicionais permitem que o código execute caminhos diferentes dependendo de uma condição.

---

## 🤔 O que é uma condicional?

Uma condicional verifica se algo é verdadeiro ou falso e executa um bloco de código de acordo com o resultado.

Pense assim: *"SE estiver chovendo, ENTÃO pego o guarda-chuva, SENÃO saio sem ele."*

---

## 🔀 if / else

A estrutura mais básica de decisão.

```
se (condição) {
  // executa se a condição for verdadeira
} senão {
  // executa se a condição for falsa
}
```

Exemplo prático:
```
idade = 17

se (idade >= 18) {
  exibir("Pode entrar")
} senão {
  exibir("Acesso negado — menor de idade")
}
```

---

## 🔀 else if — múltiplas condições

Quando você tem mais de dois caminhos possíveis.

```
nota = 75

se (nota >= 90) {
  exibir("Aprovado com distinção")
} senão se (nota >= 60) {
  exibir("Aprovado")
} senão {
  exibir("Reprovado")
}
```

O programa verifica cada condição em ordem — assim que uma for verdadeira, executa aquele bloco e ignora o resto.

---

## ⚖️ Operadores de comparação

São usados dentro das condicionais para comparar valores.

| Operador | Significado | Exemplo |
|----------|-------------|---------|
| `==` | igual a | `idade == 18` |
| `!=` | diferente de | `nome != "Admin"` |
| `>` | maior que | `preco > 100` |
| `<` | menor que | `estoque < 10` |
| `>=` | maior ou igual | `nota >= 60` |
| `<=` | menor ou igual | `tentativas <= 3` |

---

## 🔗 Operadores lógicos

Combinam múltiplas condições em uma só.

| Operador | Significado | Resultado |
|----------|-------------|-----------|
| `E` (AND) | ambas verdadeiras | `idade >= 18 E tem_documento` |
| `OU` (OR) | pelo menos uma verdadeira | `eh_admin OU eh_moderador` |
| `NÃO` (NOT) | inverte o resultado | `NÃO esta_bloqueado` |

Exemplo:
```
idade = 20
tem_documento = true

se (idade >= 18 E tem_documento) {
  exibir("Acesso liberado")
} senão {
  exibir("Acesso negado")
}
```

---

## 🔄 Switch — múltiplas opções fixas

Quando você precisa comparar uma variável com vários valores específicos, o switch é mais limpo que vários else if.

```
dia = "Segunda"

escolha (dia) {
  caso "Segunda": exibir("Início da semana"); parar
  caso "Sexta":   exibir("Quase fim de semana"); parar
  caso "Sábado":  exibir("Final de semana!"); parar
  padrão:         exibir("Dia comum")
}
```

---

## ✏️ Exercícios

1. Escreva uma condicional que verifica se um número é positivo, negativo ou zero
2. Crie uma lógica que libera acesso a um sistema apenas se o usuário tiver login E senha corretos
3. Escreva um switch que recebe uma nota de 1 a 5 e exibe um conceito (Ruim, Regular, Bom, Ótimo, Excelente)
4. O que acontece se nenhuma condição do `else if` for verdadeira e não tiver `else`?

---

<div align="center">
  <sub>
    <a href="./01-variaveis-e-tipos.md">← anterior</a>
    &nbsp;·&nbsp;
    <a href="./README.md">fase 1</a>
    &nbsp;·&nbsp;
    <a href="./03-loops.md">próximo →</a>
  </sub>
</div>