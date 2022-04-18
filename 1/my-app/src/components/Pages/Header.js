import React, { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { CountryURL } from "../Constants/constant";
import higherOrederComponent from "../HOC/WithAjax";

const Header = ({url}) => {

  const [search, setSearch] = useState("");
  const[nameCountry,setNameCountry] = useState([])

  const handleSearch = () => {
    url.map(name => (console.log(name)))
    console.log(url)
  };

  return (
    <header>
      <input
        type="text"
        placeholder="where do you want to find ?"
        onChange={(e) => setSearch(e.target.value)}
      />
      <IoSearch onClick={handleSearch} />
      <Outlet />
    </header>
  );
};

export default higherOrederComponent(Header,CountryURL);
