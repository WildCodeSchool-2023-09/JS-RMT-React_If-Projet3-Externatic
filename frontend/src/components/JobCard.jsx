import PropTypes from "prop-types";

import {
  Link,
  useParams,
  useSearchParams,
  useNavigate,
} from "react-router-dom";

import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import connexion from "../services/connexion";

import "./JobCard.css";
import { useJobContext } from "../contexts/context";
import { useAuthContext } from "../contexts/auth";

function JobCard({ job, cardStyle }) {
  const { favorites, manageFavorites } = useJobContext();
  const { connected } = useAuthContext();
  const { companyId } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dateDiffInDaysFromToday = (date) => {
    const targetDate = new Date(date);
    const today = new Date();

    return Math.abs(Math.ceil((targetDate - today) / (24 * 60 * 60 * 1000)));
  };

  const getLocation = (location) => {
    return `&location=${location}`;
  };

  const getLanguage = (language) => {
    return `&language=${language}`;
  };

  const getSearch = (search) => {
    return `&search=${search}`;
  };

  const handleClick = () => {
    const location = searchParams.get("location");
    const language = searchParams.get("language");
    const search = searchParams.get("search");
    navigate(
      `?${location ? getLocation(location) : ""}${
        language ? getLanguage(language) : ""
      }${search ? getSearch(search) : ""}`
    );
  };

  const deleteJob = async () => {
    try {
      await connexion.delete(`jobs/${job.id}`);
      handleClick();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={cardStyle}>
      {connected.role_id === 2 ? (
        <button type="button" onClick={deleteJob}>
          Supprimer
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
      ) : (
        <div className={`${cardStyle}-header`}>
          <Link to={`/consultants/company/${companyId}/jobs/${job.job_id}`}>
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
      )}
      <div className={`${cardStyle}-body`}>
        <div className={`${cardStyle}-requirement`}>
          <p className="job-card-language">{job.language}</p>
          <p className="job-card-position-category">{job.position_category}</p>
          <p>{job.position_requirements}</p>
        </div>
        <p className={`${cardStyle}-location`}>{job.location}</p>
        <div className={`${cardStyle}-salary-type`}>
          <p className="job-card-type">{job.contract_type}</p>
          <p className="job-card-salary">{job.salary}</p>
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
    job_id: PropTypes.number.isRequired,
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
