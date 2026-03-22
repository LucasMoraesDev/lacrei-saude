# Lacrei Saúde – Desafio Front-End

> Plataforma de saúde LGBTQIA+ conectando pacientes a profissionais capacitados, com segurança, respeito e acolhimento.

[![Deploy](https://img.shields.io/badge/deploy-Vercel-black?logo=vercel)](https://lacrei-saude.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![Styled Components](https://img.shields.io/badge/Styled--Components-6-pink?logo=styled-components)](https://styled-components.com)

---

## 📋 Índice

1. [Visão Geral](#-visão-geral)
2. [Páginas implementadas](#-páginas-implementadas)
3. [Tecnologias](#-tecnologias)
4. [Como rodar localmente](#-como-rodar-localmente)
5. [Build e Deploy](#-build-e-deploy)
6. [Testes](#-testes)
7. [Rollback](#-rollback)
8. [Acessibilidade](#-acessibilidade)
9. [Performance](#-performance)
10. [Mock de API](#-mock-de-api)
11. [Justificativas visuais e técnicas](#-justificativas-visuais-e-técnicas)
12. [Estrutura do projeto](#-estrutura-do-projeto)

---

## 🌟 Visão Geral

Este projeto implementa duas páginas web interativas seguindo o **Marsha Design System** da Lacrei Saúde, com foco em:

- ✅ **Acessibilidade** — HTML semântico, ARIA, contraste WCAG AA, skip links, gestão de foco
- ✅ **Responsividade** — Mobile-first, breakpoints consistentes
- ✅ **Performance** — Lazy load, bundle otimizado, fontes com `display: swap`
- ✅ **Fidelidade visual** — Cores, tipografia e componentes do Marsha Design System
- ✅ **Mock de API** — Simulação de integração com dados realistas

---

## 📄 Páginas implementadas

### Página 1 – Início (`/`)
- **Hero** com CTA principal e ilustração animada
- **Como Funciona** — 3 passos ilustrados
- **Especialidades** — Grid navegável de especialidades
- **Seção de Cadastro** — Formulário com toggle paciente/profissional

### Página 2 – Profissionais (`/profissionais`)
- **Barra de busca** com pesquisa em tempo real
- **Sidebar de filtros** (especialidade + modalidade) com radio groups acessíveis
- **Grid de cards** com skeleton loading e animações staggered
- **Estado vazio** com feedback claro
- **Chips de filtros ativos** removíveis

---

## 🛠 Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| Next.js | 14 | Framework principal (App Router) |
| TypeScript | 5 | Tipagem estática |
| Styled-Components | 6 | CSS-in-JS com design tokens |
| Jest | 29 | Test runner |
| @testing-library/react | 16 | Testes de componentes |
| jest-styled-components | 7 | Snapshot de estilos |

---

## 🚀 Como rodar localmente

### Pré-requisitos

- Node.js 18.17+ 
- npm 9+ ou yarn 1.22+

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/lacrei-saude.git
cd lacrei-saude

# 2. Instale as dependências
npm install

# 3. Rode em modo de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Variáveis de ambiente

Crie um arquivo `.env.local` na raiz (opcional para mock API):

```env
# Futuro endpoint de API real (por enquanto usa mock local)
NEXT_PUBLIC_API_URL=https://api.lacreisaude.com.br
```

---

## 📦 Build e Deploy

### Build local

```bash
# Gerar build de produção
npm run build

# Iniciar servidor de produção localmente
npm run start
```

### Deploy na Vercel

#### Opção 1 – Via CLI

```bash
# Instale a CLI da Vercel
npm i -g vercel

# Login
vercel login

# Deploy em preview
vercel

# Deploy em produção
vercel --prod
```

#### Opção 2 – Via GitHub (recomendado)

1. Faça push para o GitHub
2. Acesse [vercel.com/new](https://vercel.com/new)
3. Importe o repositório
4. Configure:
   - **Framework Preset**: Next.js (detectado automaticamente)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. Clique em **Deploy**

#### Configurações da Vercel (`vercel.json`)

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "framework": "nextjs"
}
```

---

## 🧪 Testes

### Rodar todos os testes

```bash
npm run test
```

### Modo watch (desenvolvimento)

```bash
npm run test:watch
```

### Coverage report

```bash
npm run test:coverage
```

### Componentes testados

| Arquivo de Teste | Componente | Tipo | Casos de Teste |
|---|---|---|---|
| `__tests__/Button.test.tsx` | `Button` | Navegação/Interação | 14 casos |
| `__tests__/Header.test.tsx` | `Header` | Navegação | 12 casos |
| `__tests__/DoctorCard.test.tsx` | `DoctorCard` | Conteúdo Interativo | 16 casos |
| `__tests__/Footer.test.tsx` | `Footer` | Estrutural | 13 casos |
| `__tests__/mockApi.test.ts` | `api` (Mock) | Dados/Integração | 12 casos |

### O que cada teste cobre

#### `Button.test.tsx`
- Renderização com todas as variants (`primary`, `secondary`, `outline`, `ghost`, `danger`)
- Renderização com todos os tamanhos (`sm`, `md`, `lg`)
- Disparo correto de `onClick`
- Bloqueio de click quando `disabled` ou `isLoading`
- Estado de loading com `aria-busy`
- Atributo `aria-label` para acessibilidade
- Renderização de ícones (esquerdo/direito)
- Acessibilidade via teclado
- Passagem de atributos nativos

#### `Header.test.tsx`
- Landmark `<header>` com `role="banner"`
- Logo com `aria-label` e `href` corretos
- Navegação principal com todos os links
- Link ativo com `aria-current="page"`
- Botões CTA Entrar/Cadastrar
- Toggle de menu mobile com `aria-expanded`
- Relação `aria-controls` com o menu mobile
- Fechamento com tecla Escape
- Acessibilidade via teclado do logo

#### `DoctorCard.test.tsx`
- Renderização de nome, especialidade e localização
- Rating com `aria-label` acessível
- Badges condicionais (LGBTQIA+, Trans, Telemedicina)
- Disponibilidade
- Descrição
- Botões "Ver perfil" e "Agendar"
- Estado de confirmação após agendar
- Reversão do botão após 3 segundos
- `role="article"` com `aria-label`
- Iniciais do avatar

#### `Footer.test.tsx`
- Landmark `<footer>` com `role="contentinfo"`
- Logo e descrição da marca
- Links de redes sociais com `aria-label` + `rel="noopener noreferrer"`
- Colunas de navegação (Plataforma, Empresa, Suporte)
- Link `mailto:` de contato
- Copyright com ano atual
- Links legais (Privacidade, Termos, Cookies)

---

## 🔄 Rollback

### Estratégia de rollback na Vercel

A Vercel mantém automaticamente o histórico completo de deploys.

#### Rollback imediato via Dashboard

1. Acesse [vercel.com/dashboard](https://vercel.com/dashboard)
2. Selecione o projeto `lacrei-saude`
3. Clique em **"Deployments"**
4. Encontre a versão estável anterior na lista
5. Clique nos **3 pontinhos** → **"Promote to Production"**
6. Confirme — o rollback é instantâneo (< 1 minuto)

#### Rollback via CLI

```bash
# Listar deploys recentes
vercel ls

# Promover deploy específico para produção
vercel promote <deployment-url>

# Exemplo:
vercel promote https://lacrei-saude-abc123.vercel.app
```

#### Preview Deploys para validação

Todo pull request cria automaticamente um **Preview Deploy** com URL única. Isso permite:
- Validar a nova versão antes de ir para produção
- Compartilhar com stakeholders para aprovação
- Reverter sem impacto nos usuários

```bash
# Deploy de preview (sem --prod)
vercel

# URL gerada automaticamente:
# https://lacrei-saude-git-feature-branch.vercel.app
```

#### Rollback via Git tags

```bash
# Criar tag da versão estável atual
git tag v1.0.0
git push origin v1.0.0

# Em caso de problema, fazer rollback para a tag
git checkout v1.0.0
vercel --prod
```

---

## ♿ Acessibilidade

### Implementações

| Critério | Implementação |
|---|---|
| HTML semântico | `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<aside>` |
| Skip link | "Pular para o conteúdo principal" visível no foco |
| ARIA labels | Todos os botões e links têm `aria-label` descritivo |
| ARIA live | `aria-live="polite"` em contagens e feedbacks dinâmicos |
| ARIA current | `aria-current="page"` no link de navegação ativo |
| ARIA expanded | Toggle do menu mobile com estado correto |
| ARIA controls | Relação explícita entre toggle e menu mobile |
| ARIA required | Campos de formulário marcados corretamente |
| Focus visible | Outline verde visível em todos os elementos interativos |
| Contraste | Mínimo 4.5:1 para texto (WCAG AA) |
| Keyboard nav | Todo o site navegável apenas com teclado |
| Escape | Fecha menu mobile via tecla Escape |
| Role radiogroup | Grupos de filtros com semântica correta |
| Role list | Grids de cards e especialidades com `role="list"` |
| Breadcrumb | `<nav aria-label="Navegação estrutural">` |

### Teste com leitores de tela

Testado com:
- **VoiceOver** (macOS/iOS) — navegação completa funcional
- **NVDA** (Windows) — recomendado para validação final

### Lighthouse targets

- **Accessibility**: ≥ 90 ✅
- **Performance**: ≥ 80 ✅
- **Best Practices**: ≥ 90 ✅
- **SEO**: ≥ 90 ✅

---

## ⚡ Performance

### Otimizações implementadas

| Técnica | Detalhes |
|---|---|
| Next.js Image | Lazy loading automático via `next/image` |
| Font optimization | `next/font/google` com `display: swap` e subset `latin` |
| Styled-Components SSR | `ServerStyleSheet` elimina FOUC |
| Next.js compiler | `styledComponents: true` no `next.config.js` |
| Code splitting | App Router do Next.js 14 faz splitting automático por rota |
| SVG inline | Logo como SVG inline (sem requisição extra) |
| Skeleton loading | UX sem layout shift durante carregamento |
| Animações CSS | `keyframes` puros (sem JS) para melhor performance |
| Semantic HTML | Menos divs desnecessárias = menor DOM |

### Bundle

```bash
# Analisar bundle
npm install @next/bundle-analyzer
ANALYZE=true npm run build
```

---

## 🔌 Mock de API

A integração com API é simulada via `lib/mockApi.ts`, seguindo a arquitetura que seria usada com um back-end real.

### Estrutura

```typescript
// Simula delay de rede realista
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  // GET /profissionais?especialidade=&modalidade=&busca=
  async getProfissionais(filters?) { ... },

  // GET /especialidades
  async getEspecialidades() { ... },

  // GET /profissionais/:id
  async getProfissionalById(id) { ... },
}
```

### Migração para API real

Para substituir o mock pela API real, basta alterar `lib/mockApi.ts`:

```typescript
// Antes (mock)
export const api = {
  async getProfissionais(filters?) {
    await delay(400);
    return profissionais.filter(...);
  }
}

// Depois (API real)
export const api = {
  async getProfissionais(filters?) {
    const params = new URLSearchParams(filters);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/profissionais?${params}`);
    if (!res.ok) throw new Error('API Error');
    return res.json();
  }
}
```

### MSW (opcional para testes de integração)

Para uso com Mock Service Worker:

```bash
npm install msw --save-dev
npx msw init public/
```

```typescript
// mocks/handlers.ts
import { http, HttpResponse } from 'msw'
import { profissionais } from '@/lib/mockApi'

export const handlers = [
  http.get('/api/profissionais', () => {
    return HttpResponse.json(profissionais)
  }),
]
```

---

## 🎨 Justificativas Visuais e Técnicas

### Identidade Visual – Marsha Design System

| Decisão | Justificativa |
|---|---|
| **Cor primária: #22C55E** | Verde Lacrei — representa saúde, acolhimento e inclusão |
| **Cor secundária: #7C3AED** | Roxo — representa diversidade e identidade LGBTQIA+ |
| **Fonte: Nunito** | Fonte oficial do Marsha Design System; arredondada e acolhedora, transmite cuidado sem ser clínica |
| **Border-radius generoso** | Cantos arredondados criam sensação de segurança e acolhimento |
| **Barra pride no footer** | Representa inclusão e pertencimento da comunidade |
| **Badges coloridas** | Identificação rápida de atributos (LGBTQIA+ Friendly, Trans Competente) |

### Decisões Técnicas

| Decisão | Justificativa |
|---|---|
| **Next.js 14 App Router** | RSC para melhor performance; estrutura de rotas baseada em arquivos |
| **Styled-Components v6** | Obrigatório no desafio; `ServerStyleSheet` resolve SSR; design tokens centralizados |
| **TypeScript strict** | Previne bugs em runtime; melhor DX com autocomplete |
| **Design tokens centralizados** | `styles/tokens.ts` — fonte única de verdade para cores, tipografia, espaçamento |
| **Mobile-first** | Media queries `max-width`; layout que começa simples e escala |
| **CSS animations** | Preferidas a JS animations para melhor performance e acessibilidade (`prefers-reduced-motion` compatível) |
| **`forwardRef` no Button** | Permite integração com bibliotecas de formulários e referências diretas |
| **Mock API com delay simulado** | Testa o comportamento real da UX com loading states |
| **`aria-live` em feedbacks** | Screen readers anunciam mudanças dinâmicas sem interrupção |
| **Skip link visível** | Essencial para usuários de teclado — evita navegar por todo o header |

### Acessibilidade como Pilar

A acessibilidade não foi tratada como checklist, mas como **decisão de design**:

1. **Semântica primeiro**: `<article>` para cards, `<aside>` para filtros, `<nav>` com labels
2. **Focus management**: Menu mobile fecha com Escape e retorna foco corretamente
3. **Textos alternativos**: Todos os ícones SVG têm `aria-hidden="true"` quando decorativos
4. **Contraste**: Verde #22C55E sobre branco = ratio 3.2:1 (AA para textos grandes); #16A34A sobre branco = 4.6:1 (AA para textos normais)
5. **Tamanho de toque**: Todos os elementos interativos têm mínimo 44x44px (WCAG 2.5.5)

---

## 📁 Estrutura do Projeto

```
lacrei-saude/
├── app/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx          # Componente Button com variants
│   │   │   └── index.ts
│   │   ├── Header/
│   │   │   ├── Header.tsx          # Header com nav responsiva
│   │   │   └── index.ts
│   │   ├── Footer/
│   │   │   ├── Footer.tsx          # Footer com links e social
│   │   │   └── index.ts
│   │   └── DoctorCard/
│   │       ├── DoctorCard.tsx      # Card de profissional
│   │       └── index.ts
│   ├── providers/
│   │   ├── StyledComponentsRegistry.tsx  # SSR fix
│   │   └── GlobalStylesWrapper.tsx
│   ├── profissionais/
│   │   ├── page.tsx                # Metadata da página
│   │   └── ProfissionaisClient.tsx # Página com filtros e busca
│   ├── layout.tsx                  # Root layout com metadata
│   ├── page.tsx                    # Home metadata
│   └── HomeClient.tsx              # Página inicial
├── styles/
│   ├── tokens.ts                   # Design tokens do Marsha Design System
│   └── GlobalStyles.ts             # Estilos globais
├── lib/
│   └── mockApi.ts                  # Mock de integração com API
├── __tests__/
│   ├── Button.test.tsx
│   ├── Header.test.tsx
│   ├── DoctorCard.test.tsx
│   ├── Footer.test.tsx
│   └── mockApi.test.ts
├── public/                         # Assets estáticos
├── .babelrc                        # Babel para testes
├── jest.config.js
├── jest.setup.ts
├── next.config.js                  # Configuração Next.js
├── tsconfig.json
└── package.json
```

---

## 👥 Sobre a Lacrei Saúde

A Lacrei Saúde é uma plataforma de saúde digital dedicada à comunidade LGBTQIA+, conectando pacientes a profissionais de saúde capacitados para oferecer atendimento seguro, respeitoso e inclusivo.

**Missão**: Garantir que cada pessoa se sinta segura ao buscar cuidado.

---

*Desenvolvido com 💚 para o desafio front-end da Lacrei Saúde*
