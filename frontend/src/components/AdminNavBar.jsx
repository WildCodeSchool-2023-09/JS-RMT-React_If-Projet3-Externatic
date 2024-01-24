import React from "react";
import { Link } from "react-router-dom";

import "./AdminNavBar.css";

function AdminNavBar() {
  return (
    <nav className="admin-nav-links">
      <Link to="./companies">
        <button type="button" className="connection-button">
          Admin entreprises
        </button>
      </Link>
      <button type="button" className="connection-button">
        Admin consultants
      </button>
      <button type="button" className="connection-button">
        Admin candidats
      </button>
    </nav>
  );
}

export default AdminNavBar;
