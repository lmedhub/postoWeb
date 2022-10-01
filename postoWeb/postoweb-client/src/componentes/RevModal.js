import React from "react";
import Modal from "react-modal";
import FormularioRev from "./FormularioRev.js";
import revFoto from "../revendedor.jpg";

export default function RevModal(props) {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.toggleModal}
      contentLabel="Modal Revendedores"
      className="revModal"
      overlayClassName="revModalOverlay"
    >
      <div className="modal-conteudo">
        <div className="esquerda">
          <img src={revFoto} className="revFoto"></img>
        </div>
        <div className="direita">
          <button onClick={props.toggleModal} className="close-modal-button">
            X
          </button>
          <header>
            <h2 style={{ color: "rgb(49,85,144)" }}>Seja um revendedor</h2>
            <h1>Credenciado postoWeb</h1>
            <hr className="modal-hr" />
          </header>
          <FormularioRev />
        </div>
      </div>
    </Modal>
  );
}
