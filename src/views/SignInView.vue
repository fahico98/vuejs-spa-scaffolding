<script setup>
  import ViewTemplate from "@/components/global/ViewTemplate.vue"
  import signInImage from "@/assets/images/sing-in-image.jpg"
  import { ref } from "vue"

  const form = ref({
    email: null,
    password: null
  })
</script>

<template>
  <div>
    <ViewTemplate>
      <div class="sign-in height-full-screen">
        <img :src="signInImage" class="sign-in-image" alt="Sing in image" />

        <form class="sign-in-form">
          <div class="sign-in-text-container">
            <h3 class="sing-in-title mb-4">Ingresa a tu cuenta</h3>
            <p class="sign-in-subtitle">
              Si aún no tienes una cuenta puedes <router-link :to="{ name: 'sign-up' }" class="sign-in-link">registrarte</router-link> completamente gratis.
            </p>
          </div>

          <div>
            <label for="email" class="label-md label-black w-fit ml-1 mb-1">Correo electrónico</label>
            <input id="email" v-model="form.email" type="text" name="email" class="input-md input-my-yellow" />
          </div>

          <div>
            <label for="password" class="label-md label-black w-fit ml-1 mb-1">Contraseña</label>
            <input id="password" v-model="form.password" type="password" name="password" class="input-md input-my-yellow" />
          </div>

          <div>
            <button type="submit" class="btn-md btn-my-yellow">Ingresar<i class="bi bi-send ml-2"></i></button>
          </div>
        </form>
      </div>
    </ViewTemplate>
  </div>
</template>

<style scoped>
  .sign-in {
    @apply w-full flex justify-center items-center relative min-h-[38rem] max-h-[72rem];
  }
  .sign-in-image {
    @apply absolute w-full bottom-12 z-[-1];
  }
  .sign-in-form {
    @apply drop-shadow-lg bg-white w-[28rem] h-[26rem] flex flex-col justify-between items-stretch py-8 px-8 rounded-lg border border-gray-200;
  }
  .sing-in-title {
    @apply text-2xl font-bold font-sans;
  }
  .sign-in-subtitle {
    @apply text-base font-sans text-black font-normal;
  }
  .sign-in-link {
    @apply text-my-yellow hover:underline cursor-pointer font-medium;
  }
</style>
