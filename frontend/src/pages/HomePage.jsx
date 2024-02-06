import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import Carousel from "../components/CarouselJobs";
import "./HomePage.css";
import bararrow from "../public/Group 102.png";
import succes from "../public/Group 90.png";
import offer from "../public/Group 91.png";
import network from "../public/Group 92.png";
import free from "../public/Group 93.png";
import SearchBar from "../components/SearchBar";
import CarouselCompanies from "../components/CarouselCompanies";
import account from "../public/Group 103.png";
import post from "../public/Group 104.png";
import consul from "../public/Group 105.png";

function HomePage() {
  const allJobsData = useLoaderData();

  return (
    <div>
      <div className="search-area">
        <p className="title">
          <h1 className="externatic-red">Externatic,</h1>
          <h2 className="subtitle-externatic-red">
            plus qu'un cabinet de recrutement informatique
          </h2>
        </p>
        <SearchBar />
      </div>
      <div className="red-line" />
      <Carousel jobs={allJobsData} />
      <div className="all-button">
        <Link className="button-jobs" to="/jobs">
          Plus d'offre d'emploi &gt;&gt;&gt;
        </Link>
      </div>
      <h2 className="join-us">Nous Rejoindre</h2>
      <div className="join-us-container">
        <div className="bar-arrow-container">
          <img className="bar-arrow" src={bararrow} alt="bar-arrow" />
          <div className="small-image-container small-image-1">
            <img src={succes} alt="Success" className="img-home-small" />
          </div>
          <div className="small-image-container small-image-2">
            <img src={offer} alt="Offer" className="img-home-small" />
          </div>
          <div className="small-image-container small-image-3">
            <img src={network} alt="Network" className="img-home-small" />
          </div>
          <div className="small-image-container small-image-4">
            <img src={free} alt="Free" className="img-home-small" />
          </div>
        </div>
      </div>
      <div className="red-line" />
      <CarouselCompanies />
      <div className="red-line" />
      <h2 className="join-us">Comment ça marche ?</h2>
      <div className="tuto-accounty">
        <div className="tuto-account">
          <img src={account} alt="account" />
          <img src={post} alt="post" />
          <div className="consul-container">
            <img src={consul} alt="consul" />
          </div>
        </div>
      </div>
      <h2 className="join-signup">On se lance ?</h2>
      <div className="all-button">
        <Link className="button-signup" to="/register">
          Se connecter
        </Link>
      </div>
    </div>
  );
}
export default HomePage;
