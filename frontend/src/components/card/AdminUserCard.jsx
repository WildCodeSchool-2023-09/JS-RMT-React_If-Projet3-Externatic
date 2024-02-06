import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Select from "react-select";

import connexion from "../../services/connexion";

import "./AdminUserCard.css";

function AdminUserCard({ element, specific, setSpecific, roles, route }) {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(element);
  }, [element]);

  const handleDeleteClick = async () => {
    try {
      await connexion.delete(`/users/${element.id}`);
      const updatedSpecific = specific.filter((item) => item.id !== element.id);
      setSpecific(updatedSpecific);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRoleChange = (selectedRole) => {
    setUser((prevUser) => ({
      ...prevUser,
      role_id: roles.find((role) => role.label === selectedRole.label)?.id,
    }));
  };

  const handleValidationRoleChange = async () => {
    try {
      await connexion.put(`/users/${element.id}`, user);
      const updatedSpecific = await connexion.get(route);
      setSpecific(updatedSpecific.data);
    } catch (err) {
      console.error(err);
    }
  };

  const colorStyles = {
    control: (styles, { isSelected, isFocused }) => ({
      ...styles,
      backgroundColor: "white",
      borderColor: isSelected || isFocused ? "#ca2061" : "black",
      boxShadow: "none",
      ":hover": { borderColor: "#ca2061" },
    }),
    clearIndicator: (styles) => ({
      ...styles,
      cursor: "pointer",
      ":hover": { color: "red" },
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      cursor: "pointer",
    }),
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#ca2061" : "white",
        color: isFocused ? "white" : "black",
        cursor: isFocused ? "pointer" : "default",
      };
    },
  };

  return (
    <div className="admin-user-card">
      <div className="user-info">
        <div>
          {element.firstname} <br /> {element.lastname} <br />
          {element.email}
        </div>
      </div>

      <div className="admin-user-buttons-container">
        <div className="change-role">
          {user && (
            <Select
              options={roles}
              value={roles.find((role) => role.id === user.role_id)}
              onChange={handleRoleChange}
              placeholder="Role"
              styles={colorStyles}
            />
          )}
          <button
            type="button"
            className="connection-button admin-button"
            onClick={handleValidationRoleChange}
          >
            Valider rôle
          </button>
        </div>
        <button
          type="button"
          className="connection-button admin-button"
          onClick={handleDeleteClick}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}

AdminUserCard.propTypes = {
  element: PropTypes.shape().isRequired,
  specific: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setSpecific: PropTypes.func.isRequired,
  roles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  route: PropTypes.string.isRequired,
};

export default AdminUserCard;
