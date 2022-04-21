import React, { useState, useEffect, useContext } from "react";
import { Outlet, useParams, NavLink, Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { CountryURL } from "../Constants/constant";
import higherOrederComponent from "../HOC/WithAjax";
import InfoCountryPage from "./InfoCountryPage";
import NotFound from "./NotFound";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { themeContext } from "../Context/ThemeContextProvider";
import { THEME } from "../Constants/ThemeConst";


const Header = () => {
  const { theme, darkMode, lightMode } = useContext(themeContext);

  const handleChange = () => {
    theme === THEME.DARK ? lightMode() : darkMode();
  };

  return (
    <>
      <header className={theme === THEME.DARK ? "header" : "headerDark"}>
        <Link className="links" to="/">
          <h1 >Where in the world?</h1>
        </Link>
        <h2 >
          {theme === THEME.DARK ? (
            <span onClick={handleChange}>
              <HiOutlineMoon />
              Dark Mode
            </span>
          ) : (
            <span onClick={handleChange}>
              <HiOutlineSun />
              Light Mode
            </span>
          )}
        </h2>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
