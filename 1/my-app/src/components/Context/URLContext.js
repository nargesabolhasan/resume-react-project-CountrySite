import React, { createContext,useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const countryUrlContext = createContext();

const URLContextProvider = ({ children }) => {
  const { name } = useParams();
  const [AllCountry, setAllCountry] = useState([]);
  const infoCountryURL = `https://restcountries.com/v2/name/${name}`;
  const CountryURL="https://restcountries.com/v2/all"
  
  useEffect(() => {
    axios
      .get(CountryURL)
      .then((res) => setAllCountry(prev => ([...prev, res.data])))
      .catch((cth) => alert("AllCountry url not found"));
  },[]);

  return (
    <countryUrlContext.Provider value={AllCountry}>
      {children}
    </countryUrlContext.Provider>
  );
};

export default URLContextProvider;
