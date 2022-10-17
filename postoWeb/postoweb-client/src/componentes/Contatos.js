import Axios from "axios";
import "./Contatos.css";
import { useState } from "react";

export default function Contatos(props) {
  const [listContacts, setListContacts] = useState([]);

  function getContatos(id) {
    Axios.get("http://localhost:3001/contatos", {}).then((response) =>
      setListContacts(response.data)
    );
  }
  return (
    <>
      <header className="admin-header">ADMIN</header>
      {getContatos()}
      {listContacts?.map((val, key) => {
        return (
          <ul className="contact-card">
            <li className="contact" key={val.id}>
              <div className="contact-items">
                <p className="contact-item">Nome: {val.nome}</p>
                <p className="contact-item"> Empresa: {val.empresa}</p>
                <p className="contact-item">Cargo: {val.cargo}</p>
                <p className="contact-item">Email: {val.email}</p>
              </div>
              <button className="delete-btn">Deletar</button>
            </li>
          </ul>
        );
      })}
    </>
  );
}
