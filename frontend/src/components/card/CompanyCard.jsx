import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./CompanyCard.css";

function CompanyCard({ company }) {
  return (
    <div>
      <div className="companyCardImage">
        <Link to={`/consultants/company/${company.id}`}>
          <img
            className="logoImage"
            src={company.image_url}
            alt={company.name}
          />
        </Link>
      </div>
    </div>
  );
}

CompanyCard.propTypes = {
  company: PropTypes.shape({
    image_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default CompanyCard;
