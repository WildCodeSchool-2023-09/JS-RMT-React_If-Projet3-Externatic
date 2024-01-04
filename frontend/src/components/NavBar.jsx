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
        jobs
      </Link>
    </div>
  );
}

export default NavBar;
