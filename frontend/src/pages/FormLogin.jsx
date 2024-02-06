import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
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
      <h1 className="login-title">CONNEXION</h1>
      <main className="log-container">
        <div className="form-container">
          <form onSubmit={handleRequest} className="form-connection">
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

            <Link to="/register" className="reg-link">
              Crée un compte
            </Link>

            {errorMessage && (
              <p className="validate-password" style={{ color: "red" }}>
                {errorMessage}
              </p>
            )}

            <div className="button-container">
              <button type="submit" className="connection-button">
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
