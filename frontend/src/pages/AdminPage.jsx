import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { useAuthContext } from "../contexts/auth";

import "./AdminPage.css";
import "../components/reusable/button.css";
import AdminNavBar from "../components/AdminNavBar";

function AdminPage() {
  const { connected } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (connected.role_id !== 3) {
      navigate("/");
    }
  }, [connected]);

  return (
    <div className="admin-page">
      <h1 className="admin-title">ADMINISTRATION GLOBALE</h1>
      <AdminNavBar />
      <Outlet />
    </div>
  );
}

export default AdminPage;
