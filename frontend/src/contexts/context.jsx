import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const JobContext = createContext();

export const useJobContext = () => useContext(JobContext);

export function JobProvider({ children }) {
  const initialFavorites = localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [];

  const [favorites, setFavorites] = useState(initialFavorites);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const manageFavorites = (jobId) => {
    if (favorites.includes(jobId)) {
      setFavorites(favorites.filter((id) => id !== jobId));
    } else {
      setFavorites([...favorites, jobId]);
    }
  };

  return (
    <JobContext.Provider value={{ favorites, manageFavorites }}>
      {children}
    </JobContext.Provider>
  );
}

JobProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
