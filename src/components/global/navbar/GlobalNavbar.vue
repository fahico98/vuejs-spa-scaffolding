<script setup>
  import GuestNavLinks from "@/components/global/navbar/GuestNavLinks.vue"
  import AuthNavLinks from "@/components/global/navbar/AuthNavLinks.vue"
  import InnClodLogo from "@/assets/images/InnClodLogo.png"
  import { useAuthStore } from "@/pinia/auth.js"

  const authStore = useAuthStore()
</script>

<template>
  <nav>
    <div class="nav-container max-width margin-x">
      <img class="nav-logo" :src="InnClodLogo" alt="Inn Clod logo" @click="$router.push({ name: 'home' })" />
      <AuthNavLinks v-if="authStore.isAuthenticated" />
      <GuestNavLinks v-else />
    </div>
  </nav>
</template>

<style scoped>
  nav {
    @apply drop-shadow bg-white flex justify-center w-full fixed top-0 left-0 right-0 p-0 z-[1];
  }
  .nav-container {
    @apply flex justify-between items-center relative w-full h-16 py-2;
  }
  .nav-logo {
    @apply object-contain h-8 cursor-pointer;
  }
</style>
