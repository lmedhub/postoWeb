import React, {useState} from "react";
import RevModal from "./RevModal.js";
import "./RevModalButton.css";

export default function RevModalButton() {

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="revendedor-button-container">
      <button className="revendedor-button" onClick={toggleModal}>
        <i className="fas fa-user-alt"></i>Seja um Revendedor
      </button>
      {isOpen && <RevModal isOpen={isOpen} toggleModal={toggleModal} />}
    </div>
  );
}
