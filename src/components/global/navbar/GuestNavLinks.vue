<script setup></script>

<template>
  <div class="guest-nav-links">
    <router-link :to="{ name: 'login' }" class="guest-nav-link mr-8">Ingresar</router-link>
    <router-link :to="{ name: 'register' }" class="guest-nav-link mr-8">Registrarse</router-link>
    <router-link :to="{ name: 'home' }" class="guest-nav-link">Inicio</router-link>
  </div>
</template>

<style scoped>
  .guest-nav-links {
    @apply flex items-center h-full w-fit;
  }

  .guest-nav-link {
    @apply font-sans cursor-pointer font-medium text-base text-gray-600 hover:text-indigo-400 transition duration-[200ms];
  }

  .router-link-active {
    @apply text-indigo-600 font-medium underline;
  }
</style>
