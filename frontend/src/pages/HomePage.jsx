// HomePage.jsx
import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import "./HomePage.css";
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
    </div>
  );
}

export default HomePage;
