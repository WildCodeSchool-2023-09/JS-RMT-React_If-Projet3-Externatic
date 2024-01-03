import React from "react";
import { useLoaderData } from "react-router-dom";

function Company() {
  const job = useLoaderData();
  return (
    <div>
      <p>{job.title}</p>
    </div>
  );
}

export default Company;
