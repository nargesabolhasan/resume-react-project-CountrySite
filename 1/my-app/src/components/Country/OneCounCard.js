import React from "react";

const OneCounCard = (props) => {
  const { flag,nativeName, population, region, capital } = props;
  return (
    <div>
        <span>
        <img src={`${flag}`}/>
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
  );
};

export default OneCounCard;
