import React from "react";
import PropTypes from "prop-types";

import AdminCompanyCard from "./AdminCompanyCard";
import AdminUserCard from "./AdminUserCard";

function AdminCard({ route, element, specific, setSpecific, roles }) {
  return (
    <div className="admin-card">
      {route === "/companies" && (
        <AdminCompanyCard
          element={element}
          specific={specific}
          setSpecific={setSpecific}
        />
      )}
      {route !== "/companies" && (
        <AdminUserCard
          element={element}
          specific={specific}
          setSpecific={setSpecific}
          roles={roles}
          route={route}
        />
      )}
    </div>
  );
}

AdminCard.propTypes = {
  route: PropTypes.string.isRequired,
  element: PropTypes.shape().isRequired,
  specific: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setSpecific: PropTypes.func.isRequired,
  roles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AdminCard;
