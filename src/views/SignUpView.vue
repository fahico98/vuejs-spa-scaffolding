<script setup>
  import ViewTemplate from "@/components/global/ViewTemplate.vue"
  import signUpImage from "@/assets/images/sign-up-image.jpg"
  import { ref } from "vue"

  const form = ref({
    username: null,
    email: null,
    password: null,
    password_confirmation: null
  })
</script>

<template>
  <div>
    <ViewTemplate>
      <div class="sign-up height-full-screen">
        <div class="sign-up-grid">
          <div class="sign-up-grid-left">
            <form class="sign-up-form" action="">
              <div class="sign-up-text-container">
                <h3 class="sing-up-title mb-4">Crea tu cuenta</h3>
                <p class="sign-up-subtitle">Llena el formulario con tus datos para registrarte.</p>
              </div>
              <div>
                <label for="username" class="label-md label-black w-fit ml-1 mb-1">Nombre de usuario</label>
                <input id="username" v-model="form.username" type="text" name="username" class="input-md input-my-yellow" />
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
                <label for="password_confirmation" class="label-md label-black w-fit ml-1 mb-1">Confirmación de contraseña</label>
                <input
                  id="password_confirmation"
                  v-model="form.password_confirmation"
                  type="password"
                  name="password_confirmation"
                  class="input-md input-my-yellow"
                />
              </div>
              <div>
                <button type="submit" class="btn-md btn-my-yellow">Enviar<i class="bi bi-send ml-2"></i></button>
              </div>
            </form>
          </div>
          <div class="sign-up-grid-right">
            <img :src="signUpImage" class="sign-up-image" alt="Sing up image" />
          </div>
        </div>
      </div>
    </ViewTemplate>
  </div>
</template>

<style scoped>
  .sign-up {
    @apply w-full flex justify-center items-center relative min-h-[38rem] max-h-[72rem];
  }
  .sign-up-grid {
    @apply w-full h-full grid grid-cols-3 gap-x-6 py-6;
  }
  .sign-up-grid-left {
    @apply w-full h-full col-span-1 flex flex-col justify-center;
  }
  .sign-up-form {
    @apply w-full flex flex-col justify-between h-[30rem];
  }
  .sing-up-title {
    @apply text-2xl font-bold font-sans;
  }
  .sign-up-subtitle {
    @apply text-base font-sans text-black font-normal;
  }
  .sign-up-grid-right {
    @apply w-full h-full col-span-2;
  }
  .sign-up-image {
    @apply w-full h-full rounded-lg object-cover;
  }
</style>
