import React, { useState, useEffect } from "react";
/* import { Link } from "react-router-dom"; */
import { useAuthContext } from "../contexts/auth";
import connexion from "../services/connexion";

function ConsultantApplication() {
  const { connected } = useAuthContext();
  const [applications, setApplications] = useState([]);

  const getApplications = async () => {
    try {
      const response = await connexion.get(
        "/application/consultant",
        connected.id
      );
      setApplications(response.data);
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  useEffect(() => {
    getApplications();
  }, []);

  return (
    <div className="candidat-application">
      <h1 className="candidat-application-title">Mes candidatures</h1>
      {applications.length > 0 ? (
        ""
      ) : (
        <h2>Aucun candidat n'a postulé à vos offres pour le moment</h2>
      )}
    </div>
  );
}

export default ConsultantApplication;
