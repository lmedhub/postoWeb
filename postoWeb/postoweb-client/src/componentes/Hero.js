import React from "react";
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import ModalButton from "./Modals/ModalButton";
import "./Hero.css";
import stockphotohero from '../assets/stock-photo-hero.jpeg';


export default function Hero() {

  const removePCsymbol = true

  React.useEffect(() => {
    AOS.init({ duration : 1500 });
  }, [])

  return (
    <section className="hero">
      <div data-aos="fade-left" className="esquerda">
        <header>
          <h1 className="header">
            SEU POSTO
            <br />
            <b className="conectado">CONECTADO</b>
            <br />
            AO FUTURO!
          </h1>
        </header>
        <hr className="hero-hr"></hr>
        <p className="hero-paragraph">
          Especialista em sistemas para postos de combustíveis <br /> e lojas de
          conveniência.
        </p>
        <ModalButton removePCsymbol={true}/>
      </div>
      <div>
        <img src={stockphotohero} alt="foto de um homem apontado o dedo para o cabeçalho da página"></img>
      </div>
    </section>
  );
}
