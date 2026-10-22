export interface Experiencia {
  cargo: string
  empresa: string
  periodo: string
  descricao: string
  tecnologias: string[]
}

export const experiencias: Experiencia[] = [
  {
    cargo: 'Desenvolvedor Full Stack Pleno',
    empresa: 'Cast Group',
    periodo: '04/2026 até atualmente',
    descricao: `
      Atuo no cliente Banco da Amazônia S.A., no projeto Banklink, desenvolvendo testes de integração 
      utilizando JUnit e banco de dados H2, que aumentam a confiabilidade das entregas do sistema, além 
      de apoiar o time com análise de código.
    `,
    tecnologias: ['Java 8', 'JUnit', 'H2']
  },
  {
    cargo: 'Analista de Sistemas Júnior',
    empresa: 'Cast Group',
    periodo: '10/2023 até 03/2026',
    descricao: `
      Atuei no cliente Banco da Amazônia S.A., em projetos de Rentabilidade Financeira, Centro de Custos 
      e sistemas contábeis, com foco na evolução do SIGAF (ERP corporativo), sistema crítico para 
      operações financeiras, contratos com fornecedores e processamento de pagamentos. Desenvolvi 
      telas de ponta a ponta, incluindo gráficos percentuais e cálculos de múltiplos impostos que deram ao 
      cliente uma visão completa das despesas. No back-end, desenvolvi endpoints REST em Java/Spring 
      Boot para atender às requisições do front-end, com testes unitários em JUnit. Criei componentes 
      reutilizáveis, como tabelas com múltiplos níveis de expansão, e gerei documentos e relatórios com 
      FreeMarker. Também atuei junto ao cliente na resolução de bugs críticos em produção, mantendo as 
      entregas dentro do prazo.
    `,
    tecnologias: ['Vue.js', 'Quasar Framework', 'Java', 'Spring Boot', 'JUnit', 'FreeMarker', 'Scrum']
  },
  {
    cargo: 'Desenvolvedor Web Júnior',
    empresa: 'Meta IT',
    periodo: '01/2021 até 10/2023',
    descricao: `
      Atuei no cliente Ministério da Justiça, no sistema ProConsumidor, desenvolvendo telas com Angular e 
      Java/Spring Boot, corrigindo bugs e otimizando consultas SQL para melhorar a performance.  
      Na Telefônica Vivo, atuei em um sistema jurídico corporativo. Participei da modernização do sistema 
      legado desde o início, desenvolvendo telas e funcionalidades em Angular, com rotas, guardas de rota 
      e componentes reutilizáveis que padronizaram a interface. Também atuei na sustentação do legado 
      em Java EE, corrigindo bugs e entregando novas funcionalidades, além de orientar os 
      desenvolvedores júniores do time. 
    `,
    tecnologias: ['Angular', 'TypeScript', 'Java', 'Java EE', 'JSF', 'JSP', 'Spring Boot', 'Scrum']
  },
  {
    cargo: 'Estagiário',
    empresa: 'Meta IT',
    periodo: '01/2020 até 01/2021',
    descricao: `
      Atuei no desenvolvimento de sistemas internos, com foco na criação de interfaces web e 
      implementação de autenticação e controle de acesso. Desenvolvi telas com Vue.js e Vuetify e 
      implementei autenticação via JWT e gerenciamento de permissões de usuários. 
    `,
    tecnologias: ['Vue.js', 'Vuetify', 'AdonisJS', 'SCSS', 'Scrum']
  }
]

export const habilidades: { categoria: string, itens: string[] }[] = [
  { 
    categoria: 'Front-end', 
    itens: ['Angular', 'Vue.js', 'Nuxt', 'JavaScript', 'TypeScript', 'Tailwind CSS'] 
  },
  { categoria: 'UI Frameworks', itens: ['Quasar Framework', 'Angular Material', 'Bootstrap'] },
  { categoria: 'Back-end', itens: ['Java', 'Spring Boot', 'Oracle SQL', 'PostgreSQL'] },
  { categoria: 'Ferramentas', itens: ['Docker', 'Postman', 'Swagger'] },
  { categoria: 'Versionamento', itens: ['Git', 'GitHub', 'GitLab'] },
  { categoria: 'Banco de Dados', itens: ['Oracle SQL', 'PostgreSQL', 'Firebase'] },
  { categoria: 'Metodologias Ágeis', itens: ['Scrum', 'Kanban'] }
]
