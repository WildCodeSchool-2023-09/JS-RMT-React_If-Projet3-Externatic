import React from "react";
import { useLoaderData } from "react-router-dom";

function ConsultantJob() {
  const consultantJob = useLoaderData();

  return (
    <div>
      <div>
        <div>
          <p>{consultantJob.title}</p>
          <p>{consultantJob.description_mission}</p>
          <p>{consultantJob.description_about_candidate}</p>
          <p>{consultantJob.description_position}</p>
        </div>
      </div>
    </div>
  );
}

export default ConsultantJob;
