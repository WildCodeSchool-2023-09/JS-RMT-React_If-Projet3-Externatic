import React, { useState, useEffect } from "react";
import connexion from "../../services/connexion";
import CompanyCard from "../../components/card/CompanyCard";

function ConsultantCompany() {
  const [companies, setCompanies] = useState([]);

  const getCompanies = async () => {
    try {
      const companys = await connexion.get(`/companies`);
      setCompanies(companys.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <div className="containerConsultant">
      {companies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </div>
  );
}

export default ConsultantCompany;
