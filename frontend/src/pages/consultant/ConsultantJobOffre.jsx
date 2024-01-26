import PropTypes from "prop-types";
import React from "react";

import "./ConsultantJobOffre.css";
import { useLoaderData } from "react-router-dom";

function ConsultantJobOffre() {
  const job = useLoaderData();

  return (
    <div>
      <div className="consultant-job-offre">
        <div>
          <h2>{job.name}</h2>
        </div>

        <h2 className="consultant-job-offre-title">{job.title}</h2>

        <div>
          <p>Type de contrat: {job.contract_type}</p>
        </div>
        <div>
          <p>Niveau de formation : {job.position_requirements}</p>
        </div>
        <div>
          <p>Lieux : {job.location}</p>
        </div>
        <div>
          <div>
            <p>Salaire : {job.salary}</p>
          </div>
          <div>
            <p>Entrée en fonction : {job.starting_date}</p>
          </div>
          <div>
            <p>CSP : {job.position_category}</p>
          </div>
          <div>
            <p>Language : {job.language}</p>
          </div>
        </div>
        <div>
          <h3 className="consultant-job-offre-title">
            L'entreprise et l'équipe
          </h3>
          <p>
            Cette PME, spécialisée dans le domaine de l'éducation, souhaite
            renforcer ses équipes <br /> dans le cadre de son
            internationalisation et du développement de nouveaux marchés.
            <br />
            L'équipe technique comprend 6 personnes managées par le CTO.
          </p>
        </div>
        <p>
          <h3 className="consultant-job-offre-title">Les missions</h3>
          <div>
            <div>
              <p>{job.description_about_candidate}</p>
            </div>
            Vous aurez notammnent en charge : <li>{job.description_mission}</li>
            <li>{job.description_advantages}</li>
            <li>{job.description_process}</li>
          </div>
        </p>
      </div>
    </div>
  );
}

ConsultantJobOffre.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    working_type: PropTypes.string.isRequired,
    position_requirements: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    contract_type: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    description_mission: PropTypes.string.isRequired,
    description_about_candidate: PropTypes.string.isRequired,
    description_advantages: PropTypes.string.isRequired,
    description_process: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    starting_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default ConsultantJobOffre;
