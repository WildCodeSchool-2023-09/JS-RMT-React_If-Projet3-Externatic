import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import JobCard from "../../components/JobCard";
import "./ConsultantJob.css";
import connexion from "../../services/connexion";

function ConsultantJob() {
  const [jobs, setJobs] = useState([]);
  const { companyId } = useParams();

  const getJobsByCompany = async () => {
    const myJobs = await connexion
      .get(`/companies/${companyId}/jobs`)
      .then((res) => res.data)
      .catch((err) => console.error(err));

    setJobs(myJobs);
  };

  useEffect(() => {
    getJobsByCompany();
  }, []);

  return (
    <div>
      <div className="ajout-card">
        <Link to="new">
          <button className="connection-button ajout-card" type="button">
            Ajouter un job
          </button>
        </Link>
      </div>
      <div className="container">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            refresh={getJobsByCompany}
            cardStyle="job-card"
          />
        ))}
      </div>
    </div>
  );
}

export default ConsultantJob;
