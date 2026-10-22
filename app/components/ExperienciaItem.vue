<template>
  <li class="relative pl-8 pb-10 last:pb-0 border-l border-slate-700">
    <!-- Marcador da linha do tempo -->
    <span class="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-green-500 ring-4 ring-green-500/20" />

    <span class="text-sm font-mono text-green-400">{{ experiencia.periodo }}</span>
    <h3 class="text-xl font-bold mt-1">{{ experiencia.cargo }}</h3>
    <p class="text-slate-400">{{ experiencia.empresa }}</p>
    <p class="text-slate-300 text-sm mt-3">{{ experiencia.descricao }}</p>

    <ul class="flex flex-wrap gap-2 mt-3">
      <li
        v-for="tec in experiencia.tecnologias"
        :key="tec"
        class="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-green-400"
      >
        {{ tec }}
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
import type { Experiencia } from '~/data/experiencias'

defineProps<{
  experiencia: Experiencia
}>()
</script>
