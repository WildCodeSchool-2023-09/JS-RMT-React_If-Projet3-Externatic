import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../contexts/auth";

function CandidatAccount() {
  const { connected } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (connected.role_id !== 3) {
      navigate("/");
    }
  }, [connected]);
  return <div>CandidatAccount</div>;
}

export default CandidatAccount;
