import React from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/loader";

import Homepage from "./pages/homepage/";
import Tratamento from "./pages/tratamento";
import Equipe from "./pages/equipe";
import QuemSomos from "./pages/quemSomos";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="tratamento" element={<Tratamento />} />
      <Route path="equipe" element={<Equipe />} />
      <Route path="quem-somos" element={<QuemSomos />} />
    </Routes>
  );
};

export default AppRoutes;
