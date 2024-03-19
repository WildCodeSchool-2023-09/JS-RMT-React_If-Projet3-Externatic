import PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import "./ConsultantJobOffre.css";

function ConsultantJobOffre() {
  const job = useLoaderData();
  const navigate = useNavigate();
  const { connected } = useContext(AuthContext);

  useEffect(() => {
    if (connected.role_id !== 2) {
      navigate("/");
    }
  }, [connected, navigate]);

  return (
    <div>
      <div className="consultant-job-offre">
        <h2>{job.name}</h2>

        <h2 className="consultant-job-offre-title">{job.title}</h2>

        <p>Type de contrat: {job.contract_type}</p>

        <p>Niveau de formation : {job.position_requirements}</p>

        <p>Lieux : {job.location}</p>

        <p>Salaire : {job.salary}</p>

        <p>Entrée en fonction : {job.starting_date}</p>

        <p>CSP : {job.position_category}</p>

        <p>Language : {job.language}</p>

        <h3 className="consultant-job-offre-title">L'entreprise et l'équipe</h3>
        <p>
          Cette PME, spécialisée dans le domaine de l'éducation, souhaite
          renforcer ses équipes <br /> dans le cadre de son internationalisation
          et du développement de nouveaux marchés.
          <br />
          L'équipe technique comprend 6 personnes managées par le CTO.
        </p>

        <p>
          <h3 className="consultant-job-offre-title">Les missions</h3>

          <p>{job.description_about_candidate}</p>

          <ul>
            Vous aurez notammnent en charge : <li>{job.description_mission}</li>
            <li>{job.description_advantages}</li>
            <li>{job.description_process}</li>
          </ul>
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
