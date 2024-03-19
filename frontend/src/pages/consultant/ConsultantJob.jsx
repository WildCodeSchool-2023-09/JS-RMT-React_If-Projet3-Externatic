import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import JobCard from "../../components/JobCard";
import "./ConsultantJob.css";
import connexion from "../../services/connexion";
import { AuthContext } from "../../contexts/auth";

function ConsultantJob() {
  const [jobs, setJobs] = useState([]);
  const { companyId } = useParams();
  const navigate = useNavigate();
  const { connected } = useContext(AuthContext);

  const getJobsByCompany = async () => {
    try {
      const myJobs = await connexion.get(`/companies/${companyId}/jobs`);
      setJobs(myJobs.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getJobsByCompany();
  }, []);

  useEffect(() => {
    if (connected.role_id !== 2) {
      navigate("/");
    }
  }, [connected, navigate]);

  return (
    <div>
      <div className="container">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            refresh={getJobsByCompany}
            cardStyle="job-card"
            isUserPage={false}
          />
        ))}
      </div>
    </div>
  );
}

export default ConsultantJob;
