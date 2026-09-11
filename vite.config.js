import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  ssgOptions: {
    // A rota curinga "*" (NotFound) e excluida automaticamente da geracao
    // estatica pelo vite-react-ssg (ele filtra paths com ":" ou "*"). Injetar
    // "/404" aqui gera dist/404.html com o conteudo real de src/pages/notFound
    // (o path nao bate com nenhuma rota registrada, entao o router cai no "*"
    // igual faria para qualquer URL invalida) — consumido pelo ErrorDocument
    // 404 do public/.htaccess.
    includedRoutes: (paths) => [...paths, "/404"],
  },
});
