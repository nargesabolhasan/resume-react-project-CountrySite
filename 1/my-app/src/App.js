import "./App.css";
import { Routes, Route, Switch } from "react-router-dom";
import InfoCountryPage from "./components/Pages/InfoCountryPage";
import AllCountry from "./components/Pages/AllCountry";
import Header from "./components/Pages/Header";
import NotFound from "./components/Pages/NotFound";
import "./scss/style.scss";
import SearchBar from "./components/Pages/Search&Filter/SearchBar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<AllCountry />}/>
          <Route path="/InfoCountryPage/:name" element={<InfoCountryPage />} />
          <Route path="/InfoCountryPage/NotFound" element={<NotFound />} />
          <Route path="/InfoCountryPage/SearchBar:filter" element={<SearchBar />} />
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
