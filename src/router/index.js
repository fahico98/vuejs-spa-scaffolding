import { createRouter, createWebHistory } from "vue-router"
// import axios from "axios"
// import Home from "@/"

const routes = [
  {
    path: "/",
    name: "home",
    // beforeEnter: multiguard([guards.guest]),
    component: () => import("@/views/HomeView.vue")
  },

  {
    path: "/ingreso",
    name: "sign-in",
    component: () => import("@/views/SignInView.vue")
  },

  {
    path: "/registro",
    name: "sign-up",
    component: () => import("@/views/SignUpView.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title ? `${process.env.VUE_APP_NAME} - ${to.meta.title}` : process.env.VUE_APP_NAME
//   next()
// })

export default router
