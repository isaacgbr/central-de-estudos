# 🐘 PHP — Guia de Referência Rápida

> Resumo introdutório sobre PHP — linguagem de programação para desenvolvimento web.

---

## O que é PHP?

PHP (Hypertext Preprocessor) é uma linguagem de programação voltada para o **desenvolvimento web**. Roda no servidor e é uma das linguagens mais usadas na internet — WordPress, Facebook (origem) e Laravel são exemplos conhecidos.

```
PHP roda no servidor → gera HTML → envia para o navegador
```

| | JavaScript (Node.js) | PHP |
|--|----------------------|-----|
| **Onde roda** | Servidor (Node.js) | Servidor |
| **Uso principal** | APIs e web moderno | Web tradicional e CMS |
| **Frameworks** | Express, Fastify | Laravel, Symfony |
| **Mercado** | Muito exigido | Muito presente (legado) |

---

## Instalação

**Opção 1 — XAMPP (recomendado para iniciantes)**
Instala PHP + Apache + MySQL de uma vez.
Download: https://www.apachefriends.org

**Opção 2 — PHP puro**
Download: https://www.php.net/downloads

```bash
# Verificar instalação
php --version

# Rodar um arquivo
php arquivo.php

# Rodar servidor embutido
php -S localhost:8000
```

---

## Primeiro Arquivo PHP

```php
<?php
  echo "Olá, Mundo!";
?>
```

> ⚠️ Todo código PHP fica entre `<?php` e `?>`. O arquivo tem extensão `.php`.

---

## Variáveis e Tipos

```php
<?php
// Variáveis sempre começam com $
$nome     = "João";       // string
$idade    = 25;           // int
$preco    = 19.99;        // float
$ativo    = true;         // bool
$vazio    = null;         // null

// Constante — não usa $
define("PI", 3.14159);
echo PI; // 3.14159

// Verificar tipo
var_dump($nome);  // string(4) "João"
gettype($idade);  // "integer"
?>
```

---

## Strings

```php
<?php
$nome = "João Silva";

// Concatenação com ponto
echo "Olá, " . $nome . "!";

// Interpolação com aspas duplas
echo "Olá, $nome!";

// Métodos úteis
strlen($nome);              // 10 — tamanho
strtoupper($nome);          // "JOÃO SILVA"
strtolower($nome);          // "joão silva"
str_replace("João", "Ana", $nome); // "Ana Silva"
trim("  texto  ");          // remove espaços nas bordas
explode(" ", $nome);        // ["João", "Silva"]
?>
```

---

## Operadores

```php
<?php
// Aritméticos
$a + $b;   // soma
$a - $b;   // subtração
$a * $b;   // multiplicação
$a / $b;   // divisão
$a % $b;   // resto
$a ** $b;  // potência

// Comparação
$a == $b;  // igual (só valor)
$a === $b; // idêntico (valor E tipo) ← use sempre esse
$a != $b;  // diferente
$a > $b;   // maior
$a < $b;   // menor

// Lógicos
&&   // E
||   // OU
!    // NÃO
?>
```

---

## Condicionais

```php
<?php
$idade = 18;

// if / else
if ($idade >= 18) {
    echo "Maior de idade";
} elseif ($idade >= 16) {
    echo "Pode votar";
} else {
    echo "Menor de idade";
}

// Ternário
$status = ($idade >= 18) ? "Maior" : "Menor";

// Switch
switch ($dia) {
    case "Segunda":
        echo "Início da semana";
        break;
    case "Sexta":
        echo "Quase fim de semana";
        break;
    default:
        echo "Dia comum";
}
?>
```

---

## Loops

```php
<?php
// for
for ($i = 0; $i < 5; $i++) {
    echo $i;
}

// while
$i = 0;
while ($i < 5) {
    echo $i;
    $i++;
}

// foreach — percorre arrays
$nomes = ["Ana", "João", "Maria"];
foreach ($nomes as $nome) {
    echo $nome;
}

// foreach com chave e valor
$pessoa = ["nome" => "Ana", "idade" => 25];
foreach ($pessoa as $chave => $valor) {
    echo "$chave: $valor";
}
?>
```

