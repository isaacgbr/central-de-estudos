# 📘 Aula 2 – Backend Frameworks  
## Node Puro vs Express

---

## 🎯 Objetivo

Criar uma API HTTP:

- 🔵 Sem framework (Node Puro)
- 🟢 Com framework (Express)

E entender:

- Como um servidor HTTP funciona
- O que acontece por trás das rotas
- Onde o framework agrega valor
- Diferença entre base técnica e produtividade

---

# 🧠 Conceitos Fundamentais

## 🔹 Servidor HTTP
Programa que:
1. Escuta uma porta
2. Recebe requisições
3. Envia respostas

---

## 🔹 Rota
Caminho acessado pelo cliente.

Exemplo:
http://localhost:3000/status

`/status` é a rota.

---

## 🔹 JSON
Formato padrão de troca de dados entre sistemas.

Exemplo:
```json
{
  "status": "ok"
}
```

---

# 🔵 Node Puro (Sem Framework)

## 📌 Estrutura Mental

Para criar um servidor em Node puro é necessário:

1. Importar módulo `http`
2. Criar servidor
3. Tratar manualmente as rotas
4. Configurar headers
5. Converter objeto para JSON
6. Definir porta

---

## 📌 O que foi aprendido

✔ Funcionamento interno do servidor  
✔ Uso de `req` (requisição)  
✔ Uso de `res` (resposta)  
✔ Verificação manual de URL  
✔ Manipulação de string (`split`, `startsWith`)  
✔ Uso de `JSON.stringify()`  
✔ Definição manual de status e headers  

---

## 📌 Rotas criadas

### /status
```json
{
  "status": "ok",
  "framework": "node_puro"
}
```

### /time
```json
{
  "time": "data_atual"
}
```

### /user/{name}
```json
{
  "user": "nome"
}
```

⚠ No Node puro, o parâmetro precisa ser extraído manualmente da URL.

---

# 🟢 Express (Com Framework)

## 📌 O que o Express faz

Abstrai:

- Criação do servidor
- Definição de rotas
- Conversão automática para JSON
- Tratamento de parâmetros dinâmicos
- Organização do código

---

## 📌 O que mudou na prática

Node puro:
- Verificação manual de URL
- Uso de `JSON.stringify`
- Manipulação manual de string

Express:
- `app.get('/rota')`
- `res.json()`
- `req.params`

---

# ⚖️ Comparação Final

| Critério        | Node Puro      | Express        |
|---------------|---------------|---------------|
| Complexidade  | Maior        | Menor         |
| Código repetido | Alto        | Baixo         |
| Organização   | Manual        | Estruturada   |
| Escalabilidade | Difícil      | Fácil         |
| Aprendizado técnico | Alto  | Médio         |
| Produtividade | Baixa         | Alta          |

---

# 🧠 Reflexão Técnica

Node Puro desenvolve:
- Entendimento do HTTP
- Controle manual
- Raciocínio lógico

Express desenvolve:
- Produtividade
- Organização
- Escalabilidade
- Estrutura profissional

---

# 🎓 Conclusão

- Aprender Node puro fortalece base técnica.
- Frameworks aceleram desenvolvimento.
- Programadores não decoram código.
- O importante é entender fluxo e lógica.

Autocomplete é ferramenta, não dependência.
