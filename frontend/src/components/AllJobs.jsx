import PropTypes from "prop-types";
import JobCard from "./JobCard";

import "./AllJobs.css";

function AllJobs({ jobs }) {
  return (
    <div className="all-jobs-body">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

AllJobs.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description_position: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      salary: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
      position_category: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default AllJobs;
