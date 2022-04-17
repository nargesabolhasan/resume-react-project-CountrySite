import "./App.css";
import { Routes, Route, Switch } from "react-router-dom";
import InfoCountryPage from "./components/Country/InfoCountryPage";
import AllCountry from "./components/Country/AllCountry";
import Header from "./components/Header/Header";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<AllCountry />} />
          <Route path="/InfoCountryPage/:name" element={<InfoCountryPage />} />
        </Routes>
      </div>
  );
}

export default App;
