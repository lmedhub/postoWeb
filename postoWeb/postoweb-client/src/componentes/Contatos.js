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
    <div className="contacts-container">
      {getContatos()}
      {listContacts?.map((val, key) => {
        return (
          <ul className="contact-list">
            <li className="contact" key={val.id}>
              nome={val.nome}
              empresa={val.empresa}
              cargo={val.cargo}
              email={val.email}
            </li>
          </ul>
        );
      })}
    </div>
  );
}
