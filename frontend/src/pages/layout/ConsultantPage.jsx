import { Outlet } from "react-router-dom";
import "./ConsultantPage.css";

function ConsultantPage() {
  return (
    <div>
      <h2 className="consultantTitre">Consultant</h2>
      <div className="containerConsultant">
        <Outlet />
      </div>
    </div>
  );
}

export default ConsultantPage;
