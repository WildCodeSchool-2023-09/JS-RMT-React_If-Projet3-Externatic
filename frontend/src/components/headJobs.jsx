import React from "react";
import { useLoaderData } from "react-router-dom";

import "../styles/headJobs.css";

function HeadJob() {
  const job = useLoaderData();
  return (
    <div className="headjob_container">
      <img src="../src/assets/Logohead.svg" alt="Logo" />
      <div className="body_job">
        <div className="offer">
          <h1 className="title">{job.title}</h1>
          <button type="button">postuler a l'offre</button>
        </div>
        <div className="resume_jobs">
          <ul>
            <li>Durée de travail:{job.working_type}</li>
            <li>Niveau de formation:{job.position_requirements}</li>
            <li>Lieu:{job.location}</li>
          </ul>
          <ul>
            <li>Salaire:{job.salary}</li>
            <li>Entrée en fonction:{job.starting_date}</li>
            <li>CSP:{job.position_category}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeadJob;
