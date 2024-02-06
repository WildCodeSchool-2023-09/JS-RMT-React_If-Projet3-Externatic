import { useState } from "react";
import PropTypes from "prop-types";

import { FiPlus, FiMinus } from "react-icons/fi";

import "./Collapser.css";

function Collapser({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapser ${isOpen ? "open" : ""}`}>
      <button
        type="button"
        className="collapser-title"
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        {" "}
        <div className="button-content">
          <h3 className="collapser-title">{title}</h3>
          {isOpen ? <FiMinus /> : <FiPlus />}
        </div>
      </button>
      {isOpen && <div className="collapser-content">{content}</div>}
    </div>
  );
}

Collapser.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Collapser;
