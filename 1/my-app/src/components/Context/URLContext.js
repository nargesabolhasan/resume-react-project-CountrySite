import React, { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
