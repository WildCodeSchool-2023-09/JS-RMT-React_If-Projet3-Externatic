import React from "react";
import PropTypes from "prop-types";

import "./Pagination.css";

function Pagination({ cardsPerPage, totalCards, currentPage, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul className="pagination-list">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`pagination-item ${
              currentPage === number ? "active" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => paginate(number)}
              className="pagination-link"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  cardsPerPage: PropTypes.number.isRequired,
  totalCards: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
