import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

// import higherOrederComponent from '../HOC/WithAjax'

const InfoCountryPage = () => {
  let { name } = useParams();
  const infoCountryURL = `https://restcountries.com/v2/name/${name}`;
  const CountryURL = "https://restcountries.com/v2/all";
  const [url, setURL] = useState([]);
  const [AllCountry, setAllCountry] = useState([]);
  let navigate = useNavigate();
//----axios at name:---------
  const axiosAtName = () => {
    axios
      .get(infoCountryURL)
      .then((res) => setURL(res.data))
      .catch((cth) => alert("info Country URL not found"));
  };
//----axios at all:---------
  useEffect(() => {
    axiosAtName();
    axios
      .get(CountryURL)
      .then((res) => setAllCountry(res.data))
      .catch((cth) => alert("AllCountry url not found"));
  }, [name]);
//----handle Borders:---------
  const handleBorders = (item) => {
    AllCountry.map((i) => {
      if (i.alpha3Code === item) {
        const country = i.name;
        name = country;
        navigate(`/InfoCountryPage/${country}`, { replace: true });
      }
    });
  };
//------handle goBack: ----------
const goBack=()=> {
  navigate('/', { replace: true });
}

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={goBack}>Back</button>
      {url.map((info) => (
        <div key={info.name}>
          <div className="details">
            <div className="details1">
              <div>
                <img src={info.flags.png} alt={`${info.nativeName} flag not found`}/>
              </div>
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
                {info.region ? info.region : "-"}
              </p>
              <p>
                <b>Sub Region: </b>
                {info.subregion ? info.subregion : "-"}
              </p>
              <p>
                <b>Capital: </b>
                {info.capital ? info.capital : "-"}
              </p>
            </div>
            <div className="details2">
              <p>
                <b>Top Level Domain: </b>
                {info.topLevelDomain ? info.topLevelDomain : "-"}
              </p>
              <p>
                <b>Currencies: </b>
                {info.currencies ? info.currencies[0].code : "-"}
              </p>
              <p>
                <b>Languages: </b>
                {info.languages
                  ? info.languages.map((item) => (
                      <span key={item.name}>{item.name}, </span>
                    ))
                  : "-"}
              </p>
            </div>
          </div>
          <p>
            <b>Borders Countries: </b>
            {info.borders
              ? info.borders.map((item) => (
                  <button key={item} onClick={() => handleBorders(item)}>{item}</button>
                ))
              : "-"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default InfoCountryPage;
