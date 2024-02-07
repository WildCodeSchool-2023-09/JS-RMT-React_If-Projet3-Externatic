import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";

import HeadJob from "../components/headJobs";
import connexion from "../services/connexion";
import { AuthContext } from "../contexts/auth";

import "./jobId.css";
import "../components/headJobs.css";

function formatDate(time) {
  return time.split("T")[0];
}

function JobId() {
  const job = useLoaderData();
  const { connected } = useContext(AuthContext);

  const handleClick = async () => {
    const application = { job_id: job.id, user_id: connected.id };
    try {
      connexion.post("/application", application);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="jobid">
      <HeadJob />
      <div className="resume">
        <br />
        <div className="description">
          <h2>Les missions</h2>
          <h3>Vous aurez notamment en charge:</h3>
          <p>{job.description_mission}</p>
          <p>type de language de developpement:{job.language}</p>
          <br />
          <h2>Ce que vous apportez</h2>
          <p>{job.description_about_candidate}</p>
          <br />
          <h2>Les + du poste</h2>
          <div>{job.description_position}</div>
          <p>{job.salary}</p>
          <h2>Avantages</h2>
          <h3>Les conditions de travail</h3>
          <p>Localisation:{job.location}</p>
          <h3>Ce que vous aller y gagner</h3>
          <p>Type de contrat:{job.working_type}</p>
          <h2>Le processus</h2>
          <p>{job.description_process}</p>
          <p>Date de prise de l'emploi:{formatDate(job.starting_date)}</p>
        </div>
        <div className="consultant">
          <h2>Votre consultant</h2>
        </div>
        <div>Veuillez vous connecter pour en savoir plus</div>
        {connected.role_id && (
          <button type="button" onClick={handleClick} className="btn-modal">
            Postuler a l'offre
          </button>
        )}
      </div>
    </div>
  );
}
export default JobId;
