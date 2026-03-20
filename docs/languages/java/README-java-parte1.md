# ☕ Java — Parte 1: Fundamentos e Sintaxe Básica

> Resumo rápido sobre introdução, tipos de dados, operadores, estruturas de controle e métodos.

---

## O que é Java?

- Linguagem orientada a objetos criada em 1995
- Multiplataforma — roda em qualquer sistema operacional
- Muito usada em backend, Android e sistemas bancários

---

## Configuração

```bash
# Verificar instalação
java --version
javac --version
```

IDE recomendada: **IntelliJ IDEA Community** (gratuito)

---

## Primeiro Programa

```java
public class OlaMundo {
    public static void main(String[] args) {
        System.out.println("Olá, Mundo!");
    }
}
```

- `public class` → todo código fica dentro de uma classe
- `main()` → ponto de entrada do programa
- `System.out.println()` → exibe no console

---

## Tipos de Dados

```java
int     idade  = 25;           // inteiro
double  preco  = 19.99;        // decimal
boolean ativo  = true;         // verdadeiro/falso
char    letra  = 'A';          // um caractere
String  nome   = "João";       // texto

final double PI = 3.14159;     // constante
```

---

## Operadores

```java
// Aritméticos
a + b  // soma
a - b  // subtração
a * b  // multiplicação
a / b  // divisão
a % b  // resto

// Comparação
a == b  // igual
a != b  // diferente
a > b   // maior
a < b   // menor

// Lógicos
&&  // E
||  // OU
!   // NÃO
```

---

## if / else

```java
if (idade >= 18) {
    System.out.println("Maior de idade");
} else {
    System.out.println("Menor de idade");
}

// Ternário
String status = (idade >= 18) ? "Maior" : "Menor";
```

---

## Estruturas de Repetição

```java
// for
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// while
int i = 0;
while (i < 5) { i++; }

// for-each
for (String nome : nomes) {
    System.out.println(nome);
}
```

---

## Métodos

```java
public static int somar(int a, int b) {
    return a + b;
}

public static void saudar(String nome) {
    System.out.println("Olá, " + nome);
}
```