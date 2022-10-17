import React, { useRef, useState} from "react";
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

  const [currSlide, setCurrSlide] = useState(0)

  var settings = {
    infinite: false,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange(currentSlide) {
      setCurrSlide(currentSlide)    
    },
  }

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
        <li
          onClick={() => {
            sliderRef.current.slickGoTo(0); 
            setCurrSlide(0)
          }}
          className={currSlide===0 ? "slick-button-active" : "slick-button"}
        >
          <i className="bi bi-laptop" />
          Desktop
        </li>
        <li
          onClick={() => {
            sliderRef.current.slickGoTo(1)
            setCurrSlide(1)
          }}
          className={currSlide===1 ? "slick-button-active" : "slick-button"}
        >
          <i className="bi bi-phone" />
          Mobile
        </li>
        <li
          onClick={() => {
            sliderRef.current.slickGoTo(2);
            setCurrSlide(2)
          }}
          className={currSlide===2 ? "slick-button-active" : "slick-button"}
        >
          <i className="bi bi-credit-card"/ >
          POS
        </li>
        <li
          onClick={() => {
            sliderRef.current.slickGoTo(3);
            setCurrSlide(3)
          }}
          className={currSlide===3 ? "slick-button-active" : "slick-button"}
        >
          <i className="bi bi-tv" />
          Totem
        </li>
        <li
          onClick={() => {
            sliderRef.current.slickGoTo(4);
            setCurrSlide(4)
          }}
          className={currSlide===4 ? "slick-button-active" : "slick-button"}
        >
          <i className="bi bi-tablet" />
          Tablet
        </li>
      </div>
      <div className="gestao-container">
        <Slider {...settings} ref={sliderRef}>
          <article className="gestao-carousel-item">
            <img src={admin1} alt="notebook" />
          </article>
          <article className="gestao-carousel-item">
            <img src={admin2} alt="mobile"/>
          </article>
          <article className="gestao-carousel-item">
            <img src={admin3} alt="maquininha"/>
          </article>
          <article className="gestao-carousel-item">
            <img src={admin4} alt="totem"/>
          </article>
          <article className="gestao-carousel-item">
            <img src={admin5} alt="tablet"/>
          </article>
        </Slider>
      </div>
    </section>
  );
}
