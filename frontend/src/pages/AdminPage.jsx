import React from "react";
import { Outlet } from "react-router-dom";

import "./AdminPage.css";
import "../components/reusable/button.css";
import AdminNavBar from "../components/AdminNavBar";

function AdminPage() {
  return (
    <div>
      <h1 className="admin-title">ADMINISTRATION GLOBALE</h1>
      <AdminNavBar />
      <Outlet />
    </div>
  );
}

export default AdminPage;
