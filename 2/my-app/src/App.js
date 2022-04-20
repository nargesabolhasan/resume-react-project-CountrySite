import "./App.css";
import TitleContextprovider from "./components/Context/TitleContextprovider";
import BasicTabs from "./components/Pages/Tabs";
import { Routes, Route } from "react-router-dom";
import Description from "./components/Pages/Description.js";
import Header from "./components/Pages/Header.js";


function App() {
  return (
    <div className="App">
      <Header />
      <BasicTabs/>
    </div>
  );
}

export default App;
