# 02 — Commits e Branches

Agora que você entende que o Git guarda o histórico do projeto, vamos aprender **como** ele faz isso na prática.

Dois conceitos são essenciais:

* **Commit** → salvar uma versão do projeto
* **Branch** → criar uma ramificação para desenvolver algo novo sem afetar a versão principal

---

## 💾 O que é um Commit?

Um commit é como **salvar o progresso** do seu projeto.

Sempre que você termina uma alteração importante, pode registrar aquele momento.

É como dizer:

> “Guarde exatamente assim.”

Cada commit armazena:

* As alterações feitas
* Uma mensagem explicando o que mudou
* Data e hora da mudança

---

## 🧠 Exemplo prático de commits

Imagine um sistema de uma loja.

### Commit 1

Adiciona cadastro de produtos

### Commit 2

Adiciona cálculo de frete

### Commit 3

Corrige erro no valor total da compra

Se algo der errado depois, você pode voltar para qualquer ponto seguro.

---

## 🌿 O que é uma Branch?

Branch significa **ramo**.

É uma cópia do seu projeto usada para desenvolver algo novo com segurança.

Você pode testar ideias sem mexer na versão principal.

A versão principal é chamada de:

**main** → onde fica o sistema estável

---

## 🧠 Exemplo prático de branches

Imagine que seu sistema já funciona.

Você quer adicionar pagamento por cartão.

Em vez de mexer direto na versão principal:

1. Cria uma branch chamada:

```
pagamento-cartao
```

2. Desenvolve a nova funcionalidade nela
3. Testa tudo com segurança
4. Só depois junta com a versão principal

Se algo der errado, o sistema principal continua funcionando.

---

## 🎯 Por que branches são importantes?

Permitem:

* Trabalhar em equipe sem conflitos
* Testar funcionalidades novas com segurança
* Corrigir erros sem afetar usuários
* Desenvolver várias partes do sistema ao mesmo tempo

Branches são essenciais em projetos profissionais.

---

## ✏️ Exercícios

1. Explique a diferença entre commit e branch.
2. Por que é importante escrever mensagens claras nos commits?
3. Imagine que três programadores trabalham no mesmo projeto. Como branches ajudam?
4. Você prefere testar direto no sistema principal ou em uma cópia? Por quê?

---

<div align="center">
  <sub>
    <a href="./01-introducao-git.md">← anterior</a>
    &nbsp;·&nbsp;
    <a href="./README.md">fase 3</a>
    &nbsp;·&nbsp;
    <a href="./03-github-e-remote.md">próximo →</a>
  </sub>
</div>
