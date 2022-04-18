import React, { useState } from "react";
import higherOrederComponent from "../HOC/WithAjax";
import { CountryURL } from "../Constants/constant";
import OneCountry from "./OneCountry";

const Country = ({ url, error, loading }) => {
  if (error) {
    return <>{error}</>;
  } else if (loading) {
    return <>loading...</>;
  } else {
    return (
      <div>
        hhh
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
    );
  }
};

export default higherOrederComponent(Country, CountryURL);
