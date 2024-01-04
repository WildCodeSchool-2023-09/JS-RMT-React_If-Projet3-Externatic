import React from "react";
import PropTypes from "prop-types";

import FilterSelect from "./FilterSelect";

import "./FiltersBar.css";

function extractUnique(jobs, property) {
  const uniqueSet = new Set();
  jobs.forEach((job) => {
    if (job[property] && job[property].length > 0) {
      uniqueSet.add(job[property]);
    }
  });
  return Array.from(uniqueSet);
}

function FiltersBar({
  allJobs,
  selectedLanguage,
  selectedLocation,
  onLanguageChange,
  onLocationChange,
  onSearchChange,
}) {
  const allLanguages = extractUnique(allJobs, "language");
  const allLocations = extractUnique(allJobs, "location");

  return (
    <div className="filters-bar">
      <FilterSelect
        name="Langages"
        values={allLanguages}
        selectedValue={selectedLanguage}
        onChange={(value) => onLanguageChange(value)}
      />
      <FilterSelect
        name="Villes"
        values={allLocations}
        selectedValue={selectedLocation}
        onChange={(value) => onLocationChange(value)}
      />
      <input
        className="search-input"
        type="text"
        placeholder="Rechercher un emploi"
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default FiltersBar;

FiltersBar.propTypes = {
  allJobs: PropTypes.arrayOf(
    PropTypes.shape({
      language: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedLanguage: PropTypes.string.isRequired,
  selectedLocation: PropTypes.string.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
  onLocationChange: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};
