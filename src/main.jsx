import { ViteReactSSG } from "vite-react-ssg";
import "./index.css";
import routes from "./routes.jsx";

// Saída flat do SSG serve cada rota como "/Pagina.html". O rewrite de URL limpa do
// .htaccess (F1.3) cobre a navegação normal do site, mas links antigos/indexados
// que ainda apontam pro sufixo ".html" chegam com pathname=".../Pagina.html" — que
// não bate com a rota renderizada no servidor e quebra a hidratação (React
// recupera trocando a página inteira pela rota "*"). Confirmado que ainda
// reproduz mesmo com o .htaccess funcionando (testado sem este trecho via
// Apache real: /Tratamento.html sozinho troca pra "Não foi possível encontrar a
// página" pouco depois do JS carregar). Mantido como rede de segurança para essa
// entrada direta; a navegação via NavLink já usa só URL limpa.
if (typeof window !== "undefined") {
  const { pathname, search, hash } = window.location;
  if (pathname.endsWith(".html")) {
    const clean = pathname === "/index.html" ? "/" : pathname.replace(/\.html$/, "");
    window.history.replaceState(null, "", clean + search + hash);
  }
}

export const createRoot = ViteReactSSG({ routes });
