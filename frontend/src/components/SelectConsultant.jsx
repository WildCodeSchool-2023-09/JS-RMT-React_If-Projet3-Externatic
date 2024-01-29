import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import connexion from "../services/connexion";

import colorStyles from "../assets/selectStyle";

function SelectConsultant({ label, url, criteria, handleSelect, name }) {
  const [list, setList] = useState([]);

  const getList = async () => {
    try {
      const result = await connexion.get(`/${url}`).then((res) => res.data);
      setList(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const standardizeEvent = (option) => {
    handleSelect({ target: { name, value: option.value } });
  };

  return (
    <label className="label">
      {label}
      <Select
        onChange={standardizeEvent}
        required
        options={list.map((el) => ({
          value: el.id,
          label: el[criteria],
        }))}
        styles={colorStyles}
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
};

export default SelectConsultant;