---

## Funções

```php
<?php
// Função básica
function somar($a, $b) {
    return $a + $b;
}

echo somar(10, 5); // 15

// Parâmetro com valor padrão
function saudar($nome, $mensagem = "Olá") {
    return "$mensagem, $nome!";
}

echo saudar("Ana");        // "Olá, Ana!"
echo saudar("Ana", "Oi"); // "Oi, Ana!"

// Tipagem (PHP 7+)
function multiplicar(int $a, int $b): int {
    return $a * $b;
}
?>
```

---

## Arrays

```php
<?php
// Array indexado
$frutas = ["maçã", "banana", "uva"];
echo $frutas[0]; // "maçã"

// Array associativo (equivalente ao objeto JS)
$pessoa = [
    "nome"  => "Ana",
    "idade" => 25,
    "ativo" => true
];
echo $pessoa["nome"]; // "Ana"

// Métodos úteis
count($frutas);                    // tamanho → 3
array_push($frutas, "pera");       // adiciona no final
array_pop($frutas);                // remove do final
in_array("banana", $frutas);      // verifica se existe → true
array_merge($frutas, ["kiwi"]);   // une dois arrays
sort($frutas);                     // ordena crescente
?>
```

---

## Classes — Orientação a Objetos

```php
<?php
class Produto {
    // Atributos
    public int    $id;
    public string $nome;
    public float  $preco;
    private bool  $ativo = true; // private — só acessa dentro da classe

    // Construtor
    public function __construct(int $id, string $nome, float $preco) {
        $this->id    = $id;
        $this->nome  = $nome;
        $this->preco = $preco;
    }

    // Método
    public function apresentar(): string {
        return "Produto: {$this->nome} — R${$this->preco}";
    }

    // Getter
    public function getAtivo(): bool {
        return $this->ativo;
    }
}

// Herança
class ProdutoPerecivel extends Produto {
    public string $validade;

    public function __construct(int $id, string $nome, float $preco, string $validade) {
        parent::__construct($id, $nome, $preco); // chama o construtor pai
        $this->validade = $validade;
    }
}

// Uso
$p = new Produto(1, "Ração Bovina", 89.90);
echo $p->apresentar(); // Produto: Ração Bovina — R$89.90
?>
```

---

## PHP e Banco de Dados — PDO

```php
<?php
// Conectar ao MySQL com PDO
$pdo = new PDO(
    "mysql:host=localhost;dbname=estoque",
    "root",       // usuário
    "senha"       // senha
);

// Consulta segura com prepared statement
$stmt = $pdo->prepare("SELECT * FROM produtos WHERE id = ?");
$stmt->execute([1]);
$produto = $stmt->fetch(PDO::FETCH_ASSOC);

echo $produto["nome"]; // nome do produto

// Inserir registro
$stmt = $pdo->prepare("INSERT INTO produtos (nome, preco) VALUES (?, ?)");
$stmt->execute(["Herbicida X", 45.90]);
?>
```

> ⚠️ Sempre use **prepared statements** — nunca coloque variáveis diretamente no SQL. Isso evita ataques de **SQL Injection**.

---

## Boas Práticas

- Sempre use `===` em vez de `==` para comparações
- Use **prepared statements** ao trabalhar com banco de dados
- Separe o código PHP do HTML — evite misturar os dois
- Use tipagem nas funções e métodos (PHP 7+)
- Nomeie variáveis em **camelCase** → `$nomeUsuario`
- Nomeie classes em **PascalCase** → `ContaBancaria`
- Nunca exiba erros em produção — configure o `php.ini`

---

> 💡 **Resumindo:** PHP tem a mesma lógica de JavaScript e Java — variáveis, condicionais, loops, funções e classes. A principal diferença é o `$` antes das variáveis e o foco em desenvolvimento web com integração nativa a bancos de dados.