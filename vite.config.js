import { defineConfig } from "vite";

export default defineConfig({
  root: "./src", // Cambia la raíz del proyecto a "src"
  base: '/TECHBURGER/',//esta parte es necesaria para que github pages importe bien
  build: {
    outDir: "../docs", // Los archivos construidos irán a la carpeta "docs"
  },
});
