<script setup lang="ts">
useSeoMeta({
  title: 'Gustavo Souza | Desenvolvedor',
  description: 'Portfólio com meus projetos e experiências.'
})
</script>

<template>
  <div class="container mx-auto px-6 md:px-12 lg:px-24 py-10 grid grid-cols-1 md:grid-cols-12 gap-10 flex-1 items-center">
    <div class="md:col-span-8 flex flex-col justify-center items-center md:items-start text-center md:text-left">
      <div class="flex flex-wrap items-center justify-center md:justify-start text-base sm:text-xl font-mono">
        <span class="text-indigo-500">console.</span>
        <span class="text-green-600">log</span>
        <span class="text-red-600">(</span>
        <span class="text-yellow-400">'Welcome 👋, I am'</span>
        <span class="text-red-600">)</span>
      </div>
      <div class="flex flex-col mt-3">
        <span class="text-3xl sm:text-4xl lg:text-5xl font-bold">Gustavo de Souza de Lima</span>
        <p class="mt-2">Desenvolvedor Full Stack</p>
        <p>Angular • Vue.js • Java • Spring Boot</p>
      </div>
      <div class="flex flex-row py-4">
        <img src="/assets/seta.svg" alt="" />
        <!-- <span #typedElement ngSkipHydration class="text-green-600 "></span> -->
      </div>
      <div class="flex flex-col sm:flex-row justify-center md:justify-start gap-3 w-full sm:w-auto">
        <a class="btn border-2 px-8 py-2 rounded-lg bg-amber-700 hover:bg-green-700 text-center" href="/assets/curriculo-gustavo-souza-lima.pdf" download>Download CV</a>
        <a class="btn border-2 px-8 py-2 rounded-lg bg-amber-700 hover:bg-sky-700 text-center" href="https://www.linkedin.com/in/gustavo-de-souza-de-lima-084024b4" target="_blank">Linkedin</a>
      </div>
    </div>
    <div class="md:col-span-4 flex justify-center md:justify-end order-first md:order-0">
      <img class="profile-img w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full object-cover" src="/assets/perfil_cut.jpg" alt="Foto de Gustavo Souza" />
    </div>
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
