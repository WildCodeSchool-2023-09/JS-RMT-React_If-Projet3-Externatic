import React from "react";
import PropTypes from "prop-types";
import "./CompanyCard.css";

function CompanyCard({ company }) {
  return (
    <div>
      <div className="companyCardImage">
        <img className="logoImage" src={company.image_url} alt={company.name} />
      </div>
    </div>
  );
}

CompanyCard.propTypes = {
  company: PropTypes.shape({
    image_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default CompanyCard;
