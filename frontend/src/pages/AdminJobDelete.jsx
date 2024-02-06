import { useEffect, useState } from "react";
import connexion from "../services/connexion";
import ConsultantJobCard from "../components/ConsultantJobCard";

function AdminJobDelete() {
  const [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    try {
      const myJobs = await connexion.get(`/jobs`).then((res) => res.data.jobs);
      setJobs(myJobs);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  const deleteJob = async (id) => {
    try {
      await connexion.delete(`jobs/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="admin-section">
      <section>
        <tbody className="admin-cards-container">
          {jobs.map((jo) => (
            <ConsultantJobCard key={jo.id} job={jo} deleteJob={deleteJob} />
          ))}
        </tbody>
      </section>
    </div>
  );
}

export default AdminJobDelete;
