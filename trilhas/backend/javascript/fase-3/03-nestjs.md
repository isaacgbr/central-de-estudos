# 03 — NestJS

NestJS é um framework Node.js progressivo e estruturado. Ao contrário do Express, ele vem com uma arquitetura definida — módulos, controllers e services — inspirada no Angular e fortemente baseada em TypeScript.

---

## 🤔 Por que NestJS existe?

Express é excelente, mas deixa tudo em aberto. Em projetos grandes com times maiores, a falta de estrutura vira problema — cada desenvolvedor organiza o código de um jeito diferente.

NestJS resolve isso trazendo **convenções claras**:

| | Express | NestJS |
|--|---------|--------|
| Estrutura | Você decide | Definida pelo framework |
| TypeScript | Opcional | Nativo |
| Injeção de dependência | Manual | Automática |
| Curva de aprendizado | Baixa | Média/Alta |
| Escalabilidade | Você cuida | Arquitetura facilita |

---

## 🚀 Instalação

```bash
npm install -g @nestjs/cli
nest new minha-api
cd minha-api
npm run start:dev
```

O CLI já cria a estrutura base:
```
src/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── main.ts
```

---

## 🏗️ Arquitetura — Módulos, Controllers e Services

### Module — agrupa tudo relacionado a um recurso
```typescript
// usuarios/usuarios.module.ts
import { Module } from '@nestjs/common'
import { UsuariosController } from './usuarios.controller'
import { UsuariosService } from './usuarios.service'

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}
```

### Controller — recebe as requisições HTTP
```typescript
// usuarios/usuarios.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common'
import { UsuariosService } from './usuarios.service'

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  listar() {
    return this.usuariosService.listarTodos()
  }

  @Get(':id')
  buscar(@Param('id') id: string) {
    return this.usuariosService.buscarPorId(+id)
  }

  @Post()
  criar(@Body() dados: { nome: string; email: string }) {
    return this.usuariosService.criar(dados)
  }

  @Delete(':id')
  remover(@Param('id') id: string) {
    return this.usuariosService.remover(+id)
  }
}
```

### Service — contém a lógica de negócio
```typescript
// usuarios/usuarios.service.ts
import { Injectable, NotFoundException } from '@nestjs/common'

@Injectable()
export class UsuariosService {
  private usuarios = [
    { id: 1, nome: 'Isaac', email: 'isaac@email.com' },
    { id: 2, nome: 'Maria', email: 'maria@email.com' },
  ]

  listarTodos() {
    return this.usuarios
  }

  buscarPorId(id: number) {
    const usuario = this.usuarios.find(u => u.id === id)
    if (!usuario) throw new NotFoundException('Usuário não encontrado')
    return usuario
  }

  criar(dados: { nome: string; email: string }) {
    const novoUsuario = { id: this.usuarios.length + 1, ...dados }
    this.usuarios.push(novoUsuario)
    return novoUsuario
  }

  remover(id: number) {
    const index = this.usuarios.findIndex(u => u.id === id)
    if (index === -1) throw new NotFoundException('Usuário não encontrado')
    this.usuarios.splice(index, 1)
    return { mensagem: 'Removido com sucesso' }
  }
}
```

---

## 💉 Injeção de Dependência

No NestJS você não instancia serviços manualmente — o framework cuida disso.

```typescript
// ❌ forma manual (não use no NestJS)
const service = new UsuariosService()

// ✅ injeção de dependência — o NestJS injeta automaticamente
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}
}
```

Isso facilita testes, pois você pode substituir o serviço real por um mock facilmente.

---

## 🛡️ Guards — proteção de rotas

Equivalente ao middleware de autenticação do Express, mas com uma estrutura mais formal.

```typescript
// guards/auth.guard.ts
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest()
    const token = request.headers['authorization']

    if (!token) throw new UnauthorizedException('Token não fornecido')
    return true
  }
}
```

```typescript
// aplicando na rota
import { UseGuards } from '@nestjs/common'

@Get('perfil')
@UseGuards(AuthGuard)
perfil() {
  return { mensagem: 'Rota protegida' }
}
```

---

## ✏️ Exercícios

1. Crie um módulo `ProdutosModule` com controller e service — implemente o CRUD completo de produtos
2. Adicione um `AuthGuard` que verifica se o header `Authorization` está presente e bloqueia com 401 se não estiver
3. O que é injeção de dependência e qual o benefício dela em relação a instanciar serviços manualmente?
4. Quando um projeto começa com Express e cresce, quais sinais indicam que pode ser hora de migrar para NestJS?

---

<div align="center">
  <sub>
    <a href="./02-rotas-e-middlewares.md">← anterior</a>
    &nbsp;·&nbsp;
    <a href="./README.md">fase 3</a>
    &nbsp;·&nbsp;
    <a href="./04-quando-usar-cada-framework.md">próximo →</a>
  </sub>
</div>