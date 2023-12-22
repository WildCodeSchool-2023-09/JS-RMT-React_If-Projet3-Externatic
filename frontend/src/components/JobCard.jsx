import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./JobCard.css";

function JobCard({ job }) {
  const dateDiffInDaysFromToday = (date) => {
    const targetDate = new Date(date);
    const today = new Date();

    return Math.abs(Math.ceil((targetDate - today) / (24 * 60 * 60 * 1000)));
  };

  return (
    <div className="job-card">
      <Link to={`/jobs/${job.id}`}>
        <div className="job-card-body">
          <h3 className="job-card-title">{job.title}</h3>
          <div className="job-card-language">{job.language}</div>
          <div className="job-card-position-category">
            {job.position_category}
          </div>
          <div className="job-card-location">{job.location}</div>
          <div className="job-card-salary">{job.salary}</div>
          <div className="job-card-publish-date">
            {dateDiffInDaysFromToday(job.created_at) === 0
              ? "Offre publiée aujourd'hui"
              : `Offre publiée il y a ${dateDiffInDaysFromToday(
                  job.created_at
                )} jour(s)`}
          </div>
        </div>
      </Link>
    </div>
  );
}

JobCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description_position: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    position_category: PropTypes.string.isRequired,
  }).isRequired,
};

export default JobCard;
