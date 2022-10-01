import "./App.css";

import React from "react";
import Navbar from "./componentes/Navbar";
import Hero from "./componentes/Hero";
import Produtos from "./componentes/Produtos";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Produtos />
    </div>
  );
}

export default App;
