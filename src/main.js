import "bootstrap-icons/font/bootstrap-icons.css"
import { useAuthStore } from "@/pinia/auth.js"
import { createPinia } from "pinia"
import { createApp } from "vue"
import router from "@/router"
import App from "@/App.vue"
import "@/styles/main.css"

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

const authStore = useAuthStore()

if (authStore.getStorageAuthentication()) {
  await authStore
    .me()
    .then((response) => {
      if (response.status === 200) authStore.$patch({ user: response.data.user })
    })
    .catch((error) => {
      authStore.$reset()
      console.log(error)
    })
}

app.mount("#app")
