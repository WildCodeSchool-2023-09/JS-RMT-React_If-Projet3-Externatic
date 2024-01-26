import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/auth";
import connexion from "../services/connexion";

function CandidatAccount() {
  const { connected, setConnected } = useAuthContext();
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
  });

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
    } catch (error) {
      console.error("Error updating user information", error);
    }
  };

  useEffect(() => {
    if (connected.role_id === null) {
      navigate("/");
    }
  }, [connected, navigate]);

  return (
    <div>
      <h1>CandidatAccount</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastname"
            value={userData.lastname}
            onChange={handleChange}
          />
        </label>
        <label>
          First Name:
          <input
            type="text"
            name="firstname"
            value={userData.firstname}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phone_number"
            value={userData.phone_number}
            onChange={handleChange}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={userData.city}
            onChange={handleChange}
          />
        </label>
        <label>
          Employment Type:
          <input
            type="text"
            name="employment_type"
            value={userData.employment_type}
            onChange={handleChange}
          />
        </label>
        <label>
          Experience:
          <input
            type="text"
            name="experience"
            value={userData.experience}
            onChange={handleChange}
          />
        </label>
        <label>
          Diploma:
          <input
            type="text"
            name="diploma"
            value={userData.diploma}
            onChange={handleChange}
          />
        </label>
        <label>
          Status:
          <input
            type="text"
            name="status"
            value={userData.status}
            onChange={handleChange}
          />
        </label>
        <button type="submit">modifier</button>
      </form>
    </div>
  );
}

export default CandidatAccount;
