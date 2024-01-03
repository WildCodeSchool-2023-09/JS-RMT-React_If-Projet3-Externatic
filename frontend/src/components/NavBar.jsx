import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import externatic from "../public/externatic.png";

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/">
        <img className="logo" src={externatic} alt="externatic" />
      </Link>
      <Link className="homePage" to="/">
        Home
      </Link>
      <Link className="homePage" to="/jobs">
        jobs
      </Link>
    </div>
  );
}

export default NavBar;
