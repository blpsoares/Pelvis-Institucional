import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./assets/Pages/homepage";
import FisioterapiaPelvica from "./assets/Pages/fisioterapia-pelvica";
import Acupuntura from "./assets/Pages/acupuntura";
import Pilates from "./assets/Pages/pilates";

import React from 'react'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="fisioterapia-pelvica" element={<FisioterapiaPelvica />} />
          <Route path="acupuntura" element={<Acupuntura />} />
          <Route path="pilates" element={<Pilates />} />
        </Routes>
    </BrowserRouter>
    
  )
}

export default App