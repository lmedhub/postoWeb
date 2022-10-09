import React, {useState} from "react";
import Modal from "./Modal.js";
import "./DemoModalButton.css";

export default function DemoModalButton(props) {

  const removePCsymbol = (props.removePCsymbol)
  const [isOpen, setIsOpen] = useState(false);
  const demoModal = true;

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="demo-button-container">

      <button className="demo-button" onClick={toggleModal}>
        {removePCsymbol ? "" : <i className="fas fa-tv"></i>}Peça uma demonstração!
      </button>
      {isOpen && <Modal isOpen={isOpen} toggleModal={toggleModal} demoModal={demoModal}/>}
    </div>
  );
}

