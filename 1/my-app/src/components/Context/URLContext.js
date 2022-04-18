import React, { createContext } from "react";
import { useParams } from "react-router-dom";

export const countryUrlContext = createContext();

const URLContextProvider = ({ children }) => {
  const { name } = useParams();
  const infoCountryURL = `https://restcountries.com/v2/name/${name}`;
  return (
    <countryUrlContext.Provider value={infoCountryURL}>
      {children}
    </countryUrlContext.Provider>
  );
};

export default URLContextProvider;
