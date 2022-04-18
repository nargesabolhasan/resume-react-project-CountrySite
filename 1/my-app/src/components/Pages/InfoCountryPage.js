import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// import higherOrederComponent from '../HOC/WithAjax'

const InfoCountryPage = () => {
  const { name } = useParams();
  const infoCountryURL = `https://restcountries.com/v2/name/${name}?fullText=true`;
  const [url, setURL] = useState([]);
  
  useEffect(() => {
    axios
      .get(infoCountryURL)
      .then((res) => setURL(res.data))
      .catch((cth) => alert("url not found"));
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <div>
        {url.map((info) => (
          <div key={info.name} className="details1">
            <p>
              <b>Native Name: </b>
              {info.nativeName}
            </p>
            <p>
              <b>Population: </b>
              {info.population}
            </p>
            <p>
              <b>Region: </b>
              {info.region}
            </p>
            <p>
              <b>Sub Region: </b>
              {info.subregion}
            </p>
            <p>
              <b>Capital: </b>
              {info.capital}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCountryPage;
