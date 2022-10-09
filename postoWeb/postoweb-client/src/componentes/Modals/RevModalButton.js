import React, {useState} from "react";
import Modal from "./Modal.js";
import "./RevModalButton.css";

export default function RevModalButton() {

  const [isOpen, setIsOpen] = useState(false);
  const revModal = true;

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="revendedor-button-container">
      <button className="revendedor-button" onClick={toggleModal}>
        <i className="fas fa-user-alt"></i>Seja um Revendedor
      </button>
      {isOpen && <Modal isOpen={isOpen} toggleModal={toggleModal} revModal={revModal}/>}
    </div>
  );
}
