import React, { useState, useEffect } from "react";
import { Outlet, useParams, NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { CountryURL } from "../Constants/constant";
import higherOrederComponent from "../HOC/WithAjax";
import InfoCountryPage from "./InfoCountryPage";
import NotFound from "./NotFound";

const Header = ({ url }) => {
  const [search, setSearch] = useState("");
  const [isFind, setIsFind] = useState();

  // const handleSearch = () => {
  //   url.map((name) => {
  //     search === name.name ? setIsFind(search):setIsFind("NotFound")
  //   });
  // };
  return (
    <header>
      <input
        type="text"
        placeholder="where do you want to find ?"
        onChange={(e) => setSearch(e.target.value)}
      />
      <NavLink to={`/InfoCountryPage/${search}`}>{search}</NavLink>
      {/* <IoSearch onClick={handleSearch} /> */}
      <Outlet />
    </header>
  );
};

export default higherOrederComponent(Header, CountryURL);
