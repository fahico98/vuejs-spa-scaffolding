<script setup>
  import ViewTemplate from "@/components/global/ViewTemplate.vue"
  import { useAuthStore } from "@/pinia/auth.js"

  const authStore = useAuthStore()

  defineProps({
    userId: { type: String, required: true }
  })
</script>

<template>
  <div>
    <ViewTemplate>
      <div class="height-full-screen mt-10">{{ authStore.user }}</div>
    </ViewTemplate>
  </div>
</template>
