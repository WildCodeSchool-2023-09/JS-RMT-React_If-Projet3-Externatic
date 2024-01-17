import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

import "./JobCard.css";
import { useJobContext } from "../contexts/context";

function JobCard({ job, cardStyle }) {
  const { favorites, manageFavorites } = useJobContext();

  const dateDiffInDaysFromToday = (date) => {
    const targetDate = new Date(date);
    const today = new Date();

    return Math.abs(Math.ceil((targetDate - today) / (24 * 60 * 60 * 1000)));
  };

  return (
    <div className={cardStyle}>
      <div className={`${cardStyle}-header`}>
        <Link to={`/jobs/${job.id}`}>
          <h3 className={`${cardStyle}-title`}>{job.title}</h3>
        </Link>
        <button
          type="button"
          aria-label="Add to favorites"
          className="fav-button"
          onClick={() => manageFavorites(job.id)}
        >
          {favorites.includes(job.id) ? <IoIosHeart /> : <IoIosHeartEmpty />}
        </button>
      </div>
      <div className={`${cardStyle}-body`}>
        <div className={`${cardStyle}-requirement`}>
          <div className="job-card-language">{job.language}</div>
          <div className="job-card-position-category">
            {job.position_category}
          </div>
          <div>{job.position_requirements}</div>
        </div>
        <div className={`${cardStyle}-location`}>{job.location}</div>
        <div className={`${cardStyle}-salary-type`}>
          <div className="job-card-type">{job.contract_type}</div>
          <div className="job-card-salary">{job.salary}</div>
        </div>
        <div className={`${cardStyle}-publish-date`}>
          {dateDiffInDaysFromToday(job.created_at) === 0
            ? "Offre publiée aujourd'hui"
            : `Offre publiée il y a ${dateDiffInDaysFromToday(
                job.created_at
              )} jour(s)`}
        </div>
      </div>
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
    position_requirements: PropTypes.string.isRequired,
    contract_type: PropTypes.string.isRequired,
  }).isRequired,
  cardStyle: PropTypes.string.isRequired,
};

export default JobCard;
