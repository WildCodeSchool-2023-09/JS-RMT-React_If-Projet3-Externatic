import React from "react";
import { useLoaderData } from "react-router-dom";

import "../styles/headJobs.css";

function HeadJob() {
  const job = useLoaderData();
  return (
    <div className="body">
      <h1 className="title">{job.title}</h1>
      <div className="resume_jobs">
        <ul>
          <br />
          <li>Durée de travail:{job.working_type}</li>
          <br />
          <li>Niveau de formation:{job.position_requirements}</li>
          <br />
          <li>Lieu:{job.location}</li>
        </ul>
        <ul>
          <br />
          <li>Salaire:{job.salary}</li>
          <br />
          <li>Entrée en fonction:{job.starting_date}</li>
          <br />
          <li>CSP:{job.position_category}</li>
        </ul>
      </div>
    </div>
  );
}

export default HeadJob;
