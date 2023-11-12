import React from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/loader";

import Homepage from "./pages/homepage/Index";
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
          <React.Suspense fallback={<Loader />}>
            <Tratamento />
          </React.Suspense>
        }
      />
      <Route
        path="equipe"
        element={
          <React.Suspense fallback={<Loader />}>
            <Equipe />
          </React.Suspense>
        }
      />
      <Route
        path="quem-somos"
        element={
          <React.Suspense fallback={<Loader />}>
            <QuemSomos />
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
