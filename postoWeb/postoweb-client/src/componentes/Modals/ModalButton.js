import React, { useState } from "react";
import Modal from "./Modal.js";
import "./ModalButton.css";

export default function ModalButton(props) {
  const removePCsymbol = props.removePCsymbol;
  const [isOpen, setIsOpen] = useState(false);
  const revModalButton = props.revModalButton;

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return revModalButton ? (
    <div className="revendedor-button-container">
      <button className="revendedor-button" onClick={toggleModal}>
        <i className="fas fa-user-alt"></i>Seja um Revendedor
      </button>
      {isOpen && (
        <Modal isOpen={isOpen} toggleModal={toggleModal} revModal={props.revModal} />
      )}
    </div>
  ) : (
    <div className="demo-button-container">
      <button className="demo-button" onClick={toggleModal}>
        {removePCsymbol ? "" : <i className="fas fa-tv"></i>}Peça uma
        demonstração!
      </button>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          toggleModal={toggleModal}
          demoModal={props.demoModal}
        />
      )}
    </div>
  );
}
