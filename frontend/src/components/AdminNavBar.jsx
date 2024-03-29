import React from "react";
import { Link } from "react-router-dom";

import "./AdminNavBar.css";

function AdminNavBar() {
  return (
    <nav className="admin-nav-links">
      <Link to="companies">
        <button type="button" className="connection-button">
          Admin entreprises
        </button>
      </Link>
      <Link to="consultants">
        <button type="button" className="connection-button">
          Admin consultants
        </button>
      </Link>
      <Link to="candidates">
        <button type="button" className="connection-button">
          Admin candidats
        </button>
      </Link>
    </nav>
  );
}

export default AdminNavBar;
