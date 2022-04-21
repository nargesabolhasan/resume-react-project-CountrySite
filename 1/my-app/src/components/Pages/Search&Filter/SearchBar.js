import React, { useState, useEffect, useContext } from "react";
import {
  Outlet,
  useParams,
  NavLink,
  Link,
  useNavigate,
} from "react-router-dom";
import { themeContext } from "../../Context/ThemeContextProvider";
import { THEME } from "../../Constants/ThemeConst";
import { IoSearch } from "react-icons/io5";
import { CountryURL } from "../../Constants/constant";
import higherOrederComponent from "../../HOC/WithAjax";
import InfoCountryPage from "../InfoCountryPage";
import NotFound from "../NotFound";
import { HiSearch } from "react-icons/hi";
import axios from "axios";
import { countryUrlContext } from "../../Context/URLContext";

const SearchBar = (props) => {
  // let { name } = useParams();
  const { theme, darkMode, lightMode } = useContext(themeContext);
  const infoCountryURL = "https://restcountries.com/v2/all";
  const [url, setURL] = useState([]);
  // const [isFind, setIsFind] = useState();
  const { changeUrl } = useContext(countryUrlContext);
  let navigate = useNavigate();

  //----------------------
  useEffect(() => {
    axios
      .get(infoCountryURL)
      .then((res) => setURL(res.data))
      .catch((cth) => alert("SearchBar URL not found"));
  }, []);
  //----------------------
  const searchHandler = (e) => {
    var searchLowerCase = e.target.value.toLowerCase();
    url.map((i) => {
      var nameLowerCase = i.name.toLowerCase();
      if (nameLowerCase === searchLowerCase) {
        const url = `https://restcountries.eu/rest/v2/name/${i.name}`;
        changeUrl(url);
        navigate(`/FilteredPage/${i.name}`, { replace: true });
      }
    });
  };

  return (
    <>
      <nav>
        <label className={theme === THEME.DARK ? "input" : "inputDark"}>
          <HiSearch />
          <input
            className={theme === THEME.DARK ? "input" : "inputDark"}
            name="search"
            // value={search}
            onChange={searchHandler}
            placeholder="Search for a country..."
          ></input>
        </label>

        <select
          name="filter"
          onChange={props.fetchData}
          className={theme === THEME.DARK ? "input" : "inputDark"}
        >
          <option defaultValue hidden>
            Filter By Region
          </option>

          <option
            value="africa"
            className={theme === THEME.DARK ? "input" : "inputDark"}
          >
            Africa
            {/* <Link to={`/InfoCountryPage/SearchBar${filter}`}>Africa</Link> */}
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

export default SearchBar;
