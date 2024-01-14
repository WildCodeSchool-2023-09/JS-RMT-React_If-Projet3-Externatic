import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import connexion from "./services/connexion";
import { JobProvider } from "./contexts/context";

import App from "./App";
import HomePage from "./pages/HomePage";
import Administration from "./pages/admin/Administration";
import AdminJob from "./pages/admin/AdminJob";

import AllJobsPage from "./pages/AllJobsPage";
import ConsultantPage from "./pages/layout/ConsultantPage";
import ConsultantCompany from "./pages/consultant/ConsultantCompany";
import ConsultantJob from "./pages/consultant/ConsultantJob";
import ConsultantJobOffre from "./pages/consultant/ConsultantJobOffre";

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
          },
          {
            path: "company/:companyId/jobs/:id",
            element: <ConsultantJobOffre />,
            loader: ({ params }) => {
              return connexion
                .get(`/jobs/${params.id}`)
                .then((res) => res.data)
                .catch((err) => console.error(err));
            },
          },
          {
            path: "administration",
            element: <Administration />,
            children: [
              {
                path: "Job",
                element: <AdminJob />,
              },
            ],
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
