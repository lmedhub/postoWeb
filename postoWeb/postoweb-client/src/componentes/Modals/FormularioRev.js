import React, { useState } from "react";
import Axios from "axios";
import Contatos from "../Contatos";
import "./FormularioRev.css";


export default function FormularioRev() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [cargo, setCargo] = useState("");

  const [listaContatos, setListaContatos] = useState([]);

  function addContato() {
    Axios.post("http://localhost:3001/create", {
      nome: nome,
      empresa: empresa,
      cargo: cargo,
      email: email,
    }).then(() => {
      setListaContatos([
        ...listaContatos,
        {
          nome: nome,
          empresa: empresa,
          cargo: cargo,
          email: email,
        },
      ]);
    });
  }

  function getContatos(id) {
    Axios.get("http://localhost:3001/contatos", {}).then((response) =>
      setListaContatos(response.data)
    );
  }

  return (
    <div>
      <form>
        <div className="informacao">
          <div className="group">
            <div className="label-caixa">
              <label>Nome:</label>
              <input
                type="text"
                onChange={(event) => {
                  setNome(event.target.value);
                }}
              />
            </div>
            <div className="label-caixa">
              <label>Empresa:</label>
              <input
                type="text"
                onChange={(event) => {
                  setEmpresa(event.target.value);
                }}
              />
            </div>
            <div className="label-caixa">
              <div className="group">
                <label>Cargo:</label>
                <input
                  type="text"
                  onChange={(event) => {
                    setCargo(event.target.value);
                  }}
                />
              </div>
              <div className="label-caixa">
                <label>Email*:</label>
                <input
                  type="email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <p style={{ color: "rgb(191, 193, 200)" }}>
          Ao informar meus dados, eu concordo com a Política de Privacidade.
        </p>
        <button onClick={addContato} type="submit" className="enviar-button">
          Enviar Solicitação
        </button>
      </form>
      <div className="contatos">
        <button className="mostrarButton" onClick={getContatos}>
          Mostrar Contatos{" (Provisório)"}
        </button>
        {listaContatos.map((val, key) => {
          return (
            <>
              <Contatos
                nome={val.nome}
                empresa={val.empresa}
                cargo={val.cargo}
                email={val.email}
              />
            </>
            
          );
        })}
      </div>
    </div>
  );
}
