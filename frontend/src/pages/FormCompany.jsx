import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import connexion from "../services/connexion";

import "./FormCompany.css";
import "../components/reusable/formInput.css";
import "../components/reusable/button.css";

const companyTemplate = {
  name: "",
  email: "",
  city: "",
  phone_number: "",
  image_url: "",
};

function FormCompany() {
  const { id } = useParams();

  const [company, setCompany] = useState(companyTemplate);
  const navigate = useNavigate();

  const getCompanyData = async () => {
    try {
      const response = await connexion.get(`/companies/${id}`);
      setCompany(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (id !== "new") {
      getCompanyData();
    }
  }, [id]);

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

  const putCompany = async (event) => {
    event.preventDefault();
    try {
      await connexion.put(`/companies/${id}`, company);
      navigate("/administration/companies");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Ajout / Modification entreprise</h2>
      <form
        onSubmit={id !== "new" ? putCompany : postCompany}
        className="admin-form-container"
      >
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
