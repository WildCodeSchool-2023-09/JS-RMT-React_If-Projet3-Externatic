import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/auth";
import connexion from "../services/connexion";

import "./CandidatApplications.css";

function CandidatApplications() {
  const { connected } = useAuthContext();
  const [applications, setApplications] = useState([]);

  const getApplications = async () => {
    try {
      const response = await connexion.get(
        "/profile/applications",
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
        <table className="application-table">
          <thead className="application-thead">
            <tr className="application-tr">
              <th className="application-th">Nom de l'offre</th>
              <th className="application-th">Email du consultant</th>
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
                  {application.consultant_email}
                </td>
                <td className="application-td">{application.status_label}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2>Vous n'avez postulé à aucune offre pour le moment</h2>
      )}
    </div>
  );
}

export default CandidatApplications;
