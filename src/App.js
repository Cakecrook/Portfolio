import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.js';
import Home from "./components/Home.js";
import Resume from "./components/Resume.js";
import Projects from "./components/Projects.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/Resume" element={ <Resume /> } />
        <Route path="/Projects" element={ <Projects /> } />
      </Routes>     
    </div>
  );
}

export default App;
