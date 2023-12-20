import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ConsultantPage from "./pages/ConsultantPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/consultants",
    element: <ConsultantPage />,
    loader: async () => {
      const consultant = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/consultants`)
        .then((res) => res.data);
      return consultant;
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
