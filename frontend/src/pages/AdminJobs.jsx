import React, { useState } from "react";

import connexion from "../services/connexion";
import SelectConsultant from "../components/SelectConsultant";
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
      <main>
        <div className="form-container">
          <form className="form-connection" onSubmit={postJob}>
            <div className="form-alllabel">
              <SelectConsultant
                label="Entreprise"
                text="Choisissez une entreprise"
                url="companies"
                criteria="name"
                handleSelect={handleJob}
                name="company_id"
                className="filter-select"
              />
              <SelectConsultant
                label="Consultant"
                text="Choisissez un consultant"
                url="consultants"
                criteria="firstname"
                handleSelect={handleJob}
                name="consultant_id"
                className="filter-select"
              />
              <label>
                Titre
                <input
                  type="text"
                  name="title"
                  required
                  value={job.title}
                  onChange={handleJob}
                  className="label-form"
                />
              </label>
              <label>
                Description de la mission
                <textarea
                  name="description_mission"
                  required
                  value={job.description_mission}
                  onChange={handleJob}
                  className="label-form"
                />
              </label>
              <label>
                Description sur le candidat
                <textarea
                  name="description_about_candidate"
                  required
                  value={job.description_about_candidate}
                  onChange={handleJob}
                  className="label-form"
                />
              </label>
              <label>
                Description de la position
                <input
                  type="text"
                  name="description_position"
                  required
                  value={job.description_position}
                  onChange={handleJob}
                  className="label-form"
                />
              </label>
              <label>
                Description des avantages
                <input
                  type="text"
                  name="description_advantages"
                  required
                  value={job.description_advantages}
                  onChange={handleJob}
                  className="label-form"
                />
              </label>
              <label>
                Description du process
                <textarea
                  name="description_process"
                  required
                  value={job.description_process}
                  onChange={handleJob}
                  className="label-form"
                />
              </label>
              <SelectFromList
                label="Language"
                text="Choisissez un language"
                handleSelect={handleJob}
                name="language"
                dataSet={["Java-script", "React", "PHP", "Java"]}
                className="label-form"
              />
              <label>
                Salaire
                <input
                  type="text"
                  name="salary"
                  required
                  value={job.salary}
                  onChange={handleJob}
                  className="label-form"
                />
              </label>
              <label>
                Localisation
                <input
                  type="text"
                  name="location"
                  required
                  value={job.location}
                  onChange={handleJob}
                  className="label-form"
                />
              </label>
              <SelectFromList
                label="Horaire hebdomadaire"
                text="Choisissez un horaire hebdomadaire"
                handleSelect={handleJob}
                name="working_type"
                dataSet={["35 heures", "30 heures", "25 heures"]}
                className="label-form"
              />
              <label>
                Date de début
                <input
                  type="date"
                  name="starting_date"
                  required
                  value={job.starting_date}
                  onChange={handleJob}
                  className="label-form"
                />
              </label>
              <label>
                Position
                <input
                  type="text"
                  name="position_category"
                  required
                  value={job.position_category}
                  onChange={handleJob}
                  className="label-form"
                />
              </label>
              <SelectFromList
                label="Contrat Type"
                text="Choisissez un type de contrat"
                handleSelect={handleJob}
                name="contract_type"
                dataSet={["CDI", "CDD", "Alternance", "Stage"]}
                className="label-form"
              />
              <label>
                Qualification
                <input
                  type="text"
                  name="position_requirements"
                  required
                  value={job.position_requirements}
                  onChange={handleJob}
                  className="label-form"
                />
              </label>
              <div className="button-container">
                <button type="submit" className="connection-button">
                  Ajouter
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default AdminJobs;
