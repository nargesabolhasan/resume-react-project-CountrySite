import React, { useContext } from "react";
import { themeContext } from "../Context/ThemeContextProvider";
import { THEME } from "../Constants/ThemeConst";
import { useNavigate } from "react-router-dom";
import { HiArrowNarrowLeft } from 'react-icons/hi'

const NotFound = () => {
  const { theme } = useContext(themeContext);

  let navigate = useNavigate();

  //------handle goBack: ----------

  const goBack = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className="singleCountry">
      <button onClick={goBack} >
        <HiArrowNarrowLeft />
        goBack
      </button>
      <div className={theme === THEME.DARK ? "loader" : "loaderDark"}>
        <div
          className={theme === THEME.DARK ? "loader" : "loaderDark"}
          style={{ fontSize: "220px" }}
        >
          404
        </div>
        page Not Found
      </div>
    </div>
  );
};

export default NotFound;
