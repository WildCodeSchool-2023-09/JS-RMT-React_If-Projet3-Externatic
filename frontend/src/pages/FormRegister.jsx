import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FormRegister.css";

import connexion from "../services/connexion";

import "../components/reusable/button.css";
import "../components/reusable/formInput.css";

const user = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

function FormRegister() {
  const [credentials, setCredentials] = useState(user);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const validatePassword = () => {
    return (
      confirmPassword === credentials.password &&
      credentials.password.length >= 6 &&
      /[A-Z]/.test(credentials.password) &&
      /[@$!%*?&]/.test(credentials.password) &&
      /\d/.test(credentials.password)
    );
  };

  const handleCredentials = (event) => {
    setCredentials((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleRequest = async (e) => {
    e.preventDefault();
    try {
      if (confirmPassword === credentials.password) {
        await connexion.post("/register", credentials);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        throw new Error(
          "les mots de passe ne correspondent pas ou l'email existe déja"
        );
      }
    } catch (error) {
      setCredentials(user);
      setConfirmPassword("");
      setErrorMessage(
        "les mots de passe ne correspondent pas ou l'email existe déja"
      );
    }
  };

  return (
    <div>
      <h1 className="login-title">INSCRIPTION</h1>
      <main className="reg-container">
        <div className="form-container">
          <form onSubmit={handleRequest} className="form-connection">
            <div className="form-alllabel">
              <label>
                Prénom :
                <input
                  className="label-form"
                  type="text"
                  name="firstname"
                  required
                  onChange={handleCredentials}
                  value={credentials.firstname}
                  placeholder="Prénom"
                />
              </label>
              <label>
                Nom :
                <input
                  className="label-form"
                  type="text"
                  name="lastname"
                  required
                  onChange={handleCredentials}
                  value={credentials.lastname}
                  placeholder="Nom"
                />
              </label>
              <label>
                Email:
                <input
                  className="label-form"
                  type="email"
                  name="email"
                  required
                  onChange={handleCredentials}
                  value={credentials.email}
                  placeholder="Email"
                />
              </label>
              <label>
                Password:
                <input
                  className="label-form"
                  type="password"
                  name="password"
                  required
                  onChange={handleCredentials}
                  value={credentials.password}
                  placeholder="Password"
                />
              </label>
              <label>
                Confirm Password:
                <input
                  className="label-form"
                  type="password"
                  name="confirmPassword"
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  placeholder="Confirm Password"
                />
              </label>
            </div>
            {errorMessage && (
              <p className="validate-password" style={{ color: "red" }}>
                {errorMessage}
              </p>
            )}
            <p
              className="validate-password"
              style={{ color: validatePassword() ? "green" : "grey" }}
            >
              Le mot de passe doit comporter au moins 6 caractères, une
              majuscule, un caractère spécial, et un chiffre.
            </p>
            <div className="button-container">
              <button type="submit" className="connection-button">
                S'inscrire
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default FormRegister;
