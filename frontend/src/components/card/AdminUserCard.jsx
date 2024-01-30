import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Select from "react-select";

import connexion from "../../services/connexion";

function AdminUserCard({ element, specific, setSpecific }) {
  const [roles, setRoles] = useState([]);
  const [userRole, setUserRole] = useState("");
  const [user, setUser] = useState();

  const getRoles = async () => {
    try {
      const response = await connexion.get("/roles");
      setRoles(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getRoleById = async () => {
    try {
      const response = await connexion.get(`/roles/${element.role_id}`);
      setUserRole(response.data.label);
    } catch (err) {
      console.error(err);
    }
  };

  const getUserInfo = async () => {
    try {
      const response = await connexion.get(`/users/${element.id}`);
      setUser(() => {
        return response.data;
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getRoles();
    getRoleById();
    getUserInfo();
  }, []);

  const handleDeleteClick = async (id) => {
    try {
      await connexion.delete(`/users/${id}`);
      const updatedElement = specific.filter((item) => item.id !== id);
      setSpecific(updatedElement);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRoleChange = (selectedRole) => {
    setUserRole(selectedRole.label);
    setUser((prevUser) => ({
      ...prevUser,
      role_id: roles.find((role) => role.label === selectedRole.label)?.id,
    }));
  };

  const handleValidationRoleChange = async () => {
    try {
      await connexion.put(`/users/${element.id}`, user);
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
        <Select
          options={roles}
          value={roles.find(
            (role) => role.id === (!user ? element.role_id : user.role_id)
          )}
          onChange={handleRoleChange}
          placeholder="Role"
        />
        <button
          type="button"
          className="connection-button admin-button"
          onClick={handleValidationRoleChange}
        >
          Valider
        </button>
      </div>
      <div>
        {element.firstname} <br /> {element.lastname} <br /> {element.email}
        <br /> {element.role_id} <br /> {userRole}
      </div>
    </div>
  );
}

AdminUserCard.propTypes = {
  element: PropTypes.objectOf(PropTypes.string).isRequired,
  specific: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSpecific: PropTypes.func.isRequired,
};

export default AdminUserCard;
