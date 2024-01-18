import React from "react";
import SearchBar from "../components/SearchBar";
import CarouselCompanies from "../components/CarouselCompanies";

import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <div className="search-area">
        <p className="title">
          <div className="externatic-red">Externatic,</div>
          <h1>plus qu'un cabinet de recrutement informatique</h1>
        </p>
        <SearchBar />
      </div>
      <CarouselCompanies />
    </div>
  );
}

export default HomePage;
