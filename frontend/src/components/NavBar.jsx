import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/auth";
import "./NavBar.css";
import externatic from "../assets/externatic.png";
import connexion from "../services/connexion";

function NavBar() {
  const navigate = useNavigate();
  const { connected, logout } = useAuthContext();

  const handleLogout = async () => {
    try {
      await connexion.post("/logout");
      logout();
      navigate("/");
    } catch (err) {
      console.error("Erreur lors de la déconnexion :", err);
    }
  };
  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={externatic} alt="externatic" />
      </Link>
      <Link className="link-page" to="/">
        Home
      </Link>
      <Link className="link-page" to="/jobs">
        Jobs
      </Link>
      {connected.role_id === 3 ? (
        <Link className="link-page" to="/administration">
          Admin
        </Link>
      ) : (
        ""
      )}
      {connected.role_id === 2 ? (
        <Link className="link-page" to="/consultants/company">
          Consultant
        </Link>
      ) : (
        ""
      )}
      <div className="button-candidat">
        {connected.role_id && (
          <Link className="button-connect" to="/account">
            Mon Compte
          </Link>
        )}
        {!connected.role_id && (
          <Link className="button-connect" to="/login">
            Se connecter
          </Link>
        )}
        {connected.role_id && (
          <button
            type="button"
            className="button-connect"
            onClick={handleLogout}
          >
            Deconnexion
          </button>
        )}
      </div>
    </div>
  );
}

export default NavBar;
