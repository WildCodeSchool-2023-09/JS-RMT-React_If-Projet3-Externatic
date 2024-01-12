import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import externatic from "../public/externatic.png";

function NavBar() {
  const handleClick = () => {
    window.location.href = "/login";
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
      <div className="button-connect">
        <button
          type="button"
          className="button-connected"
          onClick={handleClick}
        >
          Se connecter
        </button>
      </div>
    </div>
  );
}

export default NavBar;
