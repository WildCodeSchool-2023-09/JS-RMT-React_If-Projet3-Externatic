import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import "./SearchBar.css";

function SearchBar({ page }) {
  const navigate = useNavigate();
  const [searchedJob, setSearchedJob] = useState("");
  const handleChange = (e) => {
    setSearchedJob(e.target.value);
  };
  const handleSearchClick = () => {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set("search", searchedJob);
    const newUrl = `/jobs?${urlSearchParams}`;
    navigate(newUrl);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };
  return (
    <div className={`search-bar bar-${page}`}>
      <input
        className={`search-input input-${page}`}
        type="text"
        placeholder={page !== "job" ? "Un job en particulier ?" : "Rechercher"}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        className={`search-button button-${page}`}
        aria-label="Search Job"
        onClick={handleSearchClick}
      >
        <CiSearch />
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default SearchBar;
