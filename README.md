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


