import './App.css';
import KUTE from "kute.js";
import Spacer from "./component/styles/Spacer";
import Section from "./component/styles/Section"
import {colorScheme1, colorScheme2, colorScheme3, colorScheme4, colorScheme5, colorScheme6,} from "./constants/constant"
import Nav from "./component/styles/Nav"
import Mission from "./component/styles/Mission";
import Service from "./component/styles/Service";
import Technology from "./component/styles/Technology";
import Team from "./component/styles/Team"
import Contact from './component/styles/Contact';
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
        <Mission></Mission>
      </div>

      <Spacer bgColor = {colorScheme2}></Spacer>
      <div className = "section section3">
        <Service></Service>
      </div>
      
      <Spacer bgColor = {colorScheme3}></Spacer>
      <div className = "section section4">
        <Technology></Technology>
      </div>
      
      <Spacer bgColor = {colorScheme4}></Spacer>
      <div className = "section section5">
        <Team></Team>
      </div>
      
      <Spacer bgColor = {colorScheme5}></Spacer>
      <div className = "section section6">
        <Contact></Contact>
      </div>
      
      <Spacer bgColor = {colorScheme6}></Spacer>
      <div className = "section section7">
        sample7
      </div>
    </div>
  );
}

export default App;
