import React, { useState, useEffect } from "react";
import { Outlet, useParams, NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { CountryURL } from "../Constants/constant";
import higherOrederComponent from "../HOC/WithAjax";
import InfoCountryPage from "./InfoCountryPage";
import NotFound from "./NotFound";

const Header = () => {

  return (
    <header>
header
    </header>
  );
};

export default Header;
