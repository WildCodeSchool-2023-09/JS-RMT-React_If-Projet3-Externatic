import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import connexion from "../services/connexion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselCompanies.css";

function CarouselCompanies() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,
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
    <div className="carousel-wrapper">
      <Slider
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToScroll={settings.slidesToScroll}
        slidesToShow={settings.slidesToShow}
        initialSlide={settings.initialSlide}
        autoplay={settings.autoplay}
        autoplaySpeed={settings.autoplaySpeed}
      >
        {companies.map((compagny) => (
          <div key={compagny.id}>
            <img src={compagny.image_url} alt={compagny.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselCompanies;
