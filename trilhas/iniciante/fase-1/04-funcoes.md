# 04 — Funções

Funções são blocos de código reutilizáveis. Em vez de repetir a mesma lógica em vários lugares, você escreve uma vez e chama sempre que precisar.

---

## 🧩 O que é uma função?

Uma função é um bloco de código com um nome. Você define o que ela faz uma vez e pode executá-la quantas vezes quiser, de qualquer lugar do programa.

Sem função:
```
exibir("Olá, Isaac!")
exibir("Olá, Maria!")
exibir("Olá, João!")
```

Com função:
```
função saudar(nome) {
  exibir("Olá, " + nome + "!")
}

saudar("Isaac")
saudar("Maria")
saudar("João")
```

Muito mais limpo — e se precisar mudar a saudação, muda em um só lugar.

---

## 🏗️ Estrutura de uma função

```
função nomeDaFuncao(parametro1, parametro2) {
  // código a executar
  retornar resultado
}
```

- **nome** — como você vai chamar a função
- **parâmetros** — informações que a função recebe para trabalhar (opcional)
- **retorno** — o valor que a função devolve ao final (opcional)

---

## 📥 Parâmetros e Argumentos

Parâmetros são as variáveis que a função espera receber. Argumentos são os valores reais que você passa ao chamar.

```
// "a" e "b" são parâmetros
função somar(a, b) {
  retornar a + b
}

// 5 e 3 são argumentos
resultado = somar(5, 3)
exibir(resultado)  // 8
```

---

## 📤 Retorno

Uma função pode devolver um valor com `retornar`. Esse valor pode ser armazenado em uma variável ou usado diretamente.

```
função calcularDesconto(preco, percentual) {
  desconto = preco * (percentual / 100)
  retornar preco - desconto
}

precoFinal = calcularDesconto(100, 20)
exibir(precoFinal)  // 80
```

Funções sem `retornar` apenas executam o código interno e não devolvem nada.

---

## 🎯 Boas práticas

- **Uma função, uma responsabilidade** — cada função deve fazer uma coisa só e fazer bem
- **Nomes descritivos** — `calcularIdade()` é melhor que `calc()`
- **Funções pequenas** — se estiver muito grande, provavelmente dá para dividir
- **Evite efeitos colaterais** — prefira funções que recebem dados, processam e retornam, sem modificar coisas fora delas

---

## 🔄 Funções chamando funções

Funções podem chamar outras funções — isso é o que permite construir sistemas complexos de forma organizada.

```
função calcularArea(largura, altura) {
  retornar largura * altura
}

função calcularVolumeRetangulo(largura, altura, profundidade) {
  area = calcularArea(largura, altura)
  retornar area * profundidade
}

volume = calcularVolumeRetangulo(3, 4, 5)
exibir(volume)  // 60
```

---

## ✏️ Exercícios

1. Crie uma função `bemVindo(nome)` que exibe "Bem-vindo, [nome]!"
2. Crie uma função `ehMaiorDeIdade(idade)` que retorna verdadeiro se a idade for maior ou igual a 18
3. Crie uma função `calcularMedia(nota1, nota2, nota3)` que retorna a média das três notas
4. Crie uma função `contarPares(lista)` que recebe uma lista de números e retorna quantos são pares

---

## 🏁 Fim da Fase 1

Parabéns! Você concluiu a base da lógica de programação. Agora você sabe armazenar dados, tomar decisões, repetir ações e organizar código em funções.

Esses quatro conceitos são a fundação de **qualquer linguagem de programação** — o que muda de uma para outra é só a sintaxe.

---

<div align="center">
  <sub>
    <a href="./03-loops.md">← anterior</a>
    &nbsp;·&nbsp;
    <a href="./README.md">fase 1</a>
    &nbsp;·&nbsp;
    <a href="../fase-2/README.md">próxima fase →</a>
  </sub>
</div>