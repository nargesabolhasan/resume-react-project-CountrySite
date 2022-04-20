import React, { useState, useEffect } from "react";
import { Outlet, useParams, NavLink, Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { CountryURL } from "../../Constants/constant";
import higherOrederComponent from "../../HOC/WithAjax";
import InfoCountryPage from "../InfoCountryPage";
import NotFound from "../NotFound";
import { HiSearch } from "react-icons/hi";

const SearchBar = ({ url }, props) => {
  const [searching, setSearching] = useState("");
  const [isFind, setIsFind] = useState();
  const { search, filter } = props;

  const searchHandler = () => {};
  return (
    <nav>
      <label>
        <HiSearch />

        <input
          name="search"
          value={search}
          onChange={props.fetchData}
          placeholder="Search for a country..."
        ></input>
      </label>

      <select name="filter" value={filter} onChange={props.fetchData}>
        <option defaultValue hidden>
          Filter By Region
        </option>
        <Link to={`/InfoCountryPage/SearchBar${filter}`}>
        <option value="africa">Africa</option>
        </Link>
        <option value="americas">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </nav>
  );
};

export default higherOrederComponent(SearchBar, CountryURL);
