import React from "react";
import PropTypes from "prop-types";

import AdminCompanyCard from "./AdminCompanyCard";
import AdminUserCard from "./AdminUserCard";

function AdminCard({ route, element, specific, setSpecific }) {
  return (
    <div className="admin-card">
      {route === "/companies" && (
        <AdminCompanyCard
          element={element}
          specific={specific}
          setSpecific={setSpecific}
        />
      )}
      {route === "/consultants" && (
        <AdminUserCard
          element={element}
          specific={specific}
          setSpecific={setSpecific}
        />
      )}
    </div>
  );
}

AdminCard.propTypes = {
  route: PropTypes.string.isRequired,
  element: PropTypes.objectOf(PropTypes.string).isRequired,
  specific: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSpecific: PropTypes.func.isRequired,
};

export default AdminCard;
