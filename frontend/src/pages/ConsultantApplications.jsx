import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

import { useAuthContext } from "../contexts/auth";
import connexion from "../services/connexion";
import connexionCV from "../services/connexionCV";

import "./ConsultantApplications.css";
import "../components/reusable/button.css";

function ConsultantApplication() {
  const { connected } = useAuthContext();
  const [applications, setApplications] = useState([]);
  const [status, setStatus] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const colorStyles = {
    control: (styles, { isSelected, isFocused }) => ({
      ...styles,
      backgroundColor: "white",
      borderColor: isSelected || isFocused ? "#ca2061" : "black",
      boxShadow: "none",
      ":hover": { borderColor: "#ca2061" },
    }),
    clearIndicator: (styles) => ({
      ...styles,
      cursor: "pointer",
      ":hover": { color: "red" },
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      cursor: "pointer",
    }),
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#ca2061" : "white",
        color: isFocused ? "white" : "black",
        cursor: isFocused ? "pointer" : "default",
      };
    },
  };

  const getApplications = async () => {
    try {
      const response = await connexion.get(
        "/applications/consultant",
        connected.id
      );
      setApplications(response.data);

      const initialSelectedStatuses = response.data.map((application) => {
        return {
          id: application.status_id,
          label: application.status_label,
        };
      });
      setSelectedStatuses(initialSelectedStatuses);
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

  const handleStatusChange = (index, selectedOption) => {
    const newSelectedStatuses = [...selectedStatuses];
    newSelectedStatuses[index] = selectedOption;
    setSelectedStatuses(newSelectedStatuses);
  };

  const validateStatusChange = async (applicationId, selectedStatusId) => {
    try {
      await connexion.put(`application/${applicationId}`, {
        status_id: selectedStatusId,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const deleteApplication = async (applicationId) => {
    try {
      await connexion.delete(`/application/${applicationId}`);
      getApplications();
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
              <th className="application-th">Entreprise</th>
              <th className="application-th">Email du candidat</th>
              <th className="application-th">CV du candidat</th>
              <th className="application-th">Statut</th>
            </tr>
          </thead>
          <tbody className="application-body">
            {applications.map((application, index) => (
              <tr key={application.id} className="application-tr">
                <td className="application-td">
                  <Link to={`/jobs/${application.job_id}`} className="job-link">
                    {application.job_title}
                  </Link>
                </td>
                <td className="application-td">{application.company_name}</td>
                <td className="application-td">
                  {application.candidate_email}
                </td>
                <td className="application-tdd">
                  <a
                    href={`${connexionCV.defaults.baseURL}/${application.candidate_url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CV_candidat
                  </a>
                </td>
                <td
                  className="application-td application-status"
                  aria-label="application-status"
                >
                  <Select
                    options={status}
                    value={selectedStatuses[index] || ""}
                    onChange={(selectedOption) =>
                      handleStatusChange(index, selectedOption)
                    }
                    styles={colorStyles}
                  />
                  <button
                    type="button"
                    className="connection-button validate-status-button"
                    onClick={() =>
                      validateStatusChange(
                        application.application_id,
                        selectedStatuses[index].id
                      )
                    }
                  >
                    Valider
                  </button>
                </td>
                <td className="application-td application-status">
                  <button
                    type="button"
                    className="connection-button delete-button"
                    onClick={() =>
                      deleteApplication(application.application_id)
                    }
                  >
                    Supprimer
                  </button>
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
