import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import connexion from "../services/connexion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselCompanies.css";

function CarouselCompanies() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  function updateDimension() {
    setWindowSize(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, []);

  const breakpoints = {
    1500: 4,
    1200: 3,
    820: 2,
    380: 1,
  };

  const defaultSlidesToShow = 4;

  const getSlidesToShow = () => {
    const sortedBreakpoints = Object.keys(breakpoints).sort((a, b) => b - a);
    for (let i = 0; i < sortedBreakpoints.length; i += 1) {
      const breakpoint = sortedBreakpoints[i];
      if (windowSize >= breakpoint) {
        return breakpoints[breakpoint];
      }
    }
    return defaultSlidesToShow;
  };

  const slidesToShow = getSlidesToShow();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const response = await connexion.get("/companies");
        setCompanies(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getCompanies();
  }, []);

  return (
    <div className="carousel-container">
      <h1 className="title-caroussel">Ils nous font confiance</h1>
      <div className="img-card-carrousel">
        <Slider
          infinite={settings.infinite}
          speed={settings.speed}
          slidesToScroll={settings.slidesToScroll}
          slidesToShow={settings.slidesToShow}
          initialSlide={settings.initialSlide}
          Z
          autoplay={settings.autoplay}
          autoplaySpeed={settings.autoplaySpeed}
        >
          {companies.map((compagny) => (
            <div key={compagny.id} className="img-caroussel">
              <img src={compagny.image_url} alt={compagny.name} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CarouselCompanies;
