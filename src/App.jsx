import Header from "./components/header";
import AppRoutes from "./routes";
import Loader from "./components/loader";
import { useEffect, useState } from "react";

const App = () => {
  return (
    <>
      <AppRoutes />
      <Header />
    </>
  );
};

export default App;
