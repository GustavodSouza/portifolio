# Portfólio — Gustavo de Souza

Meu portfólio pessoal: um lugar para reunir quem eu sou, o que eu faço e os projetos que construí.

Sou desenvolvedor full stack com mais de 5 anos de experiência, com foco em front-end web (Vue.js, Angular) e back-end em Java/Spring Boot.

## 🚀 Tecnologias

- [Nuxt](https://nuxt.com/) — framework Vue com SSR/SSG
- [Vue.js](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript

## 📁 Estrutura

```
├── assets/        # Estilos e imagens
├── components/    # Componentes Vue reutilizáveis
├── data/          # Dados do site (ex.: lista de projetos)
├── pages/         # Rotas da aplicação
├── public/        # Arquivos estáticos
└── nuxt.config.ts # Configuração do Nuxt
```

Os projetos exibidos no site ficam em um array tipado (`projetos: Projeto[]`). Para adicionar um novo, basta incluir um objeto com `titulo`, `descricao`, `tecnologias`, `repositorio` e, opcionalmente, `demo`.

## 🛠️ Rodando localmente

Pré-requisitos: [Node.js](https://nodejs.org/) 18+ e npm.

```bash
# Clonar o repositório
git clone https://github.com/GustavodSouza/portifolio.git
cd portifolio

# Instalar dependências
npm install

# Subir o servidor de desenvolvimento (http://localhost:3000)
npm run dev
```

## 📦 Build

```bash
# Build de produção
npm run build

# Pré-visualizar o build
npm run preview

# Gerar versão estática
npm run generate
```

## 📬 Contato

- GitHub: [@GustavodSouza](https://github.com/GustavodSouza)
- LinkedIn: [https://www.linkedin.com/in/gustavo-de-souza-de-lima-084024b4/](https://www.linkedin.com/in/gustavo-de-souza-de-lima-084024b4/)

---

Feito com ☕ e Vue por Gustavo de Souza.
