import React, { useState, useEffect, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { themeContext } from "../../Context/ThemeContextProvider";
import { THEME } from "../../Constants/ThemeConst";
import { HiSearch } from "react-icons/hi";
import axios from "axios";
import { countryUrlContext } from "../../Context/URLContext";
import { CountryURL } from "../../Constants/constant";
import higherOrederComponent from "../../HOC/WithAjax";

const SearchBar = ({ url }) => {
  const { theme } = useContext(themeContext);
  const { changeUrl, AllCountry } = useContext(countryUrlContext);
  let navigate = useNavigate();
  //----------------------
  const searchHandler = (e) => {
    var searchLowerCase = e.target.value.toLowerCase();
    url.filter((i) => {
      var nameLowerCase = i.name.toLowerCase();
      if (nameLowerCase.includes(searchLowerCase)) {
        changeUrl(i.name);
        navigate(`/FilteredPage/${i.name}`, { replace: true });
      }
    });
  };
  //----------------------
  const handleFilter = (e) => {
    changeUrl(e.target.value);
    navigate(`/RegionFilter/${e.target.value}`, { replace: true });
  };
  //----------------------
  return (
    <>
      <nav>
        <label className={theme === THEME.DARK ? "input" : "inputDark"}>
          <HiSearch />
          <input
            className={theme === THEME.DARK ? "input" : "inputDark"}
            name="search"
            onChange={searchHandler}
            placeholder="Search for a country..."
          ></input>
        </label>

        <select
          onChange={handleFilter}
          name="filter"
          className={theme === THEME.DARK ? "input" : "inputDark"}
        >
          {" "}
          <option defaultValue hidden>
            Filter By Region
          </option>
          <option
            value="africa"
            className={theme === THEME.DARK ? "input" : "inputDark"}
          >
            Africa
          </option>
          <option
            value="americas"
            className={theme === THEME.DARK ? "input" : "inputDark"}
          >
            America
          </option>
          <option
            value="asia"
            className={theme === THEME.DARK ? "input" : "inputDark"}
          >
            Asia
          </option>
          <option
            value="europe"
            className={theme === THEME.DARK ? "input" : "inputDark"}
          >
            Europe
          </option>
          <option
            value="oceania"
            className={theme === THEME.DARK ? "input" : "inputDark"}
          >
            Oceania
          </option>
        </select>
      </nav>
      <Outlet />
    </>
  );
};

export default higherOrederComponent(SearchBar, CountryURL);
