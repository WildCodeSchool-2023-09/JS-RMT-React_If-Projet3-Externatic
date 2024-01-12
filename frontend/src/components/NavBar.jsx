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
      <Link className="button-connect" to="/login">
        <button type="button" className="button-connected">
          Se connecter
        </button>
      </Link>
    </div>
  );
}

export default NavBar;
