import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import connexion from "../services/connexion";

import "./AdminSpecific.css";
import "../components/reusable/button.css";

import AdminCompanyCard from "../components/card/AdminCompanyCard";
import AdminUserCard from "../components/card/AdminUserCard";

function AdminSpecific({ pageTitle, route }) {
  const [specific, setSpecific] = useState([]);
  const navigate = useNavigate();

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
    getRoles();
  }, []);

  useEffect(() => {
    getSpecific();
  }, [route]);

  const getComponent = (elt) => {
    if (route === "/companies") {
      return (
        <AdminCompanyCard
          element={elt}
          specific={specific}
          setSpecific={setSpecific}
        />
      );
    }
    return (
      <AdminUserCard
        element={elt}
        specific={specific}
        setSpecific={setSpecific}
        roles={roles}
        route={route}
      />
    );
  };

  return (
    <div className="admin-section">
      <h2 className="admin-specific-title">Administration {pageTitle}</h2>
      {route === "/companies" && (
        <button
          type="button"
          className="connection-button"
          onClick={() => navigate(`${route}/new`)}
        >
          Ajouter {pageTitle}
        </button>
      )}
      <div className="admin-cards-container">
        {specific.map((elt) => {
          return (
            <div key={elt.id} className="admin-card">
              {getComponent(elt)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

AdminSpecific.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default AdminSpecific;
