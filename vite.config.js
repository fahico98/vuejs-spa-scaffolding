import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { fileURLToPath, URL } from "url"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    host: true,
    strictPort: true,
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url))
      }
    ]
  },
  plugins: [vue()]
})
