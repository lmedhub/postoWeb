import React from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Produtos.css";

import webpdv from "../assets/carousel-images/pdv.jpg";
import webposto from "../assets/carousel-images/Posto.jpg";
import webpay from "../assets/carousel-images/webPosto_pay.jpg";
import webconv from "../assets/carousel-images/webConveniencia.jpg";
import webfrota from "../assets/carousel-images/webFrota.jpg";
import webmobile from "../assets/carousel-images/webPosto_mobile.jpg";
import qualitybank from "../assets/carousel-images/qualityBank.jpg";

export default function Produtos(props) {
  var settings = {
    infinite: false,
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  React.useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section data-aos="fade-up" className="produtos">
      <div className="produtos-header">
        <h2 className="produtos-titulo">Produtos</h2>
        <h1 className="produtos-subtitulo">Soluções inovadoras</h1>
        <hr className="produtos-hr"></hr>
      </div>
      <div className="produtos-carousel">
        <Slider {...settings}>
          <div className="carousel-item-container">
            <img className="imagem-carousel" src={webpdv}></img>
            <div className="imagem-desc">
              <h2>POSTOWEB PDV</h2>
              <p>
                Reduza perdas e aumente a produtividade! Tenha mais controle do
                seu estoque e vendas direto do celular.
              </p>
            </div>
          </div>
          <div className="carousel-item-container">
            <img className="imagem-carousel" src={webposto}></img>
            <div className="imagem-desc">
              <h2>POSTOWEB</h2>
              <p>
                Tudo para a gestão da sua empresa em um só lugar. Ganhe tempo
                para crescer com nosso sistema de gestão.
              </p>
            </div>
          </div>
          <div className="carousel-item-container">
            <img className="imagem-carousel" src={webpay}></img>
            <div className="imagem-desc">
              <h2>POSTOWEB PAY</h2>
              <p>
                Tenha todo processo de vendas integrado à bomba e sem a
                necessidade de lançamentos pelo frentista.
              </p>
            </div>
          </div>
          <div className="carousel-item-container">
            <img className="imagem-carousel" src={webmobile}></img>
            <div className="imagem-desc">
              <h2>POSTOWEB MOBILE</h2>
              <p>
                A mobilidade que você precisa! Faça a troca de preço das bombas
                direto pelo celular de forma segura.
              </p>
            </div>
          </div>
          <div className="carousel-item-container">
            <img className="imagem-carousel" src={webfrota}></img>
            <div className="imagem-desc">
              <h2>POSTOWEB</h2>
              <p>
                Atendimento personalizado e autonomia para cliente gerenciar a
                frota de forma prática e com segurança.{" "}
              </p>
            </div>
          </div>
          <div className="carousel-item-container">
            <img className="imagem-carousel" src={qualitybank}></img>
            <div className="imagem-desc">
              <h2 className="imagem-desc-titulo">POSTOWEB PIX</h2>
              <p>
                Simples e seguro! Integre o PIX as suas formas de pagamento e
                leve mais agilidade para o seu negócio.{" "}
              </p>
            </div>
          </div>
          <div className="carousel-item-container">
            <img className="imagem-carousel" src={webconv}></img>
            <div className="imagem-desc">
              <h2 className="imagem-desc-titulo">POSTO CONVENIÊNCIA</h2>
              <p>
                Atendimento otimizado na sua conveniência com tela intuitiva e
                conferência de estoque pelo celular.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
