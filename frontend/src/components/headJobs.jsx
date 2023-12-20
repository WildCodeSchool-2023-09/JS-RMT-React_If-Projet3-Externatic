import React from "react";
import { useLoaderData } from "react-router-dom";

function HeadJob() {
  const job = useLoaderData();
  return (
    <div>
      <div>{job.title}</div>
    </div>
  );
}

export default HeadJob;
