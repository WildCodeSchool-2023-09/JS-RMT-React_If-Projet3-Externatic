import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

import { useAuthContext } from "../contexts/auth";
import connexion from "../services/connexion";

import "./ConsultantApplications.css";

function ConsultantApplication() {
  const { connected } = useAuthContext();
  const [applications, setApplications] = useState([]);
  const [status, setStatus] = useState([]);

  const getApplications = async () => {
    try {
      const response = await connexion.get(
        "/applications/consultant",
        connected.id
      );
      setApplications(response.data);
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const getApplicationStatus = async () => {
    try {
      const response = await connexion.get("/applicationStatus");
      setStatus(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getApplications();
    getApplicationStatus();
  }, []);

  return (
    <div className="consultant-application">
      <h1 className="consultant-application-title">Mes candidatures</h1>
      {applications.length > 0 ? (
        <table className="application-table">
          <thead className="application-thead">
            <tr className="application-tr">
              <th className="application-th">Nom de l'offre</th>
              <th className="application-th">Email du candidat</th>
              <th className="application-th">Statut</th>
            </tr>
          </thead>
          <tbody className="application-body">
            {applications.map((application) => (
              <tr key={application.id} className="application-tr">
                <td className="application-td">
                  <Link to={`/jobs/${application.job_id}`} className="job-link">
                    {application.job_title}
                  </Link>
                </td>
                <td className="application-td">
                  {application.candidate_email}
                </td>
                <td className="application-td">
                  Modifier
                  <Select
                    options={status}
                    value={status.find(
                      (sta) => sta.id === application.status_id
                    )}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2>Aucun candidat n'a postulé à vos offres pour le moment</h2>
      )}
    </div>
  );
}

export default ConsultantApplication;
