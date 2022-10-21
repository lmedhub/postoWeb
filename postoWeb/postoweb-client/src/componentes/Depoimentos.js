import React, { useRef } from "react";
import Slider from "react-slick";
import depovideothumb from "../assets/depo-video-thumb.jpg";

import "./Depoimentos.css";

export default function Depoimentos() {
  const slider = useRef();
  const nextButton = () => {
    slider.current.slickNext();
  };
  const previousButton = () => {
    slider.current.slickPrev();
  };

  var settings = {
    infinite: false,
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="depo-container">
      <div className="depo-esquerda">
        <div className="depo-titulo-container">
          <hr className="depo-hr"></hr>
          <div className="depo-titulo">
            <p
              style={{
                color: "darkslateblue",
                fontSize: "2em",
                fontWeight: "400",
              }}
            >
              Depoimentos
            </p>
            <p
              style={{
                color: "rgb(59, 58, 58)",
                fontSize: "2.2em",
                fontWeight: "500",
              }}
            >
              A razão do nosso esforço
            </p>
          </div>
        </div>
        <div className="depo-slider">
          <div className="depo-slider-buttons">
            <button className="slider-button" onClick={previousButton}>
              {"<"}
            </button>
            <button className="slider-button" onClick={nextButton}>
              {">"}
            </button>
          </div>

          <Slider {...settings} ref={(c) => (slider.current = c)}>
            <article className="depo-carousel-item">
              <p>
                “Nós já trabalhamos com vários sistemas, mas só o webPosto
                atendeu as necessidades de nossos 9 postos e lojas. Atendimento
                de qualidade e com agilidade faz toda a diferença em postos
                24hrs, usamos o sistema 100%.”
              </p>
              <p>XXXXX</p>
              <p>Alexandre Lopes</p>
              <p>Gerente Auto Posto Guarapari</p>
            </article>
            <article className="depo-carousel-item">
              <p>
                “Uma coisa muito boa do webPosto é o fato do banco de dados ser
                todo em nuvem. De qualquer lugar que tenha internet eu consigo
                trabalhar normalmente, tirar dúvidas, acessar relatórios e tomar
                decisões rapidamente.”
              </p>
              <p>XXXXX</p>

              <p>Rafael Garci</p>
              <p>Cliente postoWeb</p>
            </article>
            <article className="depo-carousel-item">
              <p>
                “O webPosto é muito bom, completo! Tem toda parte de
                gerenciamento via celular de modo muito prático e simplificado.
                Além disso, nós contamos com integrações incríveis que otimizam
                nossa gestão e fidelização de clientes. Estamos com eles há mais
                de 11 anos e esperamos que essa parceria perdure por muito
                tempo.”
              </p>
              <p>XXXXX</p>
              <p>Eduardo Luiz Mattiello</p>
              <p>Posto Enseada</p>
            </article>
            <article className="depo-carousel-item">
              <p>
                “O webPosto Mobile é uma ferramenta incrível pra gente fica
                rodando de um posto para o outro. Ter o sistema na palma da mão
                faz toda a diferença. O aplicativo do webPosto é um diferencial
                perante os concorrentes que conheço.”
              </p>
              <p>XXXXX</p>
              <p>Ronaldo Ramos</p>
              <p>Autoposto Rota 22</p>
            </article>
          </Slider>
        </div>
      </div>
      <div className="depo-direita">
              <img src={depovideothumb} alt="homem com notebook"/>
      </div>
    </div>
  );
}
