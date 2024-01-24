import { useState } from "react";
import PropTypes from "prop-types";

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
        {title}
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
