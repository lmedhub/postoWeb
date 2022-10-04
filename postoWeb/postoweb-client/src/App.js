import "./App.css";

import React from "react";
import Navbar from "./componentes/Navbar";
import Hero from "./componentes/Hero";
import Produtos from "./componentes/Produtos";
import DaPistaAConveniencia from "./componentes/DaPistaAConveniencia";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Produtos />
      <DaPistaAConveniencia />
    </div>
  );
}

export default App;
