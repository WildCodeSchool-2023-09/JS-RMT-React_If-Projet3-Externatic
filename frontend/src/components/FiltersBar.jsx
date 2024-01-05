import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

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

  const languageOptions = allLanguages.map((lang) => ({
    value: lang,
    label: lang,
  }));

  const locationOptions = allLocations.map((loc) => ({
    value: loc,
    label: loc,
  }));

  const colorStyles = {
    control: (styles, { isSelected, isFocused }) => ({
      ...styles,
      backgroundColor: "white",
      borderColor: isSelected || isFocused ? "#ca2061" : "black",
      boxShadow: "none",
      ":hover": { borderColor: "#ca2061" },
    }),
    clearIndicator: (styles) => ({
      ...styles,
      cursor: "pointer",
      ":hover": { color: "red" },
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      cursor: "pointer",
    }),
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#ca2061" : "white",
        color: isFocused ? "white" : "black",
        cursor: isFocused ? "pointer" : "default",
      };
    },
    multiValue: (styles) => {
      return {
        ...styles,
        backgroundColor: "#ffd1e3",
      };
    },
    multiValueRemove: (styles) => {
      return {
        ...styles,
        cursor: "pointer",
        ":hover": { color: "red" },
      };
    },
  };

  return (
    <div className="filters-bar">
      <Select
        className="filter-select"
        options={languageOptions}
        value={languageOptions.filter((option) =>
          selectedLanguage.includes(option.value)
        )}
        onChange={(selectedOptions) => onLanguageChange(selectedOptions)}
        isMulti
        placeholder="Sélectionner un langage"
        styles={colorStyles}
      />
      <Select
        className="filter-select"
        options={locationOptions}
        value={locationOptions.filter((option) =>
          selectedLocation.includes(option.value)
        )}
        onChange={(selectedOptions) => onLocationChange(selectedOptions)}
        isMulti
        placeholder="Sélectionner une ville"
        styles={colorStyles}
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
  selectedLanguage: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedLocation: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLanguageChange: PropTypes.func.isRequired,
  onLocationChange: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};
