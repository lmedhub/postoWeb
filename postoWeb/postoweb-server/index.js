const express = require("express");
const app = express();
const mysql2 = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql2.createConnection({
  user: "root",
  host: "localhost",
  password: "lucas123",
  database: "postowebclone",
});

app.post("/create", (req, res) => {
  const nome = req.body.nome;
  const empresa = req.body.empresa;
  const cargo = req.body.cargo;
  const email = req.body.email;

  app.get("/contatos", (req, res) => {
    db.query("SELECT * FROM contatos employees", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  db.query(
    "INSERT INTO contatos (nome, empresa, cargo, email) VALUES (?,?,?,?)",
    [nome, empresa, cargo, email],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Valores enviados");
      }
    }
  );
});

app.delete('/delete:id'), (req, res) => {
  const id = req.params.id
  db.query("DELETE FROM contatos WHERE id = ?", id, (err, result) => {
    if(err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
}

app.listen(3001, () => console.log("Hey"));
