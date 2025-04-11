import "./App.css";
import Layout from "./layout/LayOut.js";
import About from "./about/About.js";
import Credit from "./credits/Credit.js";
import Intro from "./vissionintro/Intro.js";
import Body from "./body/Body.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Equipment from "./Equipments/Equipment.js";
import Leader from "./leaders/Leader.jsx";
import Msg from "./extra/Msg.js";
import Faculty from "./extra/Faculty.js";
import Coming from "./extra/Coming.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Intro />} />
            <Route path="/about" element={<About />} />
            <Route path="/opportunities" element={<Body />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/leader" element={<Leader />} />
            <Route path="/message" element={<Msg />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/coming" element={<Coming />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Credit />
    </div>
  );
}

export default App;
