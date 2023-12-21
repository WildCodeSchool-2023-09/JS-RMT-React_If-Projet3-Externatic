import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

function Footer() {
  const style = { color: "black", fontSize: "3em" };
  return (
    <footer className="footerContainer">
      <div className="contact">
        <h2>Contact </h2>
        <h2>Tél. +33 (0)2 85 52 26 33 </h2>
        <h2>Mail : contact@externatic.fr </h2>
        <h2>Adresse : 1 rue Racine – 44000 </h2>
        <h2> NANTES – France</h2>
      </div>
      <div className="explain">
        <h2>Externatic, cabinet de </h2>
        <h2>recrutement informatique</h2>
        <h2>Externatic est un cabinet dédié au </h2>
        <h2>recrutement de profils d’experts, </h2>
        <h2>ingénieurs et managers dans le </h2>
        <h2>domaine de l’informatique</h2>{" "}
        <div className="allRight">
          <h2>Externatic © 2023 - Tous droits réservés</h2>
        </div>
      </div>

      <div className="socialIcon">
        <h2>Réseaux sociaux</h2>
        <a href="https://www.linkedin.com/" aria-label="LinkedIn">
          <FaLinkedin style={style} />
        </a>
        <a href="https://www.twitter.com/" aria-label="Twitter">
          <FaXTwitter style={style} />
        </a>
        <a href="https://www.instagram.com/" aria-label="Instagram">
          <FaInstagram style={style} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
