import React, { useRef } from "react";
import { useLoaderData } from "react-router-dom";

import Modal from "./modal";
import "../styles/headJobs.css";

function formatDate(time) {
  return time.split("T")[0];
}

function HeadJob() {
  const job = useLoaderData();
  const modal = useRef(null);

  function toggleRefModal() {
    modal.current.toggleModal();
  }

  return (
    <div className="headjob_container">
      <img src="../src/assets/Logohead.svg" alt="Logo" />
      <div className="body_job">
        <div className="offer">
          <h1 className="title">{job.title}</h1>
          <button type="button" onClick={toggleRefModal} className="btn-modal">
            Postuler a l'offre
          </button>
          <Modal ref={modal} />
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
    </div>
  );
}

export default HeadJob;
