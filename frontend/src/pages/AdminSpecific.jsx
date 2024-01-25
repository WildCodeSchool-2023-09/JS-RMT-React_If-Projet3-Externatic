import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import connexion from "../services/connexion";

import "./AdminSpecific.css";
import "../components/reusable/button.css";

function AdminSpecific({ pageTitle, route }) {
  const [specific, setSpecific] = useState([]);

  useEffect(() => {
    const getSpecific = async () => {
      try {
        const response = await connexion.get(route);
        setSpecific(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getSpecific();
  }, []);

  const handleDeleteClick = async (id) => {
    try {
      await connexion.delete(`${route}/${id}`);
      const updatedSpecific = specific.filter((item) => item.id !== id);
      setSpecific(updatedSpecific);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2 className="admin-specific-title">Administration {pageTitle}</h2>
      <div className="admin-cards-container">
        {specific.map((elt) => (
          <div className="admin-card">
            <button
              type="button"
              className="connection-button admin-button"
              key={elt.id}
              onClick={() => handleDeleteClick(elt.id)}
            >
              Supprimer
            </button>
            {route === "/companies" ? (
              <img
                key={elt.name}
                src={elt.image_url}
                alt={elt.name}
                className="compagny-img"
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

AdminSpecific.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default AdminSpecific;
