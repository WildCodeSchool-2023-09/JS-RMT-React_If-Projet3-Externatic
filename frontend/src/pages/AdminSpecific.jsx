import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import connexion from "../services/connexion";

import "./AdminSpecific.css";

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

  return (
    <div>
      <h2 className="admin-specific-title">Administration {pageTitle}</h2>
      <div className="admin-cards-container">
        {specific.map((elt) =>
          route === "/companies" ? (
            <img
              key={elt.id}
              src={elt.image_url}
              alt={elt.name}
              className="compagny-img"
            />
          ) : null
        )}
      </div>
    </div>
  );
}

AdminSpecific.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default AdminSpecific;
