import React, { useState } from "react";
import Modal from "react-modal";
import "./Navbar.css";
import logo from "../postoweblogo.jpg";
import revFoto from "../revendedor.jpg";
import FormularioRev from "./FormularioRev.js";

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
            <Modal
              isOpen={isOpen}
              onRequestClose={toggleModal}
              contentLabel="Modal Revendedores"
              className="revModal"
              overlayClassName="revModalOverlay"
            >
              <div className="modal-conteudo">
                <div className="esquerda">
                  <img src={revFoto} className="revFoto"></img>
                </div>
                <div className="direita">
                  <button onClick={toggleModal} className="close-modal-button">X</button>
                  <header>
                    <h2 style={{color: "rgb(49,85,144)"}}>Seja um revendedor</h2>
                    <h1>Credenciado postoWeb</h1>
                    <hr className="modal-hr"/>
                  </header>
                    <FormularioRev />
                </div>
              </div>
            </Modal>
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
