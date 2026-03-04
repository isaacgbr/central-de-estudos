# 📚 Anotações Importantes – Comandos Essenciais

---

# 🟢 NODE.JS – Comandos Essenciais

## 📌 Verificar versão instalada
```bash
node -v
npm -v
```

---

## 📌 Inicializar projeto Node
```bash
npm init -y
```

Cria o arquivo `package.json`.

---

## 📌 Instalar dependência
```bash
npm install nome_do_pacote
```

Exemplo:
```bash
npm install express
```

---

## 📌 Rodar servidor
```bash
node server.js
```

---

## 📌 Instalar dependência como desenvolvimento
```bash
npm install nome_do_pacote --save-dev
```

---

## 📌 Atualizar dependências
```bash
npm update
```

---

# 🔵 GIT – Comandos Essenciais

---

## 📌 Inicializar repositório
```bash
git init
```

---

## 📌 Verificar status
```bash
git status
```

Mostra arquivos modificados.

---

## 📌 Adicionar arquivos para commit
```bash
git add .
```

Ou adicionar arquivo específico:
```bash
git add nome-do-arquivo
```

---

## 📌 Criar commit
```bash
git commit -m "mensagem do commit"
```

---

## 📌 Ver histórico de commits
```bash
git log
```

---

## 📌 Conectar repositório remoto
```bash
git remote add origin URL_DO_REPOSITORIO
```

Verificar conexão:
```bash
git remote -v
```

---

## 📌 Enviar para o GitHub
```bash
git push -u origin main
```

Depois do primeiro envio:
```bash
git push
```

---

## 📌 Atualizar repositório local
```bash
git pull
```

---

## 📌 Renomear branch principal
```bash
git branch -M main
```

---

# 🧠 Fluxo Completo para Subir Projeto

```bash
git init
git add .
git commit -m "Primeiro commit"
git remote add origin URL
git branch -M main
git push -u origin main
```

---

# 🎯 Boas Práticas

- Sempre verificar `git status` antes de commitar
- Usar mensagens claras nos commits
- Organizar pastas
- Não subir arquivos desnecessários (usar `.gitignore`)
- Testar servidor antes de subir

---

# 🚀 Mentalidade

Git controla versões.  
Node executa JavaScript no servidor.  
Frameworks aumentam produtividade.  

Programador não decora comandos — entende fluxo.
