import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

import connexion from "./services/connexion";
import { JobProvider } from "./contexts/context";

import App from "./App";
import HomePage from "./pages/HomePage";

import AllJobsPage from "./pages/AllJobsPage";
import ConsultantPage from "./pages/layout/ConsultantPage";
import ConsultantCompany from "./pages/consultant/ConsultantCompany";
import ConsultantJob from "./pages/consultant/ConsultantJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "jobs",
        element: <AllJobsPage />,
        loader: () => {
          return connexion.get("/jobs").then((response) => {
            return response.data;
          });
        },
      },
      {
        path: "consultants",
        element: <ConsultantPage />,
        children: [
          {
            path: "company",
            element: <ConsultantCompany />,
          },
          {
            path: "company/:companyId",
            element: <ConsultantJob />,
            loader: async ({ params }) => {
              const company = await axios
                .get(
                  `${import.meta.env.VITE_BACKEND_URL}/api/companies/${
                    params.companyId
                  }`
                )
                .then((res) => {
                  return res.data;
                });

              return company;
            },
          },
        ],
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
