import React, { useEffect, useState ,useContext} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { themeContext } from "../Context/ThemeContextProvider";
import { THEME } from "../Constants/ThemeConst";
import higherOrederComponent from "../HOC/WithAjax";
import { CountryURL } from "../Constants/constant";

const InfoCountryPage = ({url}) => {

  const { theme } = useContext(themeContext);

  let { name } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [AllCountry, setAllCountry] = useState([]);

  const infoCountryURL = `https://restcountries.com/v2/name/${name}`;

  let navigate = useNavigate();

  useEffect(()=>{
    axiosAtName()
  },[name])
  //----axios at name:---------
  const axiosAtName = () => {
    setLoading(true);
    axios
      .get(infoCountryURL)
      .then((res) => setAllCountry(res.data))
      .catch(() => setError("info Country URL not found"))
      .finally(() => setLoading(false));    
  };

  //----handle Borders:---------
  const handleBorders = (item) => {
    url.map((i) => {
      if (i.alpha3Code === item) {
        const country = i.name;
        name = country;
        navigate(`/InfoCountryPage/${country}`, { replace: true });
      }
    });
  };

  //------handle goBack: ----------
  const goBack = () => {
    navigate("/", { replace: true });
  };

  
  if (error) {
    return <span className={theme === THEME.DARK ? "loader" : "loaderDark"}>{error}</span>;
  } else if (loading) {
    return <span className={theme === THEME.DARK ? "loader" : "loaderDark"}>wait to loading...</span>;
  } else {
  return (
   <div className={theme === THEME.DARK ? "singleCountry" : "singleCountryDark"} >
     <button onClick={goBack}><HiArrowNarrowLeft />goBack</button>
      {AllCountry.map((info) => (
        <div className={theme === THEME.DARK ? "countryContainer" : "countryContainerDark"} key={info.nativeName}>
          <img src={info.flags.png} alt={`${info.nativeName} flag not found`} />
          <section style={{width:"100vw"}}>
            <h1> {name}</h1>
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
              <div className="details3">
                <p>
                  <b>Borders Countries: </b>
                  {info.borders
                    ? info.borders.map((item) => (
                        <button
                          className="details3"
                          key={item}
                          onClick={() => handleBorders(item)}
                        >
                          {item}
                        </button>
                      ))
                    : "-"}
                </p>
              </div>
          </section>
        </div>
      ))}
    </div>
  );}
};

export default higherOrederComponent(InfoCountryPage,CountryURL);
