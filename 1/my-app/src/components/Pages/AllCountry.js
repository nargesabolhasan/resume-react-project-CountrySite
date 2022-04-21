import React, { useContext } from "react";
import higherOrederComponent from "../HOC/WithAjax";
import { CountryURL } from "../Constants/constant";
import OneCountry from "./OneCountry";
import SearchBar from "./Search&Filter/SearchBar";
import { themeContext } from "../Context/ThemeContextProvider";
import { THEME } from "../Constants/ThemeConst";

const Country = ({ url, error, loading }) => {

  const { theme } = useContext(themeContext);
 
  if (error) {
    return <span className={theme === THEME.DARK ? "loader" : "loaderDark"}>{error}</span>;
  } else if (loading) {
    return <span className={theme === THEME.DARK ? "loader" : "loaderDark"}>wait to loading...</span>;
  } else {
    return (
      <>
        <SearchBar />
        <div className={theme === THEME.DARK ? "countries" : "countriesDark"}>
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

export default higherOrederComponent(Country, CountryURL);
