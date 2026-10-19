<template>
  <nav class="shadow-md box-border bg-slate-700 text-white px-6 py-4">
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <div class="text-lg font-semibold">
        <NuxtLink to="/" class="hover:text-slate-300 text-xl">
          <span> &lt;GustavoDev /&gt; </span>
        </NuxtLink>
      </div>

      <!-- Menu desktop -->
      <ul class="hidden md:flex gap-6 text-sm">
        <li v-for="item in itensMenu" :key="item.to">
          <NuxtLink :to="item.to" class="hover:text-slate-300">
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Botão hambúrguer (mobile) -->
      <button
        class="md:hidden p-2 -mr-2 cursor-pointer"
        :aria-expanded="menuAberto"
        aria-label="Abrir menu"
        @click="menuAberto = !menuAberto"
      >
        <svg v-if="!menuAberto" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>

    <!-- Menu mobile -->
    <ul v-show="menuAberto" class="md:hidden flex flex-col mt-4 border-t border-slate-600">
      <li v-for="item in itensMenu" :key="item.to">
        <NuxtLink :to="item.to" class="block py-3 hover:text-slate-300">
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const itensMenu = [
  { to: '/', label: 'Início' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/sobre_mim', label: 'Sobre_mim' },
  { to: '/contato', label: 'Contato' },
]

const menuAberto = ref(false)

// Fecha o menu mobile ao trocar de página
const route = useRoute()
watch(() => route.path, () => {
  menuAberto.value = false
})
</script>
