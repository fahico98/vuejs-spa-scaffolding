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
    name: "login",
    component: () => import("@/views/LoginView.vue")
  },

  {
    path: "/registro",
    name: "register",
    component: () => import("@/views/RegisterView.vue")
  },

  {
    path: "/:userId",
    name: "user-profile",
    component: () => import("@/views/UserProfileView.vue"),
    props: true
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
