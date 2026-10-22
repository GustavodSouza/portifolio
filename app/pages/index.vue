<script setup lang="ts">
import { projetos } from '~/data/projetos'
import { experiencias } from '~/data/experiencias'

const anosExperiencia = new Date().getFullYear() - 2021
const totalEmpresas = new Set(experiencias.map(exp => exp.empresa)).size
const clientes = ['Banco da Amazônia', 'Ministério da Justiça', 'Telefônica Vivo']

useSeoMeta({
  title: 'Gustavo Souza | Desenvolvedor',
  description: 'Portfólio com meus projetos e experiências.'
})
</script>

<template>
  <div>
    <!-- Apresentação -->
    <section class="relative container mx-auto px-6 md:px-12 lg:px-24 pt-10 pb-24 grid grid-cols-1 md:grid-cols-12 gap-10 items-center min-h-[calc(100svh-4rem)]">
      <div class="md:col-span-8 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <div class="flex flex-wrap items-center justify-center md:justify-start text-base sm:text-xl font-mono">
          <span class="text-indigo-500">console.</span>
          <span class="text-green-600">log</span>
          <span class="text-red-600">(</span>
          <span class="text-yellow-400">'Bem-vindo(a) 👋, eu sou'</span>
          <span class="text-red-600">)</span>
        </div>
        <div class="flex flex-col mt-3 mb-5">
          <span class="text-3xl sm:text-4xl lg:text-5xl font-bold">Gustavo de Souza de Lima</span>
          <p class="mt-2">Desenvolvedor Full Stack Pleno</p>
          <p class="mt-3">Trabalho com:</p>
          <p>Angular • Vue.js • Java • Spring Boot</p>
        </div>
        <div class="my-4">
          <p>
            <span><strong>Email</strong>: gustavosouza501@gmail.com</span>
          </p>
          <p>
            <span><strong>Whatsapp</strong>: (55) 99137-6971</span>
          </p>
        </div>
        <div class="flex flex-col sm:flex-row justify-center md:justify-start gap-3 w-full sm:w-auto">
          <a class="btn border-2 px-8 py-2 rounded-lg bg-amber-700 hover:bg-green-700 text-center" href="/assets/curriculo-gustavo-souza-lima.pdf" download>Download CV</a>
          <a class="btn border-2 px-8 py-2 rounded-lg bg-amber-700 hover:bg-sky-700 text-center" href="https://www.linkedin.com/in/gustavo-de-souza-de-lima-084024b4" target="_blank">Linkedin</a>
        </div>
      </div>
      <div class="md:col-span-4 flex justify-center md:justify-end order-first md:order-0">
        <img class="profile-img w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full object-cover" src="/assets/perfil_cut.jpg" alt="Foto de Gustavo Souza" />
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para o sobre mim"
        class="absolute bottom-6 left-1/2 -translate-x-1/2 p-2 text-green-500 hover:text-green-400 animate-bounce motion-reduce:animate-none"
      >
        <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>

    <!-- Sobre mim -->
    <section id="sobre" class="container mx-auto px-6 md:px-12 lg:px-24 py-16">
      <h2 class="text-3xl sm:text-4xl font-bold text-center md:text-left">
        <span class="text-green-500 font-mono">&lt;</span>Sobre mim<span class="text-green-500 font-mono"> /&gt;</span>
      </h2>

      <div class="mt-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div class="md:col-span-7 text-center md:text-left">
          <p class="text-slate-300 leading-relaxed">
            Sou desenvolvedor Full Stack com mais de {{ anosExperiencia }} anos de experiência construindo sistemas web
            para clientes de grande porte. No front-end trabalho com Angular e Vue.js; no back-end, com Java e Spring Boot,
            indo de telas e componentes reutilizáveis a APIs REST e testes automatizados.
          </p>

          <ul class="flex flex-wrap justify-center md:justify-start gap-2 mt-6">
            <li
              v-for="tec in ['Angular', 'Vue.js', 'TypeScript', 'Java', 'Spring Boot']"
              :key="tec"
              class="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-green-400"
            >
              {{ tec }}
            </li>
          </ul>

          <NuxtLink to="/sobre-mim" class="btn inline-block mt-8 border-2 px-8 py-2 rounded-lg hover:bg-green-700">
            Ver trajetória completa →
          </NuxtLink>
        </div>

        <div class="md:col-span-5 grid grid-cols-2 gap-4">
          <div class="rounded-xl border border-slate-700 bg-slate-900/80 p-5 text-center">
            <span class="block text-3xl sm:text-4xl font-bold text-green-500">+{{ anosExperiencia }}</span>
            <span class="text-sm text-slate-400">anos de experiência</span>
          </div>
          <div class="rounded-xl border border-slate-700 bg-slate-900/80 p-5 text-center">
            <span class="block text-3xl sm:text-4xl font-bold text-green-500">{{ totalEmpresas }}</span>
            <span class="text-sm text-slate-400">empresas</span>
          </div>
          <div class="col-span-2 rounded-xl border border-slate-700 bg-slate-900/80 p-5 text-center">
            <span class="block text-sm text-slate-400">Clientes atendidos</span>
            <span class="block mt-2 font-semibold">{{ clientes.join(' • ') }}</span>
          </div>
          <div class="col-span-2 rounded-xl border border-slate-700 bg-slate-900/80 p-5 text-center">
            <span class="block text-sm text-slate-400">Formação Superior</span>
            <span class="block mt-2 font-semibold">Tecnologia em Sistemas para Internet - UFSM</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Projetos -->
    <section id="projetos" class="container mx-auto px-6 md:px-12 lg:px-24 py-16">
      <h2 class="text-3xl sm:text-4xl font-bold text-center md:text-left">
        <span class="text-green-500 font-mono">&lt;</span>Projetos<span class="text-green-500 font-mono"> /&gt;</span>
      </h2>
      <p class="mt-2 text-slate-400 text-center md:text-left">Alguns dos projetos que desenvolvi.</p>

      <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjetoCard v-for="projeto in projetos" :key="projeto.titulo" :projeto="projeto" />
      </div>

      <div class="mt-10 flex justify-center">
        <NuxtLink to="/projetos" class="btn border-2 px-8 py-2 rounded-lg hover:bg-green-700">
          Ver todos os projetos
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.profile-img {
  box-shadow: 0 0 40px rgba(34,197,94,0.4);
}

.btn {
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
}
</style>
