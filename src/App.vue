<script setup>
  import Navbar from "@/components/global/navbar/GlobalNavbar.vue"
  import Footer from "@/components/global/GlobalFooter.vue"
</script>

<template>
  <div>
    <Navbar />
    <router-view class="router-view" />
    <Footer />
  </div>
</template>

<style scoped></style>
