import "./App.css";
import TitleContextprovider from "./components/Context/TitleContextprovider";
import Header from "./components/Header";
import SkillPage from "./components/SkillPage";

function App() {
  return (
    <div className="App">
      <Header />
      <TitleContextprovider>
        <SkillPage />
      </TitleContextprovider>
    </div>
  );
}

export default App;
