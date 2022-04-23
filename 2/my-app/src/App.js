import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Pages/Header.js";
import Home from "./components/Pages/Home.js";
import Login from "./components/Pages/Login.js";
import Dashboard from "./components/Pages/Dashboard.js";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} >
          <Route index element={<Home/>}/>
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
