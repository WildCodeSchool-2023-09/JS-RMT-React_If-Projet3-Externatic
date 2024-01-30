import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/auth";
import connexion from "../services/connexion";
import "./CandidatAccount.css";

function CandidatAccount() {
  const { connected, setConnected } = useAuthContext();
  const [image, setImage] = useState();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: connected.email,
    lastname: connected.lastname || "",
    firstname: connected.firstname || "",
    phone_number: connected.phone_number || "",
    city: connected.city || "",
    employment_type: connected.employment_type || "",
    experience: connected.experience || "",
    diploma: connected.diploma || "",
    status: connected.status || "",
    url: connected.url || "",
  });

  const getProfile = async () => {
    try {
      const profile = await connexion.get(`/users/profile`);
      setConnected(profile.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("file", image);

    try {
      const file = await connexion.put(`/curriculum`, form, {
        headers: { "Content-type": "multipart/form-data" },
      });

      setUserData({
        ...userData,
        url: file.filePath,
      });
      getProfile();
      console.info(file);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await connexion.put(`/users/${connected.id}`, userData);
      setConnected(response.data);
      getProfile();
      handleUpload();
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    if (connected.role_id === null) {
      navigate("/");
    }
  }, [connected, navigate]);

  return (
    <div>
      <h1 className="form-title">Votre Compte</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Email :
            <input
              type="email"
              name="email"
              className="label-form"
              value={userData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Prénom:
            <input
              type="text"
              name="lastname"
              className="label-form"
              value={userData.lastname}
              onChange={handleChange}
            />
          </label>
          <label>
            Nom :
            <input
              type="text"
              name="firstname"
              className="label-form"
              value={userData.firstname}
              onChange={handleChange}
            />
          </label>
          <label>
            Numéro de téléphone :
            <input
              type="tel"
              name="phone_number"
              className="label-form"
              value={userData.phone_number}
              onChange={handleChange}
            />
          </label>
          <label>
            Ville :
            <input
              type="text"
              name="city"
              className="label-form"
              value={userData.city}
              onChange={handleChange}
            />
          </label>
          <label>
            Type d'emploi :
            <select
              name="employment_type"
              className="label-form"
              value={userData.employment_type}
              onChange={handleChange}
            >
              <option value="">selectionner type d'emploi</option>
              <option value="CDI">CDI</option>
              <option value="CDD">CDD</option>
            </select>
          </label>
          <label>
            Experience :
            <select
              type="text"
              name="experience"
              className="label-form"
              value={userData.experience}
              onChange={handleChange}
            >
              <option value="">Votre Experience</option>
              <option value="Junior">Junior</option>
              <option value="Mid">Mid</option>
              <option value="Senior">Senior</option>
            </select>
          </label>
          <label>
            Diplome :
            <select
              type="text"
              name="diploma"
              className="label-form"
              value={userData.diploma}
              onChange={handleChange}
            >
              <option value="">Votre Diplôme</option>
              <option value="Bac">Bac</option>
              <option value="Bac+2">Bac+2</option>
              <option value="Bac+3">Bac+3</option>
              <option value="Bac+5">Bac+5</option>
              <option value="Bac+8">Bac+8</option>
            </select>
          </label>
          <label>
            Status :
            <select
              name="status"
              value={userData.status}
              onChange={handleChange}
              className="label-form"
            >
              <option value="">Votre Status</option>
              <option value="Actif">Actif</option>
              <option value="Inactif">Inactif</option>
            </select>
          </label>
          <div className="button-form-container">
            <button type="submit" className="connection-button">
              modifier
            </button>
          </div>
        </form>
      </div>
      <div className="form-container">
        <form onSubmit={handleUpload}>
          <h3 className="pdf-title"> Choisissez un fichier :</h3>
          <label>
            CV (PDF) :
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          <h3 className="pdf-title"> Votre fichier actuel :</h3>
          <p>{userData.url && userData.url.split("/").pop()}</p>
          <div className="button-form-container">
            <button type="submit" className="connection-button">
              valider
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CandidatAccount;
