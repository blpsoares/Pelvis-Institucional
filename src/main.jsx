import { ViteReactSSG } from "vite-react-ssg";
import "./index.css";
import routes from "./routes.jsx";

// Saída flat do SSG serve cada rota como "/Pagina.html". Enquanto o rewrite de
// URL limpa do .htaccess não existe (F1.3), normaliza a URL antes do router
// inicializar, senão o pathname com ".html" não bate com a rota renderizada
// no servidor e a hidratação falha (React recupera renderizando a rota "*").
if (typeof window !== "undefined") {
  const { pathname, search, hash } = window.location;
  if (pathname.endsWith(".html")) {
    const clean = pathname === "/index.html" ? "/" : pathname.replace(/\.html$/, "");
    window.history.replaceState(null, "", clean + search + hash);
  }
}

export const createRoot = ViteReactSSG({ routes });
