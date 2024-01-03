import React from "react";
import PropTypes from "prop-types";

function FilterSelect({ name, values }) {
  return (
    <div>
      <label>
        <select
          name={`selected${name}`}
          defaultValue={{ label: "Select ", value: 0 }}
        >
          <option>{`Selection ${name}`}</option>
          {values.map((value) => (
            <option key={value} value={value}>
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
};
