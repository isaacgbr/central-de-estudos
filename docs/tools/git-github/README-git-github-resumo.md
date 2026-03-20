# 🟠 Git & GitHub

> Resumo rápido sobre controle de versão, comandos essenciais e fluxo profissional em equipe.

---

## Git vs GitHub

| | Git | GitHub |
|--|-----|--------|
| **O que é** | Ferramenta instalada no PC | Plataforma online |
| **Para que serve** | Controlar versões localmente | Hospedar e compartilhar código |
| **Precisa de internet** | Não | Sim |

---

## Configuração Inicial

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

---

## Os 3 Estados do Git

```
Editar arquivo → git add . → git commit -m "mensagem"
  (Working)       (Staging)       (Repositório)
```

---

## Comandos Essenciais

| Comando | Para que serve |
|---------|---------------|
| `git init` | Inicia um repositório |
| `git clone <url>` | Clona repositório remoto |
| `git status` | Ver arquivos modificados |
| `git add .` | Preparar todos os arquivos |
| `git commit -m ""` | Salvar alterações |
| `git push origin branch` | Enviar para o remoto |
| `git pull origin branch` | Baixar atualizações |
| `git log --oneline` | Ver histórico resumido |

---

## Branches

```bash
git checkout -b feature-login  # criar e entrar na branch
git branch                     # listar branches
git checkout main              # trocar de branch
git merge feature-login        # unir branch na main
git branch -d feature-login    # deletar branch
```

> Nunca desenvolva direto na `main` — sempre crie uma branch para cada funcionalidade.

---

## Boas Práticas de Commit

```bash
# ❌ Ruim
git commit -m "ajuste"
git commit -m "correção"

# ✅ Bom — padrão Conventional Commits
git commit -m "feat: adiciona login com JWT"
git commit -m "fix: corrige validação de email"
git commit -m "docs: atualiza README"
git commit -m "refactor: reorganiza estrutura de pastas"
```

---

## Conectando ao GitHub

```bash
git remote add origin https://github.com/usuario/repositorio.git
git push -u origin main
```

---

## Fluxo Profissional em Equipe

```
1. git pull origin main           → atualiza local
2. git checkout -b feature-nome   → cria branch
3. desenvolve o código
4. git add . && git commit -m ""  → salva
5. git push origin feature-nome   → envia ao GitHub
6. Abre Pull Request no GitHub
7. Equipe revisa e aprova
8. Merge na main realizado
```

---

## Pull Request — Passo a Passo

1. Faça o `push` da sua branch para o GitHub
2. Acesse o repositório no GitHub
3. Clique em **"Compare & pull request"**
4. Defina: **Base → main** | **Compare → sua branch**
5. Escreva título e descrição do que foi feito
6. Clique em **"Create pull request"**

---

## Sincronizando sua Branch com a Main

```bash
git checkout main
git pull origin main
git checkout feature-nome
git merge main
git push origin feature-nome
```

> Sempre sincronize antes de abrir um PR — evita conflitos desnecessários.