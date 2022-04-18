import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";

// import higherOrederComponent from '../HOC/WithAjax'

const InfoCountryPage = () => {
  const { name } = useParams();
  const infoCountryURL = `https://restcountries.com/v2/name/${name}`;
  const [url, setURL] = useState([]);

  const call=()=>{
    axios
    .get(infoCountryURL)
    .then((res) => setURL(res.data))
    .catch((cth) => alert("url not found"));
  }

  useEffect(() => {
  call()
  console.log('hi')
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      {url.map((info) => (
        <div key={info.name}>
          <div className="details">
            <div className="details1">
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
            <div className="details2">
              <p>
                <b>Top Level Domain: </b>
                {info.topLevelDomain}
              </p>
              <p>
                <b>Currencies: </b>
                {info.currencies[0].code}
              </p>
              <p>
                <b>Languages: </b>
                {info.languages.map((item) => (
                  <span key={item.name}>{item.name}, </span>
                ))}
              </p>
            </div>
          </div>
          <p>
            <b>Borders Countries: </b>
            {info.borders.map((item) => (
              <NavLink key={item} to={`/InfoCountryPage/${item}`}>
                <span >{item}</span>
              </NavLink>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};

export default InfoCountryPage;
