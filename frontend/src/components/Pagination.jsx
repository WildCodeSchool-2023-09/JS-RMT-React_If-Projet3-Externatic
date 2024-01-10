import React from "react";
import PropTypes from "prop-types";

import "./Pagination.css";

function Pagination({ pageNb }) {
  return (
    <nav className="pagination">
      <ol>
        {Array.from({ length: pageNb }, (_, index) => (
          <li key={index + 1}>{index + 1}</li>
        ))}
      </ol>
    </nav>
  );
}

Pagination.propTypes = {
  pageNb: PropTypes.number.isRequired,
};

export default Pagination;
