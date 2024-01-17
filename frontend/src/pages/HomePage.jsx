import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import "./HomePage.css";
import barrefleche from "../public/Group 102.png";
import succes from "../public/Group 90.png";
import offer from "../public/Group 91.png";
import network from "../public/Group 92.png";
import free from "../public/Group 93.png";
import SearchBar from "../components/SearchBar";

function HomePage() {
  const allJobsData = useLoaderData();

  return (
    <div>
      HomePage
      <SearchBar />
      <h2>Latest Jobs</h2>
      <Carousel jobs={allJobsData} />
      <div className="all-button">
        <Link className="button-jobs" to="/jobs">
          Plus d'offre d'emploi &gt;&gt;&gt;
        </Link>
      </div>
      <h1 className="join-us">Nous Rejoindre</h1>
      <div className="barre-fleche-container">
        <img className="barre-fleche" src={barrefleche} alt="barre-fleche" />
        <div className="small-image-container small-image-1">
          <img src={succes} alt="Success" />
        </div>
        <div className="small-image-container small-image-2">
          <img src={offer} alt="Offer" />
        </div>
        <div className="small-image-container small-image-3">
          <img src={network} alt="Network" />
        </div>
        <div className="small-image-container small-image-4">
          <img src={free} alt="Free" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
