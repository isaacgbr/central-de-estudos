# 🅰️ Angular — Guia de Referência Rápida

> Resumo introdutório sobre Angular — framework TypeScript para criação de interfaces.

---

## O que é Angular?

Angular é um **framework completo** criado pelo Google para construir aplicações web. Diferente do React (que é uma biblioteca), Angular já vem com tudo integrado — roteamento, formulários, requisições HTTP e muito mais.

```
TypeScript + Componentes + Módulos = Angular
```

| | React | Angular |
|--|-------|---------|
| **Tipo** | Biblioteca | Framework completo |
| **Linguagem** | JavaScript/JSX | TypeScript |
| **Curva de aprendizado** | Baixa | Média/Alta |
| **Criado por** | Meta (Facebook) | Google |
| **Uso no mercado** | Startups e web | Empresas e sistemas |

---

## Instalação e Configuração

```bash
# Instalar o Angular CLI globalmente
npm install -g @angular/cli

# Verificar instalação
ng version

# Criar novo projeto
ng new meu-projeto

# Entrar na pasta
cd meu-projeto

# Rodar o projeto
ng serve
```

> ✅ Acesse em: http://localhost:4200

---

## Estrutura de Pastas

```
meu-projeto/
├── src/
│   ├── app/
│   │   ├── components/      ← componentes reutilizáveis
│   │   ├── pages/           ← páginas da aplicação
│   │   ├── services/        ← lógica e consumo de API
│   │   ├── models/          ← interfaces TypeScript
│   │   ├── app.component.ts ← componente raiz
│   │   ├── app.module.ts    ← módulo principal
│   │   └── app-routing.module.ts ← rotas
│   ├── assets/              ← imagens e arquivos
│   └── index.html
└── package.json
```

---

## Componente — O Básico

Todo componente Angular tem 3 arquivos:

```
produto.component.ts    ← lógica
produto.component.html  ← template
produto.component.css   ← estilo
```

```typescript
// produto.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-produto',        // tag usada no HTML
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  nome: string  = 'Herbicida X';
  preco: number = 45.90;
  ativo: boolean = true;

  apresentar(): string {
    return `${this.nome} — R$${this.preco}`;
  }
}
```

```html
<!-- produto.component.html -->
<div>
  <h2>{{ nome }}</h2>
  <p>Preço: R${{ preco }}</p>
  <p>{{ apresentar() }}</p>
</div>
```

> `{{ }}` é a interpolação do Angular — exibe valores do componente no HTML.

---

## Data Binding — Ligando Dados ao HTML

```html
<!-- Interpolação — exibe valor -->
<p>{{ nome }}</p>

<!-- Property Binding — passa valor para propriedade -->
<input [value]="nome" />
<button [disabled]="!ativo">Salvar</button>

<!-- Event Binding — escuta evento -->
<button (click)="salvar()">Salvar</button>

<!-- Two-way Binding — sincroniza input com variável -->
<input [(ngModel)]="nome" />
<p>{{ nome }}</p>
```

---

## Diretivas Essenciais

```html
<!-- *ngIf — renderiza se condição for verdadeira -->
<p *ngIf="ativo">Produto ativo</p>
<p *ngIf="!ativo">Produto inativo</p>

<!-- *ngFor — percorre uma lista -->
<ul>
  <li *ngFor="let produto of produtos">
    {{ produto.nome }} — R${{ produto.preco }}
  </li>
</ul>

<!-- [ngClass] — aplica classe CSS condicionalmente -->
<p [ngClass]="{ 'ativo': ativo, 'inativo': !ativo }">
  Status
</p>
```

---

## Interface — Tipando os Dados

```typescript
// models/produto.model.ts
export interface Produto {
  id:         number;
  nome:       string;
  preco:      number;
  quantidade: number;
  ativo?:     boolean; // ? = opcional
}
```

```typescript
// usando a interface no componente
import { Produto } from '../models/produto.model';

export class ProdutoComponent {
  produtos: Produto[] = [];
}
```

---

## Service — Consumindo API

```typescript
// services/produto.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root' // disponível em toda a aplicação
})
export class ProdutoService {
  private url = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
  }

  buscarPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.url}/${id}`);
  }

  criar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.url, produto);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
```

---

## Usando o Service no Componente

```typescript
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html'
})
export class ProdutoComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  // Executado quando o componente é carregado
  ngOnInit(): void {
    this.produtoService.listarTodos().subscribe((dados) => {
      this.produtos = dados;
    });
  }
}
```

---

## Rotas — Navegação entre Páginas

```typescript
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { HomeComponent }    from './pages/home/home.component';

const routes: Routes = [
  { path: '',         component: HomeComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: '**',       redirectTo: '' } // rota não encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

```html
<!-- Navegação no HTML -->
<nav>
  <a routerLink="/">Home</a>
  <a routerLink="/produtos">Produtos</a>
</nav>

<!-- Onde as páginas são renderizadas -->
<router-outlet></router-outlet>
```

---

## Comandos CLI Essenciais

```bash
# Gerar componente
ng generate component components/produto
ng g c components/produto  # forma curta

# Gerar service
ng generate service services/produto
ng g s services/produto

# Gerar interface
ng generate interface models/produto
ng g i models/produto

# Build para produção
ng build --prod
```

---

## Comparação — React vs Angular

| | React | Angular |
|--|-------|---------|
| **Componente** | Função JSX | Classe com `@Component` |
| **Estado** | `useState` | Variável na classe |
| **Efeito** | `useEffect` | `ngOnInit` |
| **HTTP** | `fetch` / axios | `HttpClient` |
| **Rotas** | React Router | `RouterModule` |
| **Loop** | `.map()` | `*ngFor` |
| **Condicional** | `&&` / ternário | `*ngIf` |

---

## Boas Práticas

- Um componente por arquivo — responsabilidade única
- Use **interfaces** para tipar todos os dados
- Mantenha a lógica nos **Services** — componentes só exibem
- Use o **Angular CLI** para gerar arquivos — mantém o padrão
- Use `OnInit` para buscar dados ao carregar o componente
- Nomeie em **kebab-case** os seletores → `app-produto`

---

> 💡 **Resumindo:** Angular é mais completo e estruturado que o React — exige mais configuração mas entrega mais padronização. Se você já conhece TypeScript e o padrão Service/Controller do Node.js, vai reconhecer a estrutura rapidamente.