import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage"
const Tratamento = React.lazy(() => import("./pages/tratamento"));
const Equipe = React.lazy(() => import("./pages/equipe"));
const QuemSomos = React.lazy(() => import("./pages/quemSomos"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="tratamento"
        element={
          <React.Suspense fallback={<div>Carregando...</div>}>
            <Tratamento />
          </React.Suspense>
        }
      />
      <Route
        path="equipe"
        element={
          <React.Suspense fallback={<div>Carregando...</div>}>
            <Equipe />
          </React.Suspense>
        }
      />
      <Route
        path="quem-somos"
        element={
          <React.Suspense fallback={<div>Carregando...</div>}>
            <QuemSomos />
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
