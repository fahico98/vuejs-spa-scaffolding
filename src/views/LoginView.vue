<script setup>
  import ViewTemplate from "@/components/global/ViewTemplate.vue"
  import { useAuthStore } from "@/pinia/auth.js"
  import { ref } from "vue"

  const authStore = useAuthStore()

  const form = ref({
    email: null,
    password: null
  })

  async function login() {
    await authStore
      .login(form.value.email, form.value.password)
      .then(async (response) => {
        if (response.status === 204) {
          await authStore
            .me()
            .then((response) => {
              if (response.status === 200) {
                authStore.$patch({ user: response.data.user })
                authStore.setStorageAuthentication()
              }
            })
            .catch((error) => {
              authStore.$reset()
              console.log(error)
            })
        }
      })
      .catch((error) => {
        authStore.$reset()
        console.log(error)
      })
  }
</script>

<template>
  <div>
    <ViewTemplate>
      <div class="login height-full-screen">
        <form class="login-form" @submit.prevent="login">
          <div>
            <h3 class="login-title mb-4">Ingresa a tu cuenta</h3>
            <p class="login-subtitle">
              Si aún no tienes una cuenta puedes <router-link :to="{ name: 'register' }" class="login-link">registrarte</router-link> completamente gratis.
            </p>
          </div>

          <div>
            <label for="email" class="label-md label-indigo w-fit ml-1 mb-1">Correo electrónico</label>
            <input id="email" v-model="form.email" type="text" name="email" class="input-md input-indigo" />
          </div>

          <div>
            <label for="password" class="label-md label-indigo w-fit ml-1 mb-1">Contraseña</label>
            <input id="password" v-model="form.password" type="password" name="password" class="input-md input-indigo" />
          </div>

          <div>
            <button type="submit" class="btn-md btn-indigo">Ingresar<i class="bi bi-send ml-2"></i></button>
          </div>
        </form>
      </div>
    </ViewTemplate>
  </div>
</template>

<style scoped>
  .login {
    @apply w-full flex justify-center items-center min-h-[38rem] max-h-[72rem];
  }

  .login-form {
    @apply drop-shadow-lg bg-white w-[28rem] h-[26rem] flex flex-col justify-between items-stretch py-8 px-8 rounded-lg border border-gray-200;
  }

  .login-title {
    @apply text-2xl font-bold font-sans text-indigo-600;
  }

  .login-subtitle {
    @apply text-base font-sans text-gray-600 font-normal;
  }

  .login-link {
    @apply text-indigo-600 hover:underline hover:text-indigo-400 cursor-pointer font-medium;
  }
</style>
