import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import connexion from "../services/connexion";

import "./AdminSpecific.css";
import "../components/reusable/button.css";

function AdminSpecific({ pageTitle, route }) {
  const [specific, setSpecific] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const getSpecific = async () => {
    try {
      const response = await connexion.get(route);
      setSpecific(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getSpecific();
  }, [location]);
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
    <div className="admin-section">
      <h2 className="admin-specific-title">Administration {pageTitle}</h2>
      {route === "/companies" ? (
        <button
          type="button"
          className="connection-button"
          onClick={() => navigate(`${location.pathname}/new`)}
        >
          Ajouter {pageTitle}
        </button>
      ) : (
        ""
      )}
      <div className="admin-cards-container">
        {specific.map((elt) => (
          <div className="admin-card" key={elt.id}>
            <div className="admin-card-buttons-container">
              <button
                type="button"
                className="connection-button admin-button"
                onClick={() => handleDeleteClick(elt.id)}
              >
                Supprimer
              </button>
              {route !== "/consultants" ? (
                <button
                  type="button"
                  className="connection-button admin-button"
                  onClick={() => navigate(`${location.pathname}/${elt.id}`)}
                >
                  Editer
                </button>
              ) : (
                ""
              )}
            </div>
            {route === "/companies" ? (
              <img
                src={elt.image_url}
                alt={elt.name}
                className="compagny-img"
              />
            ) : null}
            {route === "/consultants" ? (
              <div>
                {elt.firstname} <br /> {elt.lastname} <br /> {elt.email}
              </div>
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
