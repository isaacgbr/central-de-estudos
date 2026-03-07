# ☕ Java — Parte 2: Orientação a Objetos

> Resumo rápido sobre classes, objetos, encapsulamento, herança e polimorfismo.

---

## Os 4 Pilares da OOP

| Pilar | Significado |
|-------|-------------|
| **Encapsulamento** | Esconder detalhes internos |
| **Herança** | Reaproveitar código de outra classe |
| **Polimorfismo** | Mesmo método, comportamentos diferentes |
| **Abstração** | Mostrar só o que importa |

---

## Classes e Objetos

```java
// Classe = molde
public class Pessoa {
    String nome;
    int    idade;

    public void apresentar() {
        System.out.println("Olá, sou " + nome);
    }
}

// Objeto = instância da classe
Pessoa p1 = new Pessoa();
p1.nome  = "Ana";
p1.idade = 25;
p1.apresentar();
```

---

## Construtor

```java
public class Pessoa {
    String nome;
    int    idade;

    // Construtor
    public Pessoa(String nome, int idade) {
        this.nome  = nome;  // this. = atributo da classe
        this.idade = idade;
    }
}

Pessoa p1 = new Pessoa("Ana", 25);
```

---

## Encapsulamento

```java
public class Conta {
    private double saldo; // privado

    public double getSaldo() {       // getter
        return saldo;
    }

    public void depositar(double valor) { // setter com validação
        if (valor > 0) saldo += valor;
    }
}
```

---

## Herança

```java
public class Animal {
    String nome;
    public void respirar() {
        System.out.println(nome + " respirando.");
    }
}

public class Cachorro extends Animal { // herda de Animal
    public void latir() {
        System.out.println(nome + " latindo.");
    }
}

Cachorro rex = new Cachorro();
rex.respirar(); // herdado
rex.latir();    // próprio
```

---

## Polimorfismo

```java
public class Animal {
    public void emitirSom() {
        System.out.println("Som genérico");
    }
}

public class Cachorro extends Animal {
    @Override
    public void emitirSom() {
        System.out.println("Au au!");
    }
}
```

---

## Classe Abstrata vs Interface

```java
// Classe abstrata — modelo incompleto
public abstract class Forma {
    public abstract double calcularArea();
}

// Interface — contrato de comportamento
public interface Voavel {
    void voar();
}

public class Passaro implements Voavel {
    @Override
    public void voar() {
        System.out.println("Voando!");
    }
}
```