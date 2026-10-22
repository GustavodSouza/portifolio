export interface Projeto {
  titulo: string
  descricao: string
  tecnologias: string[]
  imagem?: string
  repositorio?: string
  demo?: string
}

export const projetos: Projeto[] = [
  {
    titulo: 'Portfólio',
    descricao: 'Meu portfólio pessoal, feito com Nuxt e Tailwind CSS.',
    tecnologias: ['Nuxt', 'Vue.js', 'Tailwind CSS'],
    repositorio: 'https://github.com/GustavodSouza/portifolio'
  },
  {
    titulo: 'Meu Financeiro',
    descricao: 'Criei para parar de controlar gastos em planilha: cadastro de despesas por categoria, filtros, totais do mês e orçamento ajustável mês a mês, com autenticação e dados por usuário no Firebase.',
    tecnologias: ['Angular', 'TypeScript', 'Firebase', 'Firebase Authentication', 'Firestore'],
    repositorio: 'https://github.com/GustavodSouza/meu-financeiro',
    demo: 'https://meu-financeiro-web.vercel.app/'
  }
]
