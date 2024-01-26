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
      <Link className="button-connect" to="/login">
        Se connecter
      </Link>
    </div>
  );
}

export default NavBar;
