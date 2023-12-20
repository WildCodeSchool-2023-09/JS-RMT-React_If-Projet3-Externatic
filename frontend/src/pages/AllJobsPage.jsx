import React from "react";
import { useLoaderData } from "react-router-dom";

import AllJobs from "../components/AllJobs";

function AllJobsPage() {
  const allJobs = useLoaderData();
  return (
    <div>
      {/* {console.log(allJobs)} */}
      <h1>Vos opportunités d'emploi</h1>
      <AllJobs jobs={allJobs} />
    </div>
  );
}

export default AllJobsPage;
