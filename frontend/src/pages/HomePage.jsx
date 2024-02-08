import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import Carousel from "../components/CarouselJobs";
import "./HomePage.css";
import bararrow from "../assets/Group102.png";
import succes from "../assets/Group90.png";
import offer from "../assets/Group91.png";
import network from "../assets/Group92.png";
import free from "../assets/Group93.png";
import SearchBar from "../components/SearchBar";
import CarouselCompanies from "../components/CarouselCompanies";
import account from "../assets/Group103.png";
import post from "../assets/Group104.png";
import consul from "../assets/Group105.png";

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
        <SearchBar page="home" />
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
          <img src={account} alt="account" className="account-img" />
          <img src={post} alt="post" className="post-img" />
          <div className="consul-container">
            <img src={consul} alt="consul" className="consul-img" />
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
