import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import connexion from "../services/connexion";

import colorStyles from "../assets/selectStyle";

function SelectConsultant({
  label,
  url,
  criteria,
  handleSelect,
  name,
  company,
}) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const result = await connexion.get(`/${url}`);
        const formattedOptions = result.data.map((item) => ({
          value: item.id,
          label: item[criteria],
        }));
        setOptions(formattedOptions);
      } catch (error) {
        console.error(error);
      }
    };

    getList();
  }, [url, criteria]);

  const standardizeEvent = (selectedOption) => {
    handleSelect({
      target: { name, value: selectedOption ? selectedOption.value : "" },
    });
  };

  const value = company
    ? options.find((option) => String(option.value) === String(company))
    : null;

  return (
    <label className="label">
      {label}
      <Select
        onChange={standardizeEvent}
        value={value}
        options={options}
        styles={colorStyles}
        isClearable
      />
    </label>
  );
}

SelectConsultant.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  criteria: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default SelectConsultant;
