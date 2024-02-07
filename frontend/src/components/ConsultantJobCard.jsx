import React from "react";
import PropTypes from "prop-types";

function ConsultantJobCard({ job, deleteJob }) {
  return (
    <tr className="admin-card" key={job.id}>
      <td>{job.name}</td>
      <td>{job.title}</td>
      <td>{job.starting_date}</td>
      <td className="admin-card-buttons-container">
        <button
          className="connection-button admin-button"
          type="button"
          onClick={() => deleteJob(job.id)}
        >
          Supprimer
        </button>
      </td>
    </tr>
  );
}

ConsultantJobCard.propTypes = {
  deleteJob: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    starting_date: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default ConsultantJobCard;
