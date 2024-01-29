import React, { useState, useEffect } from "react";
import CompanyCard from "../../components/card/CompanyCard";
import connexion from "../../services/connexion";

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
