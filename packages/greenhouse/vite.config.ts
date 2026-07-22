import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"
import preserveDirectives from "rollup-preserve-directives"
import { resolve } from "path"
import { copyFileSync } from "fs"

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src"],
      exclude: ["**/*.stories.tsx", "**/*.test.tsx"],
    }),
    preserveDirectives(),
    {
      name: "copy-tokens",
      closeBundle() {
        copyFileSync(
          resolve(__dirname, "src/styles/tokens.css"),
          resolve(__dirname, "dist/tokens.css")
        )
      },
    },
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "@floating-ui/react"],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].mjs",
      },
    },
  },
})