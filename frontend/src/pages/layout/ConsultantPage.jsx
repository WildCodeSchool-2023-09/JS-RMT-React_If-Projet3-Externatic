import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import "./ConsultantPage.css";
import { AuthContext } from "../../contexts/auth";

function ConsultantPage() {
  const { connected } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (connected.role_id !== 2) {
      navigate("/");
    }
  }, [connected, navigate]);

  return (
    <div>
      <h2 className="consultantTitre">Consultant</h2>
      <div className="container-ajout">
        <div className="application-button-container">
          <button
            type="button"
            className="connection-button"
            onClick={() => navigate("/consultants/applications")}
          >
            Voir mes candidatures
          </button>
        </div>
        <div className="container-ajout">
          <div className="ajout-card container-ajout">
            <Link to="/consultants/administration/job/new">
              <button className="connection-button ajout-card" type="button">
                Ajouter un job
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="containerConsultant">
        <Outlet />
      </div>
    </div>
  );
}

export default ConsultantPage;
