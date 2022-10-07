import React from "react";
import Modal from "react-modal";
import "./DemoModal.css";
import FormularioRev from "./FormularioRev.js";
import demoFoto from "../../assets/demoFoto.jpg";

export default function DemoModal(props) {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.toggleModal}
      contentLabel="Modal Demonstração"
      className="demoModal"
      overlayClassName="demoModalOverlay"
    >
      <div className="modal-conteudo">

          <img src={demoFoto} className="revFoto"></img>

        <div className="direita">
          <button onClick={props.toggleModal} className="close-modal-button">
            X
          </button>
          <header>
            <h2 style={{ color: "rgb(49,85,144)" }}>Quer saber mais?</h2>
            <h1>Solicite uma demonstração</h1>
            <hr className="modal-hr" />
          </header>
          <FormularioRev />
        </div>
      </div>
    </Modal>
  );
}
