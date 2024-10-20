<script setup>
  import { useAuthStore } from "@/pinia/auth.js"
  import { useRouter } from "vue-router"
  import { ref } from "vue"

  const router = useRouter()
  const authStore = useAuthStore()
  const logoutLoading = ref(false)

  async function logout() {
    logoutLoading.value = true
    await authStore.logout().then(() => {
      authStore.$reset()
      router.push({ name: "login" })
    })
    logoutLoading.value = false
  }
</script>

<template>
  <div class="auth-nav-links">
    <router-link class="auth-nav-link mr-8" :to="{ name: 'user-profile', params: { userId: authStore.user.id } }">{{ authStore.user.name }}</router-link>
    <a href="#" class="auth-nav-link" @click.prevent="logout">Cerrar sesión</a>
  </div>
</template>

<style scoped lang="postcss">
  .auth-nav-links {
    @apply flex items-center h-full;
  }

  .auth-nav-link {
    @apply font-sans cursor-pointer font-medium text-base text-gray-600 hover:text-indigo-400 transition duration-[200ms];
  }

  .router-link-active {
    @apply text-indigo-600 font-medium underline;
  }
</style>
