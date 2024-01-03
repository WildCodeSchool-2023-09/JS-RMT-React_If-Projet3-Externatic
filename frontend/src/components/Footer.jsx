import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

function Footer() {
  const style = { color: "black", fontSize: "3em" };
  return (
    <footer className="footerContainer">
      <div className="contact">
        <p>Contact </p>
        <p>Tél. +33 (0)2 85 52 26 33 </p>
        <p>Mail : contact@externatic.fr </p>
        <p>Adresse : 1 rue Racine – 44000 </p>
        <p> NANTES – France</p>
      </div>
      <div className="explain">
        <p>Externatic, cabinet de </p>
        <p>recrutement informatique</p>
        <p>Externatic est un cabinet dédié au </p>
        <p>recrutement de profils d’experts, </p>
        <p>ingénieurs et managers dans le </p>
        <p>domaine de l’informatique</p>{" "}
        <div className="allRight">
          <p>Externatic © 2023 - Tous droits réservés</p>
        </div>
      </div>

      <div className="socialIcon">
        <p>Réseaux sociaux</p>
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
