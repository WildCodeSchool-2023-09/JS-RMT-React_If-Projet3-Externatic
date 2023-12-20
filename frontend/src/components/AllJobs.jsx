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
  jobs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default AllJobs;
