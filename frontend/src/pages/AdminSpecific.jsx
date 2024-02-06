import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import connexion from "../services/connexion";

import "./AdminSpecific.css";
import "../components/reusable/button.css";
import AdminCard from "../components/card/AdminCard";

function AdminSpecific({ pageTitle, route }) {
  const [specific, setSpecific] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const [roles, setRoles] = useState([]);

  const getRoles = async () => {
    try {
      const response = await connexion.get("/roles");
      setRoles(response.data);
    } catch (err) {
      console.error(err);
    }
  };

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
    getRoles();
  }, [location]);

  return (
    <div className="admin-section">
      <h2 className="admin-specific-title">Administration {pageTitle}</h2>
      {route === "/companies" && (
        <button
          type="button"
          className="connection-button"
          onClick={() => navigate(`${location.pathname}/new`)}
        >
          Ajouter {pageTitle}
        </button>
      )}
      <div className="admin-cards-container">
        {specific.map((elt) => (
          <AdminCard
            route={route}
            element={elt}
            specific={specific}
            setSpecific={setSpecific}
            roles={roles}
            key={elt.id}
          />
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
