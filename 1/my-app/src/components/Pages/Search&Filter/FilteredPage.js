import React, { useState, useContext, useEffect } from "react";
import OneCountry from "../OneCountry";
import SearchBar from "./SearchBar";
import { countryUrlContext } from "../../Context/URLContext";
import {  useNavigate ,useParams} from "react-router-dom";
import { HiArrowNarrowLeft } from 'react-icons/hi'
import axios from "axios";

const InfoCountryPage = () => {
  const { AllCountry } = useContext(countryUrlContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [url, setURL] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get(AllCountry)
      .then((res) => setURL(res.data))
      .catch(() => setError("url at HOC not found"))
      .finally(() => setLoading(false));        
  }, []);
  console.log(url)

  if (error) {
    return <>{error}</>;
  } else if (loading) {
    return <span className="loader">wait to loading...</span>;
  } else {
    return (
      <>
        <SearchBar />
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
      </>
    );
  }
};

export default InfoCountryPage;
