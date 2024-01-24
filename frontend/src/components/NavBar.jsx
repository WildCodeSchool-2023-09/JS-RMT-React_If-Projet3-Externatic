import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import externatic from "../public/externatic.png";

function NavBar() {
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
      <div className="button-container">
        <Link className="button-connect" to="/account">
          Mon Compte
        </Link>
        <Link className="button-connect" to="/login">
          Se connecter
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
