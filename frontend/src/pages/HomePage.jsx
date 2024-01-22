import React from "react";
import SearchBar from "../components/SearchBar";
import CarouselCompanies from "../components/CarouselCompanies";

import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <div className="search-area">
        <div className="title">
          <h1 className="externatic-red">Externatic,</h1>
          <h2>plus qu'un cabinet de recrutement informatique</h2>
        </div>
        <SearchBar />
      </div>
      <CarouselCompanies />
    </div>
  );
}

export default HomePage;
