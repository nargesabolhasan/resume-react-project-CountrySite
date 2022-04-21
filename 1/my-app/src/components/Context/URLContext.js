import React, { createContext, useState, useEffect } from "react";

export const countryUrlContext = createContext();

const URLContextProvider = ({ children }) => {
  const [AllCountry, setAllCountry] = useState("");
  
  const value = {
    AllCountry,
    changeUrl: (input) => setAllCountry(input),
  };

  return (
    <countryUrlContext.Provider value={value}>
      {children}
    </countryUrlContext.Provider>
  );
};

export default URLContextProvider;
