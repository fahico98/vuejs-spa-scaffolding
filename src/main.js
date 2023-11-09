import "bootstrap-icons/font/bootstrap-icons.css"
import { useAuthStore } from "@/pinia/auth.js"
import { createPinia } from "pinia"
import { createApp } from "vue"
import router from "@/router"
import App from "./App.vue"
import "@/styles/main.css"
import axios from "axios"

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}/api`
axios.defaults.withCredentials = true

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

const authStore = useAuthStore()

if (!authStore.checkXsrfTokenCookie()) await authStore.requestCsrfToken()

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
