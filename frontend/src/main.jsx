import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import connexion from "./services/connexion";
import { JobProvider } from "./contexts/context";

import App from "./App";

import AllJobsPage from "./pages/AllJobsPage";
import ConsultantPage from "./pages/layout/ConsultantPage";
import ConsultantCompany from "./pages/consultant/ConsultantCompany";
import CompanyPage from "./pages/company/CompanyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "jobs",
        element: <AllJobsPage />,
        loader: () => {
          return connexion.get(`/jobs`).then((response) => {
            return response.data;
          });
        },
      },
    ],
  },
  {
    path: "/consultants/",
    element: <ConsultantPage />,
    children: [
      {
        path: "company",
        element: <ConsultantCompany />,
      },
      {
        path: "client",
        element: <CompanyPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <JobProvider>
      <RouterProvider router={router} />
    </JobProvider>
  </React.StrictMode>
);
