import React, { useRef } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "./FacilidadeAdmin.css";

import admin1 from "../assets/carousel-images/dashboard-admin-1.jpg";
import admin2 from "../assets/carousel-images/dashboard-admin-2.jpg";
import admin3 from "../assets/carousel-images/dashboard-admin-3.jpg";
import admin4 from "../assets/carousel-images/dashboard-admin-4.jpg";
import admin5 from "../assets/carousel-images/dashboard-admin-5.jpg";

export default function FacilidadeAdmin() {
  const sliderRef = useRef(null);

  var settings = {
    infinite: false,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="hero-3-container">
      <header>
        <p
          data-aos="zoom-in"
          style={{
            color: "darkslateblue",
            fontSize: "1em",
            fontWeight: "400",
          }}
        >
          Facilidade para administrar o seu negócio.
        </p>
        <p
          data-aos="zoom-in"
          style={{
            color: "rgb(59, 58, 58)",
            fontSize: "1.1em",
            fontWeight: "500",
          }}
        >
          A Gestão da sua empresa em apenas um clique
        </p>
      </header>
      <div className="slider-menu">
        <button
          onClick={() => {
            sliderRef.current.slickGoTo(0);
          }}
          className="slick-button"
        >
          <i className="bi bi-laptop" />
          Desktop
        </button>
        <button
          onClick={() => {
            sliderRef.current.slickGoTo(1);
          }}
          className="slick-button"
        >
          <i className="bi bi-phone" />
          Mobile
        </button>
        <button
          onClick={() => {
            sliderRef.current.slickGoTo(2);
          }}
          className="slick-button"
        >
          <i className="bi bi-phone-landscape" />
          POS
        </button>
        <button
          onClick={() => {
            sliderRef.current.slickGoTo(3);
          }}
          className="slick-button"
        >
          <i className="bi bi-tv" />
          Totem
        </button>
        <button
          onClick={() => {
            sliderRef.current.slickGoTo(4);
          }}
          className="slick-button"
        >
          <i className="bi bi-tablet" />
          Tablet
        </button>
      </div>
      <div className="gestao-container">
        <Slider {...settings} ref={sliderRef}>
          <article className="gestao-carousel-item">
            <img src={admin1} />
          </article>
          <article className="gestao-carousel-item">
            <img src={admin2} />
          </article>
          <article className="gestao-carousel-item">
            <img src={admin3} />
          </article>
          <article className="gestao-carousel-item">
            <img src={admin4} />
          </article>
          <article className="gestao-carousel-item">
            <img src={admin5} />
          </article>
        </Slider>
      </div>
    </section>
  );
}
