import React, { useState, useContext, useEffect } from "react";
import OneCountry from "../OneCountry";
import { countryUrlContext } from "../../Context/URLContext";
import { useNavigate } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import axios from "axios";
import { themeContext } from "../../Context/ThemeContextProvider";
import { THEME } from "../../Constants/ThemeConst";

const RegionFilter = () => {
  let navigate = useNavigate();

  const { theme } = useContext(themeContext);
  const { AllCountry } = useContext(countryUrlContext);

    const RegionURL=`https://restcountries.com/v2/region/${AllCountry}`
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [url, setURL] = useState([]);

    useEffect(() => {
      setLoading(true);
      axios
        .get(RegionURL)
        .then((res) => setURL(res.data))
        .catch(() => setError("url at HOC not found"))
        .finally(() => setLoading(false));        
    }, []);

//------handle goBack: ----------
const goBack = () => {
  navigate("/", { replace: true });
};

if (error) {
  return (
    <span className={theme === THEME.DARK ? "loader" : "loaderDark"}>
      {error}
    </span>
  );
} else if (loading) {
  return (
    <span className={theme === THEME.DARK ? "loader" : "loaderDark"}>
      wait to loading...
    </span>
  );
} else {
  return (
    <div className="singleCountry">
      <button onClick={goBack}>
        <HiArrowNarrowLeft />
        goBack
      </button>
      <div className="countries">
        {url.map((value) => {
          return (
            <OneCountry
              key={value.name}
              flag={value.flags.png}
              nativeName={value.name}
              population={value.population}
              region={value.region}
              capital={value.capital}
            />
          );
        })}
      </div>
    </div>
  );
}
}

export default RegionFilter