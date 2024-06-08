import "./App.css";
import Layout from "./layout/LayOut.js";
import About from "./about/About.js";
import Credit from "./credits/Credit.js";
import Intro from "./vissionintro/Intro.js";
import Body from './body/Body.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Equipment from "./Equipments/Equipment.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Intro />} />
          <Route path="/about" element={<About />}/>
          <Route path="/opportunities" element={<Body />}/>
          <Route path="/equipment" element={<Equipment/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    <Credit />
    </div>
  );
}

export default App;
