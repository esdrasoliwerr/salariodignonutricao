# 💜 Salário Digno Nutrição  
### Entrega I — Fundamentos e Estruturação (HTML5)  
📘 Disciplina: Front-End — Análise e Desenvolvimento de Sistemas

---
Resultado da entrega I: https://esdrasoliwerr.github.io/salariodignonutricao/Entrega1/

## 🧭 Visão Geral

O **Salário Digno Nutrição** é uma iniciativa desenvolvida como parte da disciplina de Front-End, com o objetivo de aplicar os **fundamentos de HTML5** na criação de uma plataforma digital voltada ao fortalecimento e à valorização dos **nutricionistas brasileiros**.

A proposta da atividade é estruturar, com base em semântica HTML e boas práticas, as páginas iniciais de um sistema web completo para ONGs e movimentos sociais.

---

## 🎯 Objetivos da Etapa

Nesta entrega (Entrega I), foram aplicados:

- Estrutura **HTML5 semântica** e hierárquica;  
- Criação de **três páginas principais** (`index.html`, `projetos.html` e `cadastro.html`);  
- Implementação de **formulário completo** com validação nativa HTML5;  
- Inclusão de **imagens e multimídia** otimizadas;  
- Organização dos arquivos conforme boas práticas de versionamento.

---

<pre>
📁 Estrutura do Projeto
salariodignonutricao/
├─ docs/
│   └─ Entrega1/
│       ├─ index.html            → Página inicial (quem somos + contato)
│       ├─ projetos.html         → Projetos, campanhas e galeria
│       ├─ cadastro.html         → Formulário de participação e apoio
│       ├─ README.md             → Descrição técnica da entrega
│       └─ assets/
│           ├─ icons/
│           │   └─ logo.png      → Logotipo oficial do movimento
│           └─ img/
│               ├─ projeto1.png  → Caminhada e faixa — Dia do Nutricionista
│               ├─ projeto2.png  → Ato em auditório — Valorização profissional
│               └─ projeto3.png  → Camiseta do movimento — Empoderamento
│
├─ LICENSE
└─ README.md                     → Descrição geral do repositório
</pre>

---

## 🧩 Tecnologias Utilizadas

| Tecnologia | Finalidade |
|-------------|-------------|
| **HTML5** | Estruturação semântica das páginas |
| **Atributos HTML5 (`required`, `pattern`, `type`)** | Validação nativa de formulários |
| **Metadados (`<meta>`)** | SEO e descrição do site |
| **Boas práticas de acessibilidade** | Uso de `alt`, `label`, `legend`, `aria` |

---

## 📄 Páginas Desenvolvidas

### 🏠 `index.html` — Página Inicial
- Apresenta o movimento, sua missão e contatos oficiais.  
- Contém a logo e informações institucionais.  

### 🤝 `projetos.html` — Projetos e Mobilizações
- Explica o **PL 6819/2010** (30h semanais).  
- Disponibiliza links oficiais da Câmara, Senado e formulário do Google.  
- Apresenta galeria de imagens de mobilizações reais.  

### 📝 `cadastro.html` — Formulário de Participação
- Coleta **dados pessoais e profissionais** com validação nativa.  
- Campos: Nome, E-mail, CPF, Telefone, Data de Nascimento, Endereço, CEP, Cidade e Estado.  
- Inclui `<fieldset>` e `<legend>` para agrupamento semântico.  

---

## 🧠 Boas Práticas Implementadas

