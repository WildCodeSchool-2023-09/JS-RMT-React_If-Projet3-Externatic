import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthContext } from "../contexts/auth";
import connexion from "../services/connexion";
import logoext from "../assets/sfddsfdfsfddf.png";

import "./headJobs.css";

function formatDate(time) {
  return time.split("T")[0];
}

function HeadJob() {
  const job = useLoaderData();
  const { connected } = useContext(AuthContext);

  const handleClick = async () => {
    const application = { job_id: job.id, user_id: connected.id };
    try {
      connexion.post("/application", application);
      toast.success("Votre candidature a été soumise avec succès");
    } catch (err) {
      console.error(err);
      toast.error("Une erreur s'est produite. Veuillez réessayer plus tard");
    }
  };

  return (
    <div className="headjob_container">
      <img src={logoext} alt="Logo" />
      <div className="body_job">
        <div className="offer">
          <h1 className="title">{job.title}</h1>
          {connected.role_id && (
            <button type="button" onClick={handleClick} className="btn-modal">
              Postuler a l'offre
            </button>
          )}
        </div>
        <div className="resume_jobs">
          <ul>
            <li>Durée de travail:{job.working_type}</li>
            <li>Niveau de formation:{job.position_requirements}</li>
            <li>Lieu:{job.location}</li>
          </ul>
          <ul>
            <li>Salaire:{job.salary}</li>
            <li>Entrée en fonction:{formatDate(job.starting_date)}</li>
            <li>CSP:{job.position_category}</li>
          </ul>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
}

export default HeadJob;
