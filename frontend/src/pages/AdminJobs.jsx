import React, { useState } from "react";

import connexion from "../services/connexion";
import Select from "../components/Select";
import SelectFromList from "../components/SelectFromList";
import "./Adminjobs.css";

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

function AdminJobs() {
  const [job, setJob] = useState(jobType);
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

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
      setIsSubmissionSuccessful(true);
      setJob(jobType);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h2>Ajout d'un job</h2>
      {isSubmissionSuccessful && (
        <p>Votre annonce a été envoyée avec succès.</p>
      )}
      <form onSubmit={postJob}>
        <Select
          label="Entreprise"
          text="Choisissez une entreprise"
          url="companies"
          criteria="name"
          handleSelect={handleJob}
          name="company_id"
        />
        <Select
          label="Consultant"
          text="Choisissez un consultant"
          url="consultants"
          criteria="firstname"
          handleSelect={handleJob}
          name="consultant_id"
        />
        <label className="label">
          Titre
          <input
            type="text"
            name="title"
            required
            value={job.title}
            onChange={handleJob}
          />
        </label>
        <label className="label">
          Description de la mission
          <textarea
            name="description_mission"
            required
            value={job.description_mission}
            onChange={handleJob}
          />
        </label>
        <label className="label">
          Description sur le candidat
          <textarea
            name="description_about_candidate"
            required
            value={job.description_about_candidate}
            onChange={handleJob}
          />
        </label>
        <label className="label">
          Description de la position
          <input
            type="text"
            name="description_position"
            required
            value={job.description_position}
            onChange={handleJob}
          />
        </label>
        <label className="label">
          Description des avantages
          <input
            type="text"
            name="description_advantages"
            required
            value={job.description_advantages}
            onChange={handleJob}
          />
        </label>
        <label className="label">
          Description du process
          <textarea
            name="description_process"
            required
            value={job.description_process}
            onChange={handleJob}
          />
        </label>
        <SelectFromList
          label="Language"
          text="Choisissez un language"
          handleSelect={handleJob}
          name="language"
          dataSet={["Java-script", "React", "PHP", "Java"]}
        />
        <label className="label">
          Salaire
          <input
            type="text"
            name="salary"
            required
            value={job.salary}
            onChange={handleJob}
          />
        </label>
        <label className="label">
          Localisation
          <input
            type="text"
            name="location"
            required
            value={job.location}
            onChange={handleJob}
          />
        </label>
        <SelectFromList
          label="Horaire hebdomadaire"
          text="Choisissez un horaire hebdomadaire"
          handleSelect={handleJob}
          name="working_type"
          dataSet={["35 heures", "30 heures", "25 heures"]}
        />
        <label className="label">
          Date de début
          <input
            type="date"
            name="starting_date"
            required
            value={job.starting_date}
            onChange={handleJob}
          />
        </label>
        <label className="label">
          Position
          <input
            type="text"
            name="position_category"
            required
            value={job.position_category}
            onChange={handleJob}
          />
        </label>
        <SelectFromList
          label="Contrat Type"
          text="Choisissez un type de contrat"
          handleSelect={handleJob}
          name="contract_type"
          dataSet={["CDI", "CDD", "Alternance", "Stage"]}
        />
        <label className="label">
          Qualification
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

export default AdminJobs;