- Estrutura semântica clara e validada pelo [W3C Validator](https://validator.w3.org/nu/);  
- Textos acessíveis com `alt` e `aria-label`;  
- Organização de pastas (`assets/icons`, `assets/img`);  
- Layout preparado para futuras etapas (CSS e JS).  

---

## 🌐 Contatos

📧 **E-mail:** [salariodignonutricao@gmail.com](mailto:salariodignonutricao@gmail.com)  
📸 **Instagram:** [@salariodignonutricao](https://instagram.com/salariodignonutricao)  

---

---

## 🎨 Entrega II — Estilização e Leiautes (CSS3)

Resultado da entrega II:https://esdrasoliwerr.github.io/salariodignonutricao/Entrega2/

---

### 🧭 Objetivo

Transformar a estrutura HTML da Entrega I em uma **interface web profissional, responsiva e acessível**, aplicando os fundamentos de **CSS3**, **design system**, **flexbox** e **grid**.  
O foco principal é a estilização, organização modular e responsividade do site.

---

### 🧩 Estrutura do Projeto
<pre>
salariodignonutricao/
├─ docs/
│ └─ Entrega2/
│ ├─ index.html
│ ├─ projetos.html
│ ├─ cadastro.html
│ ├─ css/
│ │ ├─ tokens.css → Design System (cores, tipografia, espaçamento)
│ │ ├─ base.css → Estilos base e tipografia
│ │ ├─ layout.css → Grid 12 colunas, Flexbox e menu responsivo
│ │ ├─ components.css → Cards, botões, formulários, badges, alertas, modal
│ │ └─ utilities.css → Breakpoints e utilitários
│ └─ assets/
│ ├─ icons/logo.png
│ └─ img/projeto1..3.png
</pre>


---

### 🎨 Sistema de Design

| Elemento | Descrição |
|-----------|------------|
| **Cores** | 8+ tons: roxo `#584476`, verde `#26713E`, bege `#efede1`, branco, preto, e três tons de cinza. |
| **Tipografia** | Hierarquia com 5 tamanhos (`--fs-xxl` a `--fs-sm`). |
| **Espaçamento modular** | 8px, 16px, 24px, 32px, 48px e 64px. |
| **Design tokens** | Centralizados em `tokens.css` para fácil manutenção. |

---

### 🧱 Leiautes Responsivos

- Estrutura principal em **CSS Grid (12 colunas)**.  
- **Flexbox** aplicado em componentes internos.  
- **Cinco breakpoints** responsivos: 1280px, 1100px, 900px, 700px, 500px.  
- Layout **mobile-first** e totalmente adaptável a dispositivos móveis.  

---

### 🧭 Navegação

- **Menu principal responsivo** com:
  - Dropdown funcional (hover);
  - Menu hambúrguer para dispositivos móveis (sem JavaScript, apenas CSS);
  - Destaque para página ativa (`aria-current="page"`).

---

### 🧩 Componentes de Interface

- **Cards responsivos** para exibir projetos e materiais.  
- **Botões com estados visuais** (`hover`, `focus`, `active`, `disabled`).  
- **Formulários estilizados** com feedback visual e foco acessível.  
- **Badges** para categorias e tags.  
- **Alertas e Modal** implementados 100% com CSS (`:target`).  

---

### ♿ Acessibilidade e Validação

- Estrutura com atributos ARIA revisados.  
- Correções validadas pelo [W3C Validator](https://validator.w3.org/nu/#file).  
- Padrões de contraste e foco garantidos.  
- Substituição de atributos incorretos (`aria-expanded`, `aria-label`, `street-address`) por equivalentes válidos.

---

### 🧠 Boas Práticas Implementadas

- CSS **modularizado** e reutilizável.  
- Arquitetura **mobile-first**.  
- **HTML validado** conforme W3C.  
- **Paleta e tokens centralizados**, facilitando manutenção nas próximas entregas.  

---

---
##  Entrega III — Interatividade e Funcionalidades (JavaScript)

Resultado da entrega III: https://esdrasoliwerr.github.io/salariodignonutricao/Entrega3/

---
### Objetivo

Implementar interatividade na plataforma utilizando JavaScript modular, criando uma SPA básica, manipulando o DOM e adicionando validação avançada ao formulário de cadastro com feedback ao usuário.

---
### Funcionalidades Implementadas
🔁 Single Page Application (SPA)

Navegação dinâmica entre páginas sem recarregar todo o site;

Apenas o conteúdo central é substituído, mantendo header e footer;

Uso da History API (pushState / popstate) para navegação fluida;

Sistema de templates JavaScript para carregar e armazenar conteúdos das páginas:

index.html

projetos.html

cadastro.html

---
###  Validação Avançada do Formulário

Arquivo: js/forms.js

Além da validação nativa do HTML5, foram aplicadas regras de consistência:

Verificação de nome completo (nome + sobrenome);

CPF válido (11 dígitos + bloqueio de repetições);

Telefone com DDD (10–11 dígitos);

CEP com 8 dígitos;

UF com sigla de 2 letras.

---
###  Feedback ao usuário

Resumo de erros exibido no topo do formulário;

Mensagens específicas abaixo dos campos inválidos;

Campos incorretos marcados com aria-invalid="true";

Foco automático no primeiro erro (acessibilidade).

---
### JavaScript Modular
<pre>
Entrega3/
├─ js/
│  ├─ spa.js      → Navegação, templates e rotas
│  └─ forms.js    → Regras de validação e mensagens de erro
</pre>

Separação clara de responsabilidades (SPA × Validação);

DOM manipulado diretamente (sem bibliotecas);

Funcionamento garantido mesmo sem JavaScript (progressive enhancement).

---
### Acessibilidade na Interatividade

Uso de aria-live="assertive" nas mensagens dinâmicas;

Campos inválidos marcados com aria-invalid="true";

Foco aplicado automaticamente para navegação por teclado;

Mensagens compatíveis com leitores de tela.

---
### Boas Práticas Implementadas

Progressive enhancement aplicado corretamente;

Código modular, limpo e reutilizável;

SPA leve, mantendo a compatibilidade com o HTML original;

Estrutura preparada para a Entrega IV (versionamento, acessibilidade e deploy).

---
# Entrega IV — Versionamento, Acessibilidade e Deploy

**Resultado da Entrega IV:** (https://esdrasoliwerr.github.io/salariodignonutricao/Entrega4/)

---

## Objetivo

A Entrega IV consolida o projeto ao aplicar práticas profissionais de versionamento com Git/GitHub, diretrizes de acessibilidade baseadas na WCAG 2.1 Nível AA, otimização para ambiente de produção e documentação técnica.  
O foco desta etapa é demonstrar maturidade no ciclo completo de desenvolvimento front-end: estruturação, estilização, interatividade, acessibilidade, versionamento e publicação.

---

## Controle de Versão (Git/GitHub)

O projeto adotou uma estratégia baseada no modelo GitFlow, organizada da seguinte forma:

- Branches utilizadas:
  - `main`
  - `develop`
  - `feature/entrega1`
  - `feature/entrega2`
  - `feature/entrega3`
  - `feature/entrega4`
  - `release/v1.0.0`

- Histórico de commits utilizando convenção semântica:
  - `feat`: inclusão de novas funcionalidades
  - `fix`: correções
  - `docs`: ajustes em documentação
  - `refactor`: melhorias internas
  - `style`: ajustes visuais e de formatação

- Releases utilizando versionamento semântico:
  - `v1.0.0` – Estrutura HTML
  - `v1.1.0` – Estilização CSS
  - `v1.2.0` – SPA e validação
  - `v1.3.0` – Acessibilidade, minificação e deploy

---

## Acessibilidade (WCAG 2.1 – Nível AA)

As seguintes diretrizes de acessibilidade foram aplicadas:

- Navegação completa por teclado em todos os componentes do site;
- Estrutura semântica adequada com uso de elementos nativos (`header`, `nav`, `main`, `section`, `footer`);
- Foco visível em links, botões, itens de menu e campos de formulários;
- Implementação de atributos ARIA compatíveis com leitores de tela, incluindo `aria-live`, `aria-invalid` e `aria-pressed`;
- Garantia de contraste mínimo 4.5:1 para texto e elementos interativos;
- Implementação de modo escuro e versão de alto contraste, com acionamento via botões acessíveis;
- Revisão completa no W3C Validator com correções de atributos inválidos e estrutura HTML.

---

## Otimização para Produção

Foram aplicadas práticas de otimização do projeto, incluindo:

- Minificação de arquivos HTML, CSS e JavaScript, gerando versões compactas (`*.min.*`);
- Redução de espaços, quebras de linha e elementos redundantes;
- Compressão de imagens e vídeos;
- Revisão da estrutura de carregamento de arquivos para melhorar desempenho.

---

## Deploy

A estrutura foi preparada para publicação no GitHub Pages, seguindo o padrão da disciplina:

```
docs/
 └── Entrega4/
      ├── index.html
      ├── css/
      ├── js/
      ├── assets/
      └── versões minificadas dos arquivos
```

A entrega final funciona de forma independente, preservando responsividade, acessibilidade e interatividade.

---

## Documentação Técnica

O repositório contém documentação completa, incluindo:

- README estruturado apresentando:
  - resumo das quatro entregas do projeto;
  - tecnologias utilizadas;
  - descrição da arquitetura;
  - justificativas técnicas;
  - explicação do fluxo de versionamento;
  - links para cada entrega.

- Issues e milestones criadas para registrar processos, melhorias e ajustes;

- Pull Requests simulados conforme exigência da atividade.

---

## Conclusão

A Entrega IV finaliza o ciclo de desenvolvimento consolidando práticas de versionamento profissional, acessibilidade conforme WCAG 2.1 AA, otimizações para produção e documentação adequada.  
Com esta entrega, o projeto alcança completude técnica, coerência estrutural e maturidade necessária para publicação.

