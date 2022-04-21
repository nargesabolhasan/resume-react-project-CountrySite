import React, { useState, useContext } from "react";
import higherOrederComponent from "../HOC/WithAjax";
import { CountryURL } from "../Constants/constant";
import OneCountry from "./OneCountry";
import SearchBar from "./Search&Filter/SearchBar";
import { useParams } from "react-router-dom";

const Country = ({ url, error, loading }) => {
  let { name } = useParams();
 
  if (error) {
    return <>{error}</>;
  } else if (loading) {
    return <span className="loader">wait to loading...</span>;
  } else {
    return (
      <>
        <SearchBar />
        <div className="countries">
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
