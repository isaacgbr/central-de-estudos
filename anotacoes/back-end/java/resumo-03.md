# ☕ Java — Parte 3: Recursos Essenciais

> Resumo rápido sobre Arrays, ArrayList, HashMap, Exceções, Scanner e Boas Práticas.

---

## Arrays

```java
int[] numeros = {10, 20, 30, 40, 50};

System.out.println(numeros[0]); // 10 — índice começa no 0

for (int n : numeros) {
    System.out.println(n);
}
```

> ⚠️ Tamanho fixo — não é possível adicionar ou remover após criado.

---

## ArrayList

```java
import java.util.ArrayList;

ArrayList<String> nomes = new ArrayList<>();

nomes.add("Ana");        // adicionar
nomes.get(0);            // acessar → "Ana"
nomes.remove("Ana");     // remover
nomes.size();            // tamanho
```

> ✅ Tamanho dinâmico — use quando precisar adicionar ou remover elementos.

---

## HashMap

```java
import java.util.HashMap;

HashMap<String, Integer> idades = new HashMap<>();

idades.put("Ana", 25);          // adicionar
idades.get("Ana");              // acessar → 25
idades.containsKey("Ana");      // verificar → true

for (String nome : idades.keySet()) {
    System.out.println(nome + " → " + idades.get(nome));
}
```

---

## Tratamento de Exceções

```java
try {
    int resultado = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Erro: " + e.getMessage());
} finally {
    System.out.println("Sempre executa.");
}
```

| Exceção | Quando acontece |
|---------|----------------|
| `NullPointerException` | Usar objeto null |
| `ArrayIndexOutOfBoundsException` | Índice inexistente |
| `ArithmeticException` | Divisão por zero |
| `NumberFormatException` | Converter texto inválido |

---

## Scanner — Leitura de Dados

```java
import java.util.Scanner;

Scanner scanner = new Scanner(System.in);

String nome  = scanner.nextLine();   // texto
int    idade = scanner.nextInt();    // inteiro
double preco = scanner.nextDouble(); // decimal

scanner.close(); // sempre feche
```

---

## Modificadores de Acesso

| Modificador | Mesma Classe | Mesmo Pacote | Fora do Pacote |
|-------------|-------------|--------------|----------------|
| `public` | ✅ | ✅ | ✅ |
| `protected` | ✅ | ✅ | Só subclasses |
| (padrão) | ✅ | ✅ | ❌ |
| `private` | ✅ | ❌ | ❌ |

---

## Boas Práticas

```java
// Nomenclatura
class ContaBancaria { }        // PascalCase — classes
void calcularSaldo() { }       // camelCase — métodos
final double TAXA_JUROS = 0.1; // UPPER_CASE — constantes
```

- Atributos sempre `private` + getters/setters
- Uma responsabilidade por classe
- Nunca deixe um `catch` vazio
- Se copiou e colou, crie um método

---

## Próximos Passos

Após dominar o essencial, explore:
- **Spring Boot** → framework para backend com Java
- **JDBC / JPA** → conexão com banco de dados
- **Maven / Gradle** → gerenciadores de dependências