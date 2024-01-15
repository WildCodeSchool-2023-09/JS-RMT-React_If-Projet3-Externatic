import PropTypes from "prop-types";
import React from "react";

import "./ConsultantJobOffre.css";
import { useLoaderData } from "react-router-dom";

function ConsultantJobOffre() {
  const job = useLoaderData();

  return (
    <div>
      <div className="consultantjoboffre">
        <div>{job.name}</div>

        <h2 className="consultantjoboffretitle">{job.title}</h2>
        <p>
          <div>Durée de travail : {job.contract_type}</div>
          <div>Niveau de formation : {job.position_requirements}</div>
          <div>Lieux : {job.location}</div>
        </p>
        <p>
          <div>Salaire : {job.salary}</div>
          <div>Entrée en fonction : {job.starting_date}</div>
          <div>CSP : {job.position_category}</div>
          <div>Language : {job.language}</div>
        </p>
        <div>
          <h3 className="consultantjoboffretitle">L'entreprise et l'équipe</h3>
          <p>
            Cette PME, spécialisée dans le domaine de l'éducation, souhaite
            renforcer ses équipes <br /> dans le cadre de son
            internationalisation et du développement de nouveaux marchés.
            <br />
            L'équipe technique comprend 6 personnes managées par le CTO.
          </p>
        </div>
        <p>
          <h3 className="consultantjoboffretitle">Les missions</h3>
          <div>
            <div>{job.description_about_candidate}</div>
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
