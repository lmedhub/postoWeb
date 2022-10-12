import React from "react";
import "./Contatos.css";


export default function Contatos(props) {

  return (
    <div className="contato">
      <p>Nome: {props.nome}</p>
      <p>Empresa: {props.empresa}</p>
      <p>Cargo: {props.cargo}</p>
      <p>Email: {props.email}</p>
      <button>Deletar</button>
      <hr />
    </div>
  );
}
