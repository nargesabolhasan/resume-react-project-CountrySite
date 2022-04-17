import React from "react";
import higherOrederComponent from "../HOC/WithAjax";
import { CountryURL } from "../Constants/constant";
import OneCounCard from "./OneCounCard";

const Country = ({ url }) => {
  return (
    
    <div>
      {url.map((value) =>(
      <OneCounCard 
      key={value.name}
      flag={value.flags.png}
      nativeName={value.name} 
      population={value.population}
      region={value.region}
      capital={value.capital}
      />
     ))}
      
    </div>
  );
};

export default higherOrederComponent(Country, CountryURL);
