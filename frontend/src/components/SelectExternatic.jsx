import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import colorStyles from "../assets/selectStyle";

function SelectExternatic({ filterType, optionsList, title, filterValue }) {
  const navigate = useNavigate();
  const location = useLocation();

  const getSelectedValuesFromUrl = () => {
    const urlSearchParams = new URLSearchParams(filterValue);
    const selectedValuesParam = urlSearchParams.get(filterType);

    return selectedValuesParam ? selectedValuesParam.split("|^|") : [];
  };

  const [selectedValues, setSelectedValues] = useState(
    getSelectedValuesFromUrl
  );

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(filterValue);

    if (selectedValues.length > 0) {
      urlSearchParams.set(filterType, selectedValues.join("|^|"));
    } else {
      urlSearchParams.delete(filterType);
    }

    const newUrl = `${location.pathname}?${urlSearchParams.toString()}`;
    navigate(newUrl);
  }, [selectedValues, filterType, filterValue, navigate, location.pathname]);

  return (
    <Select
      className="filter-select"
      options={optionsList.map((option, index) => ({
        value: option,
        label: option,
        key: index,
      }))}
      isMulti
      value={selectedValues.map((value) => ({
        value,
        label: value,
      }))}
      onChange={(selection) =>
        setSelectedValues(selection.map((option) => option.value))
      }
      placeholder={title}
      styles={colorStyles}
    />
  );
}

SelectExternatic.propTypes = {
  filterType: PropTypes.string.isRequired,
  optionsList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  title: PropTypes.string.isRequired,
  filterValue: PropTypes.string.isRequired,
};

export default SelectExternatic;
