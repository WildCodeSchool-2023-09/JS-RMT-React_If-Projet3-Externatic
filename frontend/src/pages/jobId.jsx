import React from "react";
import { useLoaderData } from "react-router-dom";

import HeadJob from "../components/headJobs";

import "../styles/jobId.css";

function formatDate(time) {
  return time.split("T")[0];
}

function JobId() {
  const job = useLoaderData();
  return (
    <div className="jobid">
      <HeadJob />
      <div className="resume">
        <br />
        <div className="description">
          <h1>Les missions</h1>
          <div>{job.description_mission}</div>
          <br />
          <h2>Ce que vous apportez</h2>
          <div>{job.description_about_candidate}</div>
          <br />
          <h2>Les + du poste</h2>
          <div>{job.description_position}</div>
          <h2>Le processus</h2>
          <div>{job.description_process}</div>
          <div>{job.language}</div>
          <div>{job.salary}</div>
          <div>{job.location}</div>
          <div>{job.working_type}</div>
          <div>{formatDate(job.starting_date)}</div>
          <div>{formatDate(job.created_at)}</div>
        </div>
        <div className="consultant">
          <h2>Votre consultant</h2>
        </div>
        <div>Veuillez vous connecter pour en savoir plus</div>
        <button type="button">postuler a l'offre</button>
      </div>
    </div>
  );
}
export default JobId;
