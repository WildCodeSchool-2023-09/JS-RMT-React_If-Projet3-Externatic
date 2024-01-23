import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import connexion from "../services/connexion";
import SelectExternatic from "./SelectExternatic";

import "./FiltersBar.css";

function FiltersBar() {
  const [locations, setLocations] = useState([]);
  const [languages, setLanguages] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        const responseLocations = await connexion.get("/locations");
        setLocations(responseLocations.data);
        const responseLanguages = await connexion.get("/languages");
        setLanguages(responseLanguages.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="filters-bar">
      <SelectExternatic
        filterType="location"
        optionsList={locations}
        title="Selectionner une ville"
        filterValue={location.search}
      />
      <SelectExternatic
        filterType="language"
        optionsList={languages}
        title="Selectionner un language"
        filterValue={location.search}
      />
    </div>
  );
}

export default FiltersBar;
