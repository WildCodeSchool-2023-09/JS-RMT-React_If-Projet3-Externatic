import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./FormLogin.css";
import connexion from "../services/connexion";
import { AuthContext } from "../contexts/auth";

import "../components/reusable/button.css";
import "../components/reusable/formInput.css";

const user = {
  email: "",
  password: "",
};

function FormLogin() {
  const [credentials, setCredentials] = useState(user);
  const [errorMessage, setErrorMessage] = useState("");
  const { setConnected } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCredentials = (event) => {
    setCredentials((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleRequest = async (e) => {
    e.preventDefault();
    try {
      const valid = await connexion.post("/login", credentials);
      setConnected(valid.data);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      setCredentials(user);
      setErrorMessage("Mot de passe ou e-mail incorrect");
    }
  };

  return (
    <div>
      <main className="logContainer">
        <div className="formContainer">
          <form onSubmit={handleRequest} className="formConnection">
            <label htmlFor="email">
              Email:
              <input
                id="email"
                className="labelForm"
                type="email"
                name="email"
                required
                onChange={handleCredentials}
                value={credentials.email}
                placeholder="Email"
              />
            </label>
            <label htmlFor="password">
              Password:
              <input
                id="password"
                className="labelForm"
                type="password"
                name="password"
                required
                onChange={handleCredentials}
                value={credentials.password}
                placeholder="Password"
              />
            </label>

            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

            <div className="buttonContainer">
              <button type="submit" className="connectionButton">
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default FormLogin;
