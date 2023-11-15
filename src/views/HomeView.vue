<script setup>
  import ViewTemplate from "@/components/global/ViewTemplate.vue"
  import BootstrapLogo from "@/assets/images/bootstrap_logo.png"
</script>

<template>
  <div>
    <ViewTemplate>
      <div class="home height-full-screen">
        <div class="home-grid">
          <div class="w-full">
            <img :src="BootstrapLogo" alt="Bootstrap logo" class="home-image" />

            <h3 class="home-subtitle">Ingresa con tus credenciales o regístrate con tu correo electrónico para iniciar</h3>

            <button class="btn-lg btn-indigo" type="button" @click="$router.push({ name: 'login' })">
              Iniciar&nbsp;<i class="bi bi-arrow-right-circle ml-1"></i>
            </button>
          </div>
        </div>
      </div>
    </ViewTemplate>
  </div>
</template>

<style scoped>
  .home {
    @apply w-full flex justify-center items-center;
  }

  .home-grid {
    @apply w-full grid grid-cols-2 gap-x-5;
  }

  .home-image {
    @apply object-contain h-32 mb-8;
  }

  .home-subtitle {
    @apply text-2xl font-sans font-normal text-gray-600 mb-10;
  }
</style>
