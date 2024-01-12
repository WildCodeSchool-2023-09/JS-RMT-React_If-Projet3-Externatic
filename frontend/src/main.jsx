import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import connexion from "./services/connexion";
import { JobProvider } from "./contexts/context";
import { AuthProvider } from "./contexts/auth";

import App from "./App";
import FormLogin from "./pages/FormLogin";
import HomePage from "./pages/HomePage";

import AllJobsPage from "./pages/AllJobsPage";
import ConsultantPage from "./pages/layout/ConsultantPage";
import ConsultantCompany from "./pages/consultant/ConsultantCompany";

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
        loader: ({ request }) => {
          const url = new URL(request.url);
          const page = url.searchParams.get("page") || 1;

          return connexion
            .get(`/jobs${url.search || "?page=1"}`)
            .then((response) => {
              return { data: response.data, page: parseInt(page, 10) };
            });
        },
      },
      {
        path: "/consultants/",
        element: <ConsultantPage />,
        children: [
          {
            path: "company",
            element: <ConsultantCompany />,
          },
        ],
      },
      {
        path: "/login",
        element: <FormLogin />,
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
