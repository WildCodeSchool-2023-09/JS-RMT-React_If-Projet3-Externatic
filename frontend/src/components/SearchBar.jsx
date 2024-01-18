import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { CiSearch } from "react-icons/ci";

import "./SearchBar.css";

function SearchBar() {
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
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Un job en particulier ?"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        className="search-button"
        aria-label="Search Job"
        onClick={handleSearchClick}
      >
        <CiSearch />
      </button>
    </div>
  );
}

export default SearchBar;
