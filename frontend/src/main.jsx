import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import connexion from "./services/connexion";
import { JobProvider } from "./contexts/context";
import { AuthProvider } from "./contexts/auth";

import App from "./App";
import FormLogin from "./pages/FormLogin";
import FormRegister from "./pages/FormRegister";
import HomePage from "./pages/HomePage";
import AdminJobs from "./pages/AdminJobs";

import AllJobsPage from "./pages/AllJobsPage";
import ConsultantPage from "./pages/layout/ConsultantPage";
import ConsultantCompany from "./pages/consultant/ConsultantCompany";
import CandidatAccount from "./pages/CandidatAccount";
import ConsultantJob from "./pages/consultant/ConsultantJob";
import ConsultantJobOffre from "./pages/consultant/ConsultantJobOffre";
import AdminPage from "./pages/AdminPage";
import AdminSpecific from "./pages/AdminSpecific";
import FormCompany from "./pages/FormCompany";

import JobId from "./pages/jobId";
import CandidatApplications from "./pages/CandidatApplications";
import ConsultantApplication from "./pages/ConsultantApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/jobs/:jobId",
        element: <JobId />,
        loader: ({ params }) => {
          return connexion
            .get(`/jobs/${params.jobId}`)
            .then((res) => res.data)
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/",
        element: <HomePage />,
        loader: async () => {
          const response = await connexion.get(`/jobs/all/latest`);
          return response.data;
        },
      },
      {
        path: "jobs",
        element: <AllJobsPage />,
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const page = url.searchParams.get("page") || 1;
          const response = await connexion.get(
            `/jobs${url.search || "?page=1"}`
          );
          return { data: response.data, page: parseInt(page, 10) };
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
                .get(`/companies/${params.companyId}/jobs/${params.id}`)
                .then((res) => res.data)
                .catch((err) => console.error(err));
            },
          },
          {
            path: "applications",
            element: <ConsultantApplication />,
          },
          {
            path: "administration",
            children: [
              {
                path: "job/:id",
                element: <AdminJobs />,
              },
              {
                path: "job",
                element: <AllJobsPage />,
                loader: async ({ request }) => {
                  const url = new URL(request.url);
                  const page = url.searchParams.get("page") || 1;
                  const response = await connexion.get(
                    `/jobs${url.search || "?page=1"}`
                  );
                  return { data: response.data, page: parseInt(page, 10) };
                },
              },
            ],
          },
        ],
      },
      {
        path: "/login",
        element: <FormLogin />,
      },
      {
        path: "/register",
        element: <FormRegister />,
      },
      {
        path: "/account",
        element: <CandidatAccount />,
      },
      {
        path: "/account/applications",
        element: <CandidatApplications />,
      },
      {
        path: "/administration",
        element: <AdminPage />,
        children: [
          {
            path: "companies",
            element: (
              <AdminSpecific pageTitle="entreprise" route="/companies" />
            ),
          },
          {
            path: "companies/:id",
            element: <FormCompany />,
          },
          {
            path: "consultants",
            element: (
              <AdminSpecific pageTitle="consultants" route="/consultants" />
            ),
          },
          {
            path: "candidates",
            element: (
              <AdminSpecific pageTitle="candidats" route="/candidates" />
            ),
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
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </JobProvider>
  </React.StrictMode>
);
