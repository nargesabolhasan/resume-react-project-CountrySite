import React, { useState } from "react";
import higherOrederComponent from "../HOC/WithAjax";
import { CountryURL } from "../Constants/constant";
import OneCountry from "./OneCountry";


const Country = ({ url }) => {

  return (
    <div>
      {url.map((value) => {
        // setName(value.name);
        // console.log(name)
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
  );
};

export default higherOrederComponent(Country, CountryURL);
