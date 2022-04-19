import React, { useState, useEffect } from "react";
import { Outlet, useParams, NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { CountryURL } from "../../Constants/constant";
import higherOrederComponent from "../../HOC/WithAjax";
import InfoCountryPage from "../InfoCountryPage";
import NotFound from "../NotFound";

const SearchBar = ({url}) => {
  const [search, setSearch] = useState("");
  const [isFind, setIsFind] = useState();

  const searchHandler=()=>{
    url.map
  }
  return (
    <div>
      <input
        type="text"
        placeholder="where do you want to find ?"
        onChange={searchHandler}
      />
    </div>
  );
};

export default higherOrederComponent(SearchBar,CountryURL);
