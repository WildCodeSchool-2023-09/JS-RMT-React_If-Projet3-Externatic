import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { useAuthContext } from "../contexts/auth";
import connexion from "../services/connexion";

import "./MenuBurger.css";
import Xlogo from "../assets/externatic.png";

function MenuBurger() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { connected, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await connexion.post("/logout");
      logout();
      navigate("/");
    } catch (err) {
      console.error("Erreur lors de la déconnexion :", err);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuOpen && !event.target.closest(".burgerVisible")) {
        const isShopOrReturnClick =
          event.target.classList.contains("switch-links") ||
          event.target.classList.contains("link-page");

        if (!isShopOrReturnClick) {
          closeMenu();
        }
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <div className="burgerVisible">
      <Menu
        isOpen={menuOpen}
        onStateChange={(state) => setMenuOpen(state.isOpen)}
      >
        <div className="switch-links">
          <Link to="/" className="menu-items" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/jobs" className="menu-items" onClick={closeMenu}>
            Jobs
          </Link>

          {connected.role_id === 3 ? (
            <Link
              className="menu-items-special"
              to="/administration"
              onClick={closeMenu}
            >
              Admin
            </Link>
          ) : (
            ""
          )}
          {connected.role_id === 2 ? (
            <Link
              className="menu-items-special"
              to="/consultants/company"
              onClick={closeMenu}
            >
              Consultant
            </Link>
          ) : (
            ""
          )}
          <div className="button-candidat">
            {connected.role_id && (
              <Link
                className="menu-items-special"
                to="/account"
                onClick={closeMenu}
              >
                Mon Compte
              </Link>
            )}
            {!connected.role_id && (
              <Link
                className="menu-items-special"
                to="/login"
                onClick={closeMenu}
              >
                Se connecter
              </Link>
            )}
            <div className="menu-items-button">
              {connected.role_id && (
                <button
                  type="button"
                  className="menu-items-button"
                  onClick={handleLogout}
                >
                  Deconnexion
                </button>
              )}
            </div>
          </div>
          <div className="logo-mini">
            <img src={Xlogo} alt="Account" className="logo-mini" />
          </div>
        </div>
      </Menu>
    </div>
  );
}

export default MenuBurger;
