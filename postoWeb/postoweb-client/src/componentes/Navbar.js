import React from "react";
import Modal from "react-modal";
import "./Navbar.css";
import logo from "../assets/postoweblogo.jpg";
import ModalButton from "./Modals/ModalButton";


Modal.setAppElement("#root");

export default function Navbar() {
  
  return (
    <section className="logo-e-navbar">
      <img className="logo" alt="logo postoweb" src={logo}></img>
      <nav>
        <ul className="navbar-items">
          <li>
            <a href="/#">Inicio</a>
          </li>
          <li>
            <a href="/#">Nossas Soluções</a>
          </li>
          <li>
            <a href="/#">Conteúdos</a>
          </li>
          <li>
            <a href="/#">Sobre nós</a>
          </li>
          <li>
            <ModalButton revModalButton={true} revModal={true}/>
          </li>
          <li>
            <ModalButton demoModal={true}/>
          </li>
        </ul>
      </nav>
    </section>
  );
}
