import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { themeContext } from "../Context/ThemeContextProvider";
import { THEME } from "../Constants/ThemeConst";

const OneCountry = (props) => {
  const { theme, darkMode, lightMode } = useContext(themeContext);
  const { flag, nativeName, population, region, capital } = props;
  return (
    <NavLink to={`/InfoCountryPage/${nativeName}`}>
      <div className={theme === THEME.DARK ? "country" : "countryDark"}>
        <span>
          <img src={`${flag}`} alt={`${nativeName} flag not found`} />
        </span>
        <p>
          <b>Native Name: </b>
          {nativeName}
        </p>
        <p>
          <b>Population: </b>
          {population}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </NavLink>
  );
};

export default OneCountry;
