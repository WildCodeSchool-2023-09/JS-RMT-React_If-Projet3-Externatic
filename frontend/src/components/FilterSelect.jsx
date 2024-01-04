import React from "react";
import PropTypes from "prop-types";

import "./FilterSelect.css";

function FilterSelect({ name, values, selectedValue, onChange }) {
  const handleChange = (event) => {
    const selected = event.target.value;
    onChange(selected);
  };

  return (
    <div>
      <label className="filter-label">
        <select
          className="filter-select"
          name={`selected${name}`}
          value={selectedValue}
          onChange={handleChange}
        >
          <option
            value=""
            className="filter-option"
          >{`Selection ${name}`}</option>
          {values.map((value) => (
            <option key={value} value={value} className="filter-option">
              {value}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default FilterSelect;

FilterSelect.propTypes = {
  name: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
