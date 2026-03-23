# 01 — Variáveis e Tipos

Toda informação que um programa usa precisa ser armazenada em algum lugar. É para isso que existem as variáveis.

---

## 📦 O que é uma variável?

Uma variável é um espaço na memória do computador onde você guarda um valor para usar depois. Pense como uma caixinha com um nome — você coloca algo dentro e acessa pelo nome quando precisar.

```
nome = "Isaac"
idade = 22
```

O programa agora sabe que `nome` vale `"Isaac"` e `idade` vale `22`. Você pode usar esses valores em qualquer parte do código.

---

## 🏷️ Tipos de dados

Nem toda informação é igual. Um número é diferente de um texto, que é diferente de um verdadeiro/falso. Os tipos de dados definem o que uma variável pode guardar.

### Texto (String)
Qualquer sequência de caracteres entre aspas.
```
nome = "Isaac"
cidade = "Teresina"
mensagem = "Olá, mundo!"
```

### Número Inteiro (Integer)
Números sem casas decimais.
```
idade = 22
ano = 2025
quantidade = 100
```

### Número Decimal (Float)
Números com casas decimais.
```
altura = 1.75
preco = 29.90
temperatura = 36.5
```

### Verdadeiro ou Falso (Boolean)
Só dois valores possíveis — verdadeiro ou falso.
```
esta_logado = true
tem_permissao = false
```

---

## 📝 Regras para nomear variáveis

- Use nomes descritivos — `idade` é melhor que `x`
- Sem espaços — use underline `_` ou camelCase `nomeCompleto`
- Não comece com número — `1nome` é inválido, `nome1` é válido
- Sem caracteres especiais — nada de `ç`, `ã`, `@`, `#`

✅ Bons exemplos:
```
nome_completo = "Isaac"
idadeUsuario = 22
precoProduto = 49.90
```

❌ Exemplos ruins:
```
x = "Isaac"
1nome = "Isaac"
nome completo = "Isaac"
```

---

## 💡 Constantes

Às vezes você tem um valor que não deve mudar — como o valor de PI ou o limite máximo de tentativas de login. Para isso existem as constantes.

```
PI = 3.14159
LIMITE_TENTATIVAS = 3
VERSAO_APP = "1.0.0"
```

Por convenção, constantes são escritas em MAIÚSCULO.

---

## ✏️ Exercícios

1. Crie variáveis para armazenar seu nome, sua idade e sua cidade
2. Crie uma variável booleana chamada `estudando` com o valor verdadeiro
3. Qual tipo de dado você usaria para armazenar o preço de um produto? E para armazenar se um usuário está ativo ou não?
4. Corrija os erros nas variáveis abaixo:
   ```
   1usuario = "João"
   nome completo = "Maria Silva"
   ```

---

<div align="center">
  <sub>
    <a href="./README.md">← voltar para Fase 1</a>
    &nbsp;·&nbsp;
    <a href="./02-condicionais.md">próximo →</a>
  </sub>
</div>