import "./App.css";
import React, { useContext } from "react";
import { Routes, Route, Switch} from "react-router-dom";
import InfoCountryPage from "./components/Pages/InfoCountryPage";
import AllCountry from "./components/Pages/AllCountry";
import Header from "./components/Pages/Header";
import NotFound from "./components/Pages/NotFound";
import "./scss/style.scss";
import FilteredPage from "./components/Pages/Search&Filter/FilteredPage";
import {themeContext}  from "./components/Context/ThemeContextProvider";
import { THEME } from "./components/Constants/ThemeConst";

function App() {
   const {theme} = useContext(themeContext);
  return (
    <div className={theme === THEME.DARK ? "App" : "AppDark"}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<AllCountry />}/>
          <Route path="/InfoCountryPage/:name" element={<InfoCountryPage />} />
          <Route path="/NotFound" element={<NotFound />} />
          <Route path="/FilteredPage/:filter" element={<FilteredPage />} />
        </Route>
      </Routes>

      {/* <Routes>
          <Route  path="/" element={<AllCountry />} />
          <Route path="/InfoCountryPage/:name" element={<InfoCountryPage />} />
          <Route path="/InfoCountryPage/NotFound" element={<NotFound/>} />
      </Routes> */}
    </div>
  );
}

export default App;
