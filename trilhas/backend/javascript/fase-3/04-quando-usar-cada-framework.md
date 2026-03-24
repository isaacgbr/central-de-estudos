# 04 — Quando Usar Cada Framework

Você conhece Express e NestJS. Agora a pergunta mais importante: qual escolher? Não existe resposta certa para todo caso — existe a resposta certa para o seu contexto.

---

## 📊 Comparativo direto

| Critério | Express | NestJS |
|----------|---------|--------|
| Curva de aprendizado | Baixa | Média/Alta |
| Estrutura de projeto | Você define | Framework define |
| TypeScript | Opcional | Nativo e esperado |
| Tamanho do projeto | Pequeno/Médio | Médio/Grande |
| Tamanho do time | 1–3 devs | 3+ devs |
| Velocidade para começar | Alta | Média |
| Escalabilidade | Exige disciplina | Arquitetura facilita |
| Ecossistema | Enorme | Grande e crescendo |
| Mercado | Muito alto | Alto e crescendo |

---

## ✅ Escolha Express quando

**O projeto é pequeno ou um MVP**
Você precisa validar uma ideia rapidamente. Express sai do zero para uma API funcional em minutos — sem cerimônia, sem configuração.

**O time é pequeno e todos se conhecem**
Com 1 a 3 devs que se comunicam bem, a falta de estrutura rígida não vira problema. Você consegue manter consistência com boas práticas próprias.

**Você está aprendendo**
Express é mais transparente — você vê o que está fazendo. NestJS esconde muita coisa que, sem entender, vira magia negra.

**O projeto é uma API simples e pontual**
Um webhook, uma integração com terceiros, um serviço interno de uso limitado.

```
✅ Express: startup validando MVP, API de 5–10 endpoints,
   projeto solo ou dupla, script com interface HTTP
```

---

## ✅ Escolha NestJS quando

**O projeto vai crescer e ser mantido por muito tempo**
A arquitetura modular do NestJS facilita adicionar features sem quebrar o que já existe.

**O time tem 3 ou mais devs**
Convenções claras evitam conflitos de estilo e facilita o onboarding de novos membros.

**TypeScript é prioridade**
NestJS foi construído para TypeScript — a integração é perfeita. Com Express, TypeScript funciona mas requer mais configuração.

**A aplicação é complexa por natureza**
Microsserviços, WebSockets, filas de mensagens, múltiplos bancos de dados — NestJS tem suporte nativo para tudo isso.

```
✅ NestJS: sistema corporativo, SaaS em crescimento,
   time com 4+ devs, projeto com roadmap de 2+ anos
```

---

## 🔄 Posso migrar de Express para NestJS depois?

Sim — e é comum. Muitos projetos começam com Express e migram quando crescem. O NestJS inclusive permite usar Express como engine por baixo, o que facilita a transição gradual.

Sinais de que pode ser hora de migrar:
- O arquivo de rotas tem mais de 200 linhas
- Diferentes devs organizam o código de formas incompatíveis
- Fica difícil saber onde colocar uma nova feature
- Onboarding de novos devs leva mais de uma semana

---

## 💡 Regra prática

```
Projeto novo e pequeno?          → Express
Projeto novo e vai escalar?      → NestJS
Projeto existente em Express?    → Refatore bem antes de migrar
Aprendendo backend JS?           → Express primeiro, NestJS depois
```

> Dominar Express bem é o melhor caminho para entender NestJS — o framework resolve problemas que você só vai apreciar depois de ter sentido a dor de escalar um projeto Express sem estrutura.

---

## 🏁 Fim da Fase 3

Você agora conhece os dois frameworks mais relevantes do ecossistema Node.js — e mais importante, sabe quando usar cada um. Isso é o tipo de conhecimento que diferencia um desenvolvedor que apenas usa ferramentas de um que entende o que está fazendo.

Na próxima fase você vai fechar o ciclo — autenticação JWT, integração com banco de dados, variáveis de ambiente e as boas práticas que tornam uma API segura e pronta para produção.

---

## ✏️ Exercícios

1. Liste 3 projetos reais (pode ser fictícios) onde você escolheria Express e justifique
2. Liste 3 projetos reais onde você escolheria NestJS e justifique
3. Um colega quer usar NestJS para criar um webhook simples que recebe pagamentos e salva em um arquivo. Você concorda? O que diria a ele?
4. Qual foi o maior aprendizado dessa fase para você?

---

<div align="center">
  <sub>
    <a href="./03-nestjs.md">← anterior</a>
    &nbsp;·&nbsp;
    <a href="./README.md">fase 3</a>
    &nbsp;·&nbsp;
    <a href="../fase-4/README.md">próxima fase →</a>
  </sub>
</div>