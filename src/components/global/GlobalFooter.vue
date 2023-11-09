<script setup></script>

<template>
  <footer class="height-full-screen">
    <div class="footer-container max-width margin-x"></div>
  </footer>
</template>

<style scoped>
  footer {
    @apply flex flex-col items-center w-full max-h-[600px] bg-gray-600;
  }

  .footer-container {
    @apply py-12 h-full grid grid-cols-5 gap-x-10;
  }
</style>
