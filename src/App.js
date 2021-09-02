import './App.css';
import KUTE from "kute.js";
import Spacer from "./component/styles/Spacer";
import Section from "./component/styles/Section"
import {colorScheme1} from "./constants/constant"
import Nav from "./component/styles/Nav"
function App() {
  const sectionColor = {
    section1 : "#001220",
  };
  return (
    
    <div className="App">
      <div className = "section section1">
        <div className = "imgBackground">

        </div>
        <div className = "navContainer">
          <Nav></Nav>
        </div>
      </div>
      <Spacer bgColor = {colorScheme1}></Spacer>
      <div className = "section section2">
        sample2
      </div>
    </div>
  );
}

export default App;
