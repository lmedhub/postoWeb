import "./App.css";
import { Link } from "react-router-dom";

import React from "react";
import Navbar from "./componentes/Navbar";
import Hero from "./componentes/Hero";
import Produtos from "./componentes/Produtos";
import DaPistaAConveniencia from "./componentes/DaPistaAConveniencia";
import FacilidadeAdmin from "./componentes/FacilidadeAdmin";

function App(props) {
  return (
    <div>
      <Navbar />
      <Hero />
      <Produtos />
      <DaPistaAConveniencia />
      <FacilidadeAdmin />
    </div>
  );
}

export default App;
