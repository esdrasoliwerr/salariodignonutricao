<p align="center">
  <img src="./docs/Entrega4/assets/icons/logo.png" alt="Logotipo Salário Digno Nutrição" width="300">
</p>

# Salário Digno Nutrição  
## Plataforma Web – Projeto Integrado de Front-End  
### Entregas I, II, III e IV

---

## 1. Sobre o Projeto

O projeto **Salário Digno Nutrição** consiste no desenvolvimento de uma plataforma web destinada a apoiar iniciativas de valorização profissional de nutricionistas e técnicos em nutrição. A proposta foi desenvolvida no contexto da disciplina de Front-End do curso de Análise e Desenvolvimento de Sistemas, com foco na aplicação progressiva dos conteúdos estudados ao longo das quatro unidades: HTML5, CSS3, JavaScript e práticas profissionais de versionamento, acessibilidade e deploy.

A plataforma simula um ambiente real adotado por coletivos, associações e ONGs, oferecendo páginas institucionais, área de projetos, formulário de cadastro e recursos de acessibilidade e interatividade.

---

## 2. Entrega I – Fundamentos e Estruturação (HTML5)

Nesta etapa inicial, foram aplicados os fundamentos de **HTML5**, priorizando semântica, organização e acessibilidade.  
Foram criadas três páginas principais:

- **index.html** – apresentação institucional;  
- **projetos.html** – projetos sociais, links oficiais e multimídia;  
- **cadastro.html** – formulário completo com validação nativa.

**Principais implementações:**
- Estrutura semântica com `header`, `nav`, `main`, `section`, `article`, `footer`;  
- Hierarquia correta de títulos (`h1` a `h4`);  
- Formulário estruturado com `<fieldset>` e `<legend>`;  
- Inputs com validação nativa por atributos (`required`, `pattern`, `type`);  
- Inclusão de imagens e vídeos com textos alternativos;  
- HTML validado no **W3C Validator**.

---

## 3. Entrega II – Estilização e Leiautes (CSS3)

Nesta entrega, a estrutura foi transformada em uma interface responsiva, modular e visualmente consistente utilizando **CSS3**, Grid e Flexbox.

**Principais implementações:**

### 3.1 Design System  
- Paleta com oito cores (primárias, secundárias e neutras);  
- Tipografia hierárquica com cinco tamanhos;  
- Sistema de espaçamento modular (8px–64px);  
- Variáveis CSS centralizadas no arquivo `tokens.css`.

### 3.2 Leiaute Responsivo  
- Grid de **12 colunas** aplicado ao layout principal;  
- Flexbox para componentes internos;  
- Cinco breakpoints (1280px, 1100px, 900px, 700px e 500px);  
- Navegação responsiva com dropdown e menu hambúrguer.

### 3.3 Componentes  
- Cards para exibição de conteúdos;  
- Botões com estados visuais (hover, focus, active, disabled);  
- Formulários estilizados com feedback visual;  
- Badges e alertas;  
- Modal utilizando `:target`.

### 3.4 Acessibilidade (unidade preliminar)  
- Correção de atributos ARIA inválidos;  
- Foco visível;  
- Contraste ajustado;  
- Estrutura revisada baseada no W3C.

---

## 4. Entrega III – Interatividade e Funcionalidades (JavaScript)

O objetivo desta fase foi incorporar interatividade, manipulação do DOM e validações dinâmicas com JavaScript.

**Principais implementações:**

### 4.1 SPA (Single Page Application) básica  
- Sistema simples de carregamento dinâmico por meio do arquivo `spa.js`;  
- Templates JavaScript para renderização de conteúdos.

### 4.2 Validações de Formulário  
- Verificação de consistência dos dados antes do envio;  
- Exibição de mensagens de erro e aviso ao usuário;  
- Máscaras e validações complementares.

### 4.3 Modularização  
- `spa.js` — manipulação do DOM e carregamento dinâmico;  
- `forms.js` — validação de formulários;  
- Scripts organizados em `/js/`.

---

## 5. Entrega IV – Versionamento, Acessibilidade e Deploy

A entrega final reúne práticas profissionais que preparam o código para produção, com foco em versionamento, acessibilidade WCAG 2.1 e otimização.

### 5.1 Versionamento – Git/GitHub  
- **Estratégia GitFlow** aplicada;  
- Branches organizadas por funcionalidade;  
- **Commits semânticos** seguindo padrão convencional;  
- Pull Requests documentados;  
- Issues utilizadas para registro de tarefas;  
- Milestones configuradas para organização das entregas.

### 5.2 Acessibilidade – WCAG 2.1 Nível AA  
Implementações realizadas:

- Navegação por teclado funcional em todos os componentes (tabindex, foco visível);  
- Estrutura semântica revisada;  
- Ajustes de contraste mínimo de 4.5:1;  
- Suporte para leitores de tela (atributos `aria-` adequados);  
- Modo de **alto contraste**;  
- Modo **claro** e **escuro** com botão de alternância;  
- Persistência do tema via `localStorage`.

### 5.3 Otimização para Produção  
- Minificação de CSS e JS;  
- Otimização de imagens;  
- Reorganização dos arquivos finais para deploy;  
- Remoção de trechos não utilizados.

### 5.4 Deploy  
- Publicação via **GitHub Pages** na pasta `docs/Entrega4`;  
- Estrutura preparada para navegação entre páginas e temas.

---

## 6. Arquitetura de Pastas

```
salariodignonutricao/
├─ docs/
│  ├─ Entrega1/
│  ├─ Entrega2/
│  ├─ Entrega3/
│  └─ Entrega4/
│     ├─ index.html
│     ├─ projetos.html
│     ├─ cadastro.html
│     ├─ css/
│     ├─ js/
│     ├─ assets/
│     │   ├─ img/
│     │   ├─ video/
│     │   └─ icons/
├─ README.md
└─ LICENSE
```

---

## 7. Tecnologias Utilizadas

- **HTML5** (semântica, formulários, acessibilidade)  
- **CSS3** (design system, grid, flexbox, componentes, responsividade)  
- **JavaScript** (DOM, SPA, validações, modularização)  
- **Git/GitHub** (GitFlow, commits semânticos, PRs, issues, milestones)  
- **Github Pages** (deploy)  

---

## 8. Resultado Final

### Entrega I  
https://esdrasoliwerr.github.io/salariodignonutricao/Entrega1/

### Entrega II  
https://esdrasoliwerr.github.io/salariodignonutricao/Entrega2/

### Entrega III  
https://esdrasoliwerr.github.io/salariodignonutricao/Entrega3/

### Entrega IV  
https://esdrasoliwerr.github.io/salariodignonutricao/Entrega4/

---

## 9. Contatos do Projeto

- E-mail institucional: **salariodignonutricao@gmail.com**  
- Instagram: **@salariodignonutricao**

---

