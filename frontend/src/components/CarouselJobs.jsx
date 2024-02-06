import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import JobCard from "./JobCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

function Carousel({ jobs }) {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  function updateDimension() {
    setWindowSize(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", updateDimension);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: windowSize > 820 ? 4 : 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="carousel-wrapper">
      <Slider
        dots={settings.dots}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToScroll={settings.slidesToScroll}
        slidesToShow={settings.slidesToShow}
        initialSlide={settings.initialSlide}
        autoplay={settings.autoplay}
        autoplaySpeed={settings.autoplaySpeed}
      >
        {jobs.map((job) => (
          <div key={job.id}>
            <JobCard job={job} cardStyle="card-carrousel" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

Carousel.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description_position: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      salary: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
      position_category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Carousel;
