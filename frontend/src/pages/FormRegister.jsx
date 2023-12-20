import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

function FormRegister() {
  const { connected } = useContext(AuthContext);

  if (connected !== "connected") {
    return <Navigate to="/" replace />;
  }

  return <div>Register</div>;
}

export default FormRegister;
