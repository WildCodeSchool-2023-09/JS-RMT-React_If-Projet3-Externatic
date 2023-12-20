import React from "react";
import { useLoaderData } from "react-router-dom";

import "../styles/jobId.css";

function JobId() {
  const job = useLoaderData();
  return (
    <div className="resume">
      <div className="Title">{job.title}</div>
      <br />
      <div className="Description">
        <div>{job.description_mission}</div>
        <br />
        <div>{job.description_about_candidate}</div>
        <div>{job.description_position}</div>
        <div>{job.description_process}</div>
      </div>
      <div>{job.language}</div>
      <div>{job.salary}</div>
      <div>{job.location}</div>
      <div>{job.working_hours}</div>
      <div>{job.starting_date}</div>
      <div>{job.created_at}</div>
    </div>
  );
}
export default JobId;
