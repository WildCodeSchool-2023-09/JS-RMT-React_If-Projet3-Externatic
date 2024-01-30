import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import connexion from "../../services/connexion";

function AdminCompanyCard({ element, specific, setSpecific }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleDeleteClick = async (id) => {
    try {
      await connexion.delete(`/companies/${id}`);
      const updatedElement = specific.filter((item) => item.id !== id);
      setSpecific(updatedElement);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="admin-company-card">
      <div className="admin-card-buttons-container">
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
          Editer
        </button>
      </div>
      <img
        src={element.image_url}
        alt={element.name}
        className="compagny-img"
      />
    </div>
  );
}

AdminCompanyCard.propTypes = {
  element: PropTypes.objectOf(PropTypes.string).isRequired,
  specific: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSpecific: PropTypes.func.isRequired,
};

export default AdminCompanyCard;
