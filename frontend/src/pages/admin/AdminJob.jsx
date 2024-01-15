import React, { useState } from "react";
import connexion from "../../services/connexion";
import "./AdminJob.css";

const jobType = {
  company_id: null,
  consultant_id: null,
  title: "",
  description_mission: "",
  description_about_candidate: "",
  description_position: "",
  description_advantages: "",
  description_process: "",
  language: "",
  salary: "",
  location: "",
  working_type: "",
  starting_date: "",
  position_category: "",
  contract_type: "",
  position_requirements: "",
};

function AdminJob() {
  const [job, setJob] = useState(jobType);
  const handleJob = (event) => {
    setJob((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const postJob = async (event) => {
    event.preventDefault();
    try {
      await connexion.post("/jobs", job);
    } catch (error) {
      // eslint-disable-next-line no-restricted-syntax
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Administration d'un job</h1>
      <form onSubmit={postJob}>
        Ajout d'un job
        <label className="label">
          Company_id{" "}
          <input
            type="number"
            name="company_id"
            required
            value={job.company_id}
            onChange={handleJob}
          />
        </label>
        <label className="label">
          consultant_id
          <input
            type="number"
            name="consultant_id"
            required
            value={job.consultant_id}
            onChange={handleJob}
          />
        </label>
        <label className="label">
          title{" "}
          <input
            type="text"
            name="title"
            required
            value={job.title}
            onChange={handleJob}
          />
        </label>
        <label className="label">
          description mission
          <textarea
            name="description_mission"
            required
            value={job.description_mission}
            onChange={handleJob}
          />
        </label>
        <label className="label">
          description about candidate
          <textarea
            name="description_about_candidate"
            required
            value={job.description_about_candidate}
            onChange={handleJob}
          />
        </label>
        <label className="label">
          description position
          <input
            type="text"
            name="description_position"
            required
            value={job.description_position}
            onChange={handleJob}
          />
        </label>
        <label className="label">
          description advantages
          <input
            type="text"
            name="description_advantages"
            required
            value={job.description_advantages}
            onChange={handleJob}
          />
        </label>
        <label className="label">
          description process
          <textarea
            name="description_process"
            required
            value={job.description_process}
            onChange={handleJob}
          />
        </label>
        <label className="label">
          language
          <input
            type="text"
            name="language"
            required
            value={job.language}
            onChange={handleJob}
          />
        </label>
        <label className="label">
          salary
          <input
            type="text"
            name="salary"
            required
            value={job.salary}
            onChange={handleJob}
          />
        </label>
        <label className="label">
          location
          <input
            type="text"
            name="location"
            required
            value={job.location}
            onChange={handleJob}
          />
        </label>
        <label className="label">
          working type
          <input
            type="text"
            name="working_type"
            required
            value={job.working_type}
            onChange={handleJob}
          />
        </label>
        <label className="label">
          starting date
          <input
            type="date"
            name="starting_date"
            required
            value={job.starting_date}
            onChange={handleJob}
          />
        </label>
        <label className="label">
          position category
          <input
            type="text"
            name="position_category"
            required
            value={job.position_category}
            onChange={handleJob}
          />
        </label>
        <label className="label">
          contract type{" "}
          <input
            type="text"
            name="contract_type"
            required
            value={job.contract_type}
            onChange={handleJob}
          />
        </label>
        <label className="label">
          position requirements
          <input
            type="text"
            name="position_requirements"
            required
            value={job.position_requirements}
            onChange={handleJob}
          />
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AdminJob;
