import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import connexion from "../services/connexion";

import "./FormCompany.css";
import "../components/reusable/formInput.css";
import "../components/reusable/button.css";

function FormCompany() {
  const companyTemplate = {
    name: "",
    email: "",
    city: "",
    phone_number: "",
    image_url: "",
  };

  const [company, setCompany] = useState(companyTemplate);
  const navigate = useNavigate();

  const updateCompany = (event) => {
    setCompany((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const postCompany = async (event) => {
    event.preventDefault();
    try {
      await connexion.post("/companies", company);
      navigate("/administration/companies");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Ajout / Modification entreprise</h2>
      <form onSubmit={postCompany} className="admin-form-container">
        <label>
          Nom:
          <input
            className="label-form admin-form"
            type="text"
            name="name"
            placeholder="Nom"
            value={company.name}
            onChange={updateCompany}
            required
          />
        </label>
        <label>
          Email
          <input
            className="label-form admin-form"
            type="email"
            name="email"
            placeholder="Email"
            value={company.email}
            onChange={updateCompany}
            required
          />
        </label>
        <label>
          Ville
          <input
            className="label-form admin-form"
            type="text"
            name="city"
            placeholder="Ville"
            value={company.city}
            onChange={updateCompany}
            required
          />
        </label>
        <label>
          Téléphone
          <input
            className="label-form admin-form"
            type="text"
            name="phone_number"
            placeholder="Téléphone"
            value={company.phone_number}
            onChange={updateCompany}
            required
          />
        </label>
        <label>
          Image
          <input
            className="label-form admin-form"
            type="text"
            name="image_url"
            placeholder="URL de l'image"
            value={company.image_url}
            onChange={updateCompany}
            required
          />
        </label>
        <button type="submit" className="connection-button">
          Valider
        </button>
      </form>
    </div>
  );
}

export default FormCompany;

/* CREATE TABLE company (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  city VARCHAR(200) NOT NULL,
  phone_number VARCHAR(10) NOT NULL,
  image_url VARCHAR(450) NOT NULL
); */
