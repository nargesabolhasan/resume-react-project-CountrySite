import React from "react";
import higherOrederComponent from "../HOC/WithAjax";
import { CountryURL } from "../Constants/constant";
import OneCounCard from "./OneCounCard";

const Country = ({ url }) => {
  return (
    <ul>
      {url.map((value,index) =>(
      <OneCounCard 
      key={value.name}
      flag={value.flags.png}
      nativeName={value.name} 
      population={value.population}
      region={value.region}
      capital={value.capital}
      />
     ))}
      
    </ul>
  );
};

export default higherOrederComponent(Country, CountryURL);
