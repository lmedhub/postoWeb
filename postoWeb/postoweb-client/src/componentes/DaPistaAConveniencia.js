import React from "react";
import "./DaPistaAConveniencia.css";
import DemoModalButton from "./Modals/DemoModalButton";

import hero2stockman from "../assets/daPista-stock.jpg";
import chartSVG from "../assets/chart-line-solid.svg";
import userSVG from "../assets/user-group-solid.svg";
import handSVG from "../assets/hand-holding-heart-solid.svg";
import locationSVG from "../assets/location-dot-solid.svg";

export default function DaPistaAConveniencia() {
  const removePCsymbol = true;

  return (
    <section className="hero-2-container">
      <span className="esquerda">
        <img src={hero2stockman} />
      </span>
      <span className="direita">
        <div className="titulo-container">
          <hr className="dapista-hr"></hr>
          <div className="titulo">
            <h2
              style={{
                color: "darkslateblue",
                fontSize: "2em",
                fontWeight: "400",
              }}
            >
              Da pista à conveniência
            </h2>
            <h1
              style={{
                color: "rgb(59, 58, 58)",
                fontSize: "2.2em",
                fontWeight: "500",
              }}
            >
              Solução em gestão mais{" "}
              <b>
                completa <br />e moderna
              </b>{" "}
              do mercado.
            </h1>
            <DemoModalButton removePCsymbol={true} />
          </div>
        </div>
        <div className="nossos-numeros">
          <h2
            style={{
              color: "darkslateblue",
              fontSize: "2em",
              fontWeight: "400",
            }}
          >
            Nossos números
          </h2>
          <ul className="numeros-ul">
            <li>
              <span>
                <img src={chartSVG} className="list-svg" />
                <b>700 Milhões</b> <br /> de vendas processadas
              </span>
            </li>
            <li>
              <span>
                <img src={handSVG} className="list-svg" />
                <>
                  + de <b>4.000</b> <br /> clientes atendidos
                </>
              </span>
            </li>
            <li>
              <span>
                <img src={userSVG} className="list-svg" />+ de <b>70.000</b>{" "}
                <br /> usuários cadastrados
              </span>
            </li>
            <li>
              <span>
                <img src={locationSVG} className="list-svg" />+ de <b>55</b>{" "}
                <br /> revendas em todo Brasil
              </span>
            </li>
          </ul>
        </div>
      </span>
    </section>
  );
}
