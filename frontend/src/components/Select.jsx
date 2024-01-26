import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import connexion from "../services/connexion";

function Select({ label, text, url, criteria, handleSelect, name }) {
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

  return (
    <label className="label">
      {label}
      <select onChange={handleSelect} name={name} required>
        <option value="">{text}</option>
        {list.map((el) => (
          <option value={el.id}>{el[criteria]}</option>
        ))}
      </select>
    </label>
  );
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  criteria: PropTypes.string.isRequired,
  handleSelect: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Select;
