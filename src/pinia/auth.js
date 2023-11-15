import { defineStore } from "pinia"
import { computed, ref } from "vue"
import axios from "@/lib/axios"

// You can name the return value of `defineStore()` anything you want, but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`) the first argument is a unique id of the store across your application.
export const useAuthStore = defineStore("auth", () => {
  // State

  const user = ref(null)

  // Getters

  const isAuthenticated = computed(() => user.value && getStorageAuthentication())

  // Actions

  function checkXsrfTokenCookie() {
    let cookiesArray = document.cookie.split(";")
    return cookiesArray.some((cookieStr) => cookieStr.split("=")[0] === "XSRF-TOKEN")
  }

  async function requestCsrfToken() {
    await axios.get(`${import.meta.env.VITE_API_URL}/sanctum/csrf-cookie`)
  }

  async function login(email, password) {
    return await axios.post(`${import.meta.env.VITE_API_URL}/login`, { email, password })
  }

  async function register() {}

  async function logout() {
    await axios.post(`${import.meta.env.VITE_API_URL}/logout`)
  }

  async function me() {
    return await axios.get(`${import.meta.env.VITE_API_URL}/me`)
  }

  function setStorageAuthentication() {
    localStorage.setItem("authentication", "true")
  }

  function getStorageAuthentication() {
    return localStorage.getItem("authentication")
  }

  function resetStorageAuthentication() {
    localStorage.removeItem("authentication")
  }

  function $reset() {
    user.value = null
    resetStorageAuthentication()
  }

  // Return

  return {
    // State
    user,

    // Getters
    isAuthenticated,

    // Actions
    $reset,
    checkXsrfTokenCookie,
    setStorageAuthentication,
    getStorageAuthentication,
    resetStorageAuthentication,
    requestCsrfToken,
    login,
    register,
    logout,
    me
  }
})
