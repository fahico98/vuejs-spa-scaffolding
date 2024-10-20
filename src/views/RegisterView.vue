<script setup>
  import ViewTemplate from "@/components/global/ViewTemplate.vue"
  import { useAuthStore } from "@/pinia/auth.js"
  import { useRouter } from "vue-router"
  import { ref } from "vue"

  const authStore = useAuthStore()
  const router = useRouter()

  const form = ref({
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  })

  async function register() {
    await authStore
      .register(form.value)
      .then(async (response) => {
        if (response.status === 200) {
          authStore.$patch({ user: response.data.user })
          authStore.setStorageAuthentication()
          router.push({
            name: "user-profile",
            params: { userId: authStore.user.id }
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
      <div class="register height-full-screen">
        <form class="register-form" @submit.prevent="register">
          <div>
            <h3 class="sing-up-title mb-4">Crea tu cuenta</h3>
            <p class="register-subtitle">Llena el formulario con tus datos para registrarte.</p>
          </div>

          <div>
            <label for="name" class="label-md label-indigo w-fit ml-1 mb-1">Nombre</label>
            <input id="name" v-model="form.name" type="text" name="name" class="input-md input-indigo" />
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
            <label for="password_confirmation" class="label-md label-indigo w-fit ml-1 mb-1">Confirmación de contraseña</label>
            <input id="password_confirmation" v-model="form.password_confirmation" type="password" name="password_confirmation" class="input-md input-indigo" />
          </div>

          <div>
            <button type="submit" class="btn-md btn-indigo">Enviar<i class="bi bi-send ml-2"></i></button>
          </div>
        </form>
      </div>
    </ViewTemplate>
  </div>
</template>

<style scoped>
  .register {
    @apply w-full flex justify-center items-center min-h-[42rem] max-h-[72rem];
  }

  .register-form {
    @apply drop-shadow-lg bg-white w-[28rem] h-[36rem] flex flex-col justify-between items-stretch py-8 px-8 rounded-lg border border-gray-200;
  }

  .sing-up-title {
    @apply text-2xl font-bold font-sans text-indigo-600;
  }

  .register-subtitle {
    @apply text-base font-sans text-gray-600 font-normal;
  }
</style>
