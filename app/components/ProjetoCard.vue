<template>
  <article class="card flex flex-col rounded-xl overflow-hidden border border-slate-700 bg-slate-900/80">
    <img v-if="projeto.imagem" :src="projeto.imagem" :alt="projeto.titulo" class="w-full h-44 object-cover" />

    <div class="flex flex-col flex-1 gap-3 p-5">
      <h3 class="text-xl font-bold">{{ projeto.titulo }}</h3>
      <p class="text-slate-300 text-sm flex-1">{{ projeto.descricao }}</p>

      <ul class="flex flex-wrap gap-2">
        <li
          v-for="tec in projeto.tecnologias"
          :key="tec"
          class="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-green-400"
        >
          {{ tec }}
        </li>
      </ul>

      <div class="flex gap-4 text-sm mt-2">
        <a v-if="projeto.repositorio" :href="projeto.repositorio" target="_blank" class="hover:text-green-400">
          Código →
        </a>
        <a v-if="projeto.demo" :href="projeto.demo" target="_blank" class="hover:text-green-400">
          Ver online →
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Projeto } from '~/data/projetos'

defineProps<{
  projeto: Projeto
}>()
</script>

<style scoped>
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 30px rgba(34, 197, 94, 0.2);
}
</style>
