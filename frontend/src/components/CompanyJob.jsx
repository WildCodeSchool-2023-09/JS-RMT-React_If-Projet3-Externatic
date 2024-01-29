import React from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "./CompanyJob.css";

function CompanyJob({ job }) {
  const { companyId } = useParams();
  return (
    <div>
      <Link to={`/consultants/company/${companyId}/jobs/${job.id}`}>
        <div className="containerJobcompany">
          <ul className="jobCompanyHeader">
            <h3 className="jobCompanyTitle">{job.title}</h3>
          </ul>
          <div className="jobCompanyHeader">
            <li>{job.working_type}</li>

            <li> {job.position_requirements}</li>

            <li>{job.location}</li>

            <div className="jobCompanySalary">
              {job.contract_type} {job.salary}
            </div>

            <div>{job.created_at}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

CompanyJob.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    working_type: PropTypes.string.isRequired,
    position_requirements: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    contract_type: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};
export default CompanyJob;
