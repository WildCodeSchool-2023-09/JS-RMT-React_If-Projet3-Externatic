import { useLoaderData } from "react-router-dom";
import Consultant from "../components/consultant/Consultant";
import "./ConsultantPage.css";

function ConsultantPage() {
  const consultants = useLoaderData();
  return (
    <div>
      <h2 className="consultantTitre">Consultant</h2>
      <div className="containerConsultant">
        {consultants.map((consultant) => (
          <Consultant key={consultant.id} consultant={consultant} />
        ))}
      </div>
    </div>
  );
}

export default ConsultantPage;
