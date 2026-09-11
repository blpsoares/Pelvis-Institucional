import { lazy, Suspense } from "react";
import Layout from "./App.jsx";
import Home from "./pages/home";
import Tratamento from "./pages/tratamento";
import ComoFunciona from "./pages/comoFunciona";
import QuemSomos from "./pages/quemSomos";
import FisioterapiaPelvica from "./pages/fisioterapiaPelvica";
import Loader from "./components/loader";

// eslint-disable-next-line react-refresh/only-export-components
const NotFound = lazy(() => import("./pages/notFound"));

const routes = [
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "QuemSomos", Component: QuemSomos },
      { path: "Tratamento", Component: Tratamento },
      { path: "ComoFunciona", Component: ComoFunciona },
      { path: "fisioterapia-pelvica", Component: FisioterapiaPelvica },
      {
        path: "*",
        element: (
          <Suspense fallback={<Loader />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
];

export default routes;
