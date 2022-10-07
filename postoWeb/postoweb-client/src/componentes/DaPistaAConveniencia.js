import React from "react";
import AOS from 'aos';

import "./DaPistaAConveniencia.css";
import DemoModalButton from "./Modals/DemoModalButton";

import hero2stockman from "../assets/daPista-stock.jpg";
import chartSVG from "../assets/chart-line-solid.svg";
import userSVG from "../assets/user-group-solid.svg";
import handSVG from "../assets/hand-holding-heart-solid.svg";
import locationSVG from "../assets/location-dot-solid.svg";

export default function DaPistaAConveniencia() {

  const removePCsymbol = true;

  React.useEffect(() => {
    AOS.init({ duration : 1000 });
  }, [])


  return (
    <section className="hero-2-container">
      <span className="esquerda">
        <img src={hero2stockman} id="hero2stockman" />
      </span>
      <span className="direita">
        <div className="titulo-container" data-aos="fade-right">
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
        <div className="nossos-numeros" data-aos="zoom-in">
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
              <span className="num-li-span-top">
                <img src={chartSVG} className="list-svg" />
                <p>
                  <b style={{ fontSize: "24px", color: "black" }}>700</b>{" "}
                  <b style={{ fontSize: "19px", color: "black" }}>Milhões</b>{" "}
                  <br /> de vendas processadas
                </p>
              </span>
            </li>
            <li>
              <span className="num-li-span">
                <img src={handSVG} className="list-svg" />
                <p>
                  <b style={{ fontSize: "19px", color: "#3b3a3a" }}>+ de</b>{" "}
                  <b style={{ fontSize: "24px", color: "black" }}>4.000</b>{" "}
                  <br /> clientes atendidos
                </p>
              </span>
            </li>
            <li>
              <span className="num-li-span-top">
                <img src={userSVG} className="list-svg" />
                <p>
                  <b style={{ fontSize: "19px", color: "#3b3a3a" }}>+ de</b>{" "}
                  <b style={{ fontSize: "24px", color: "black" }}>70 mil</b>{" "}
                  <br /> usuários cadastrados
                </p>
              </span>
            </li>
            <li>
              <span className="num-li-span">
                <img
                  src={locationSVG}
                  className="list-svg"
                  style={{ width: "30px" }}
                />
                <p>
                  <b style={{ fontSize: "19px", color: "#3b3a3a" }}>+ de</b>{" "}
                  <b style={{ fontSize: "24px", color: "black" }}>55</b> <br />{" "}
                  revendas em todo Brasil
                </p>
              </span>
            </li>
          </ul>
        </div>
      </span>
    </section>
  );
}
