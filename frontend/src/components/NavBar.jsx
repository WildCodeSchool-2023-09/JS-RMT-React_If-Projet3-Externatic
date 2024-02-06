import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/auth";
import "./NavBar.css";
import externatic from "../assets/externatic.png";

function NavBar() {
  const { connected, logout } = useAuthContext();
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
          <button type="button" className="button-connect" onClick={logout}>
            deconnexion
          </button>
        )}
      </div>
    </div>
  );
}

export default NavBar;
