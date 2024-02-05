import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import connexion from "../../services/connexion";

import "./AdminCompanyCard.css";

function AdminCompanyCard({ element, specific, setSpecific }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleDeleteClick = async (id) => {
    try {
      await connexion.delete(`/companies/${id}`);
      const updatedSpecific = specific.filter((item) => item.id !== id);
      setSpecific(updatedSpecific);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="admin-company-card">
      <div className="admin-company-img-container">
        <img
          src={element.image_url}
          alt={element.name}
          className="company-img"
        />
      </div>

      <div className="admin-company-buttons-container">
        <button
          type="button"
          className="connection-button admin-button"
          onClick={() => handleDeleteClick(element.id)}
        >
          Supprimer
        </button>
        <button
          type="button"
          className="connection-button admin-button"
          onClick={() => navigate(`${location.pathname}/${element.id}`)}
        >
          Modifier
        </button>
      </div>
    </div>
  );
}

AdminCompanyCard.propTypes = {
  element: PropTypes.shape().isRequired,
  specific: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setSpecific: PropTypes.func.isRequired,
};

export default AdminCompanyCard;
