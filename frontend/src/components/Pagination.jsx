import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

import "./Pagination.css";

function Pagination({ pageNb, currentPage }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const getLocation = (location) => {
    return `&location=${location}`;
  };

  const handleClick = (page) => {
    const location = searchParams.get("location");
    navigate(`?page=${page}${location ? getLocation(location) : ""}`);
  };

  return (
    <nav className="pagination">
      <ol className="pagination-list">
        {Array(pageNb)
          .fill(null)
          .map((_, index) => (
            <li
              key={`page-${index + 1}`}
              className={`pagination-item ${
                index + 1 === currentPage ? "active" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => handleClick(index + 1)}
                className="pagination-link"
              >
                {index + 1}
              </button>
            </li>
          ))}
      </ol>
    </nav>
  );
}

Pagination.propTypes = {
  pageNb: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
