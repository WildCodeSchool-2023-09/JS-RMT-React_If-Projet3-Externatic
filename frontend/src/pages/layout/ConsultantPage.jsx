import { Outlet, useNavigate } from "react-router-dom";
import "./ConsultantPage.css";

function ConsultantPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="consultantTitre">Consultant</h2>
      <div className="application-button-container">
        <button
          type="button"
          className="connection-button"
          onClick={() => navigate("/consultants/applications")}
        >
          Voir mes candidatures
        </button>
      </div>

      <div className="containerConsultant">
        <Outlet />
      </div>
    </div>
  );
}

export default ConsultantPage;
