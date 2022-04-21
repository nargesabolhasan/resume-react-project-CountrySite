import React, { useState, useContext, useEffect } from "react";
import OneCountry from "../OneCountry";
import { countryUrlContext } from "../../Context/URLContext";
import { useNavigate } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import axios from "axios";
import { themeContext } from "../../Context/ThemeContextProvider";
import { THEME } from "../../Constants/ThemeConst";

const InfoCountryPage = () => {
  const { theme } = useContext(themeContext);
  let navigate = useNavigate();
  const { AllCountry } = useContext(countryUrlContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [url, setURL] = useState([]);
  const infoCountryURL = `https://restcountries.com/v2/name/${AllCountry}`;
  useEffect(() => {
    setLoading(true);
    axios
      .get(infoCountryURL)
      .then((res) => setURL(res.data))
      .catch(() => setError("page not found"))
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
};

export default InfoCountryPage;
