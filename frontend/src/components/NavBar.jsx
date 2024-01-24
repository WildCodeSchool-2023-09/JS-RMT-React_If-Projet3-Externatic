import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/auth";
import "./NavBar.css";
import externatic from "../public/externatic.png";

function NavBar() {
  const { connected } = useAuthContext();
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
      <div className="button-container">
        {connected.role_id === 1 ||
        connected.role_id === 2 ||
        connected.role_id === 3 ? (
          <Link className="button-connect" to="/account">
            Mon Compte
          </Link>
        ) : (
          ""
        )}
        <Link className="button-connect" to="/login">
          Se connecter
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
