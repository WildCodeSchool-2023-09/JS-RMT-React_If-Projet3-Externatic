import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CompanyJob from "../../components/CompanyJob";
import "./ConsultantJob.css";
import connexion from "../../services/connexion";

function ConsultantJob() {
  const [jobs, setJobs] = useState([]);
  const { companyId } = useParams();
  const getJobsByCompany = async () => {
    const myJobs = await connexion

      .get(`/companies/${companyId}/jobs`)
      .then((res) => {
        return res.data;
      });

    setJobs(myJobs);
  };

  useEffect(() => {
    getJobsByCompany();
  }, []);

  return (
    <div>
      <div>
        <div className="container">
          {jobs.map((job) => (
            <CompanyJob key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ConsultantJob;
