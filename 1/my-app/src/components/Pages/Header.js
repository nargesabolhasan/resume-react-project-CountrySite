import React, { useState, useEffect } from "react";
import { Outlet, useParams, NavLink, Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { CountryURL } from "../Constants/constant";
import higherOrederComponent from "../HOC/WithAjax";
import InfoCountryPage from "./InfoCountryPage";
import NotFound from "./NotFound";
import { HiOutlineMoon } from "react-icons/hi";

const Header = () => {
  return (
    <>
      <header className="header">
        <Link className="links" to="/" >
          <h1>Where in the world?</h1>
        </Link>
        <h2>
          <HiOutlineMoon />
          Dark Mode
        </h2>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
