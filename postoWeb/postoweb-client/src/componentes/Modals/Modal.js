import React from "react";
import Modal from "react-modal";
import "./Modal.css";
import FormularioRev from "./FormularioRev.js";
import revFoto from "../../assets/revendedor.jpg";
import demoFoto from "../../assets/demoFoto.jpg";

export default function Modall(props) {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.toggleModal}
      contentLabel="Modal Revendedores"
      className="revModal"
      overlayClassName="revModalOverlay"
    >
      <div className="modal-conteudo">
        <div className="fundo-esquerda"></div>
        {props.revModal ? (
          <img src={revFoto} className="revFoto" alt="homem com notebook" />
        ) : (
          <img
            src={demoFoto}
            className="revFoto"
            alt="notebook com graficos na tela"
          />
        )}
        <div className="direita">
          <button onClick={props.toggleModal} className="close-modal-button">
            X
          </button>
          {props.revModal ? (
            <header>
              <h2 style={{ color: "rgb(49,85,144)" }}>Seja um revendedor</h2>
              <h1>Credenciado postoWeb</h1>
              <hr className="modal-hr" />
            </header>
          ) : (
            <header>
              <h2 style={{ color: "rgb(49,85,144)" }}>Quer saber mais?</h2>
              <h1>Solicite uma demonstração</h1>
              <hr className="modal-hr" />
            </header>
          )}
          <FormularioRev />
        </div>
      </div>
    </Modal>
  );
}
