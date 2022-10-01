import React, { useState } from "react";
import Modal from "react-modal";
import "./Navbar.css";
import logo from "../postoweblogo.jpg";
import RevModal from "./RevModal.js";


Modal.setAppElement("#root");

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="logo-e-navbar">
      <img className="logo" alt="logo postoweb" src={logo}></img>
      <nav>
        <ul className="navbar-items">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Nossas Soluções</a>
          </li>
          <li>
            <a href="#">Conteúdos</a>
          </li>
          <li>
            <a href="#">Sobre nós</a>
          </li>
          <li className="revendedor-button-container">
            <button className="revendedor-button" onClick={toggleModal}>
              <i className="fas fa-user-alt"></i>Seja um
              Revendedor
            </button>
            {isOpen && <RevModal isOpen={isOpen} toggleModal={toggleModal}/>}
          </li>
          <li className="demo-button-container">
            <button className="demo-button">
              <i className="fas fa-tv"></i>Peça uma demonstração!
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
