import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CompanyCard from "../../components/card/CompanyCard";
import { AuthContext } from "../../contexts/auth";
import connexion from "../../services/connexion";

function ConsultantCompany() {
  const [companies, setCompanies] = useState([]);
  const { connected } = useContext(AuthContext);
  const navigate = useNavigate();

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

  useEffect(() => {
    if (connected.role_id !== 2) {
      navigate("/");
    }
  }, [connected, navigate]);

  return (
    <div className="containerConsultant">
      {companies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </div>
  );
}

export default ConsultantCompany;
