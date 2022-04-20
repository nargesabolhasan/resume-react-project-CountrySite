import React, {  useEffect } from "react";
import { NavLink } from "react-router-dom";

const OneCountry = (props) => {
  const { flag, nativeName, population, region, capital } = props;
  return (
    <NavLink to={`/InfoCountryPage/${nativeName}`}>
      <div className="country">
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
