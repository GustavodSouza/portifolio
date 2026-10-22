<script setup lang="ts">
import { experiencias, habilidades } from '~/data/experiencias'

useSeoMeta({
  title: 'Sobre mim | Gustavo Souza',
  description: 'Minha trajetória, experiências e tecnologias com que trabalho.'
})
</script>

<template>
  <div class="container mx-auto px-6 md:px-12 lg:px-24 py-16 flex flex-col gap-20">
    <!-- Introdução -->
    <section class="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
      <div class="md:col-span-8 text-center md:text-left">
        <h1 class="text-3xl sm:text-4xl font-bold">
          <span class="text-green-500 font-mono">&lt;</span>Sobre mim<span class="text-green-500 font-mono"> /&gt;</span>
        </h1>
        <!-- Substitua pelo seu texto -->
        <p class="mt-6 text-slate-300 leading-relaxed">
          Desenvolvedor Full Stack com mais de 5 anos de experiência em sistemas web, atuando com Angular, 
          Vue.js e Java (Spring Boot). Experiência em sistemas críticos para clientes como Banco da Amazônia, 
          Ministério da Justiça e Telefônica Vivo, do desenvolvimento de telas e endpoints REST à sustentação 
          de sistemas legados e resolução de bugs em produção. Atuação em code review e testes unitários e 
          de integração, em ambientes ágeis (Scrum).  
        </p>
      </div>
      <div class="md:col-span-4 flex justify-center md:justify-end order-first md:order-0">
        <img class="profile-img w-40 h-40 md:w-52 md:h-52 rounded-full object-cover" src="/assets/perfil_cut.jpg" alt="Foto de Gustavo Souza" />
      </div>
    </section>

    <!-- Habilidades -->
    <section>
      <h2 class="text-2xl sm:text-3xl font-bold text-center md:text-left">Tecnologias</h2>
      <div class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div
          v-for="grupo in habilidades"
          :key="grupo.categoria"
          class="rounded-xl border border-slate-700 bg-slate-900/80 p-5"
        >
          <h3 class="font-bold text-green-400">{{ grupo.categoria }}</h3>
          <ul class="flex flex-wrap gap-2 mt-4">
            <li
              v-for="item in grupo.itens"
              :key="item"
              class="text-xs font-mono px-2 py-1 rounded bg-slate-800"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Experiência -->
    <section>
      <h2 class="text-2xl sm:text-3xl font-bold text-center md:text-left">Experiência</h2>
      <ol class="mt-8 ml-2">
        <ExperienciaItem v-for="exp in experiencias" :key="exp.cargo + exp.periodo" :experiencia="exp" />
      </ol>
    </section>
  </div>
</template>

<style scoped>
.profile-img {
  box-shadow: 0 0 40px rgba(34,197,94,0.4);
}
</style>
