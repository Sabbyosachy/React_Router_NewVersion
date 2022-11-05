import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Componants/About/About";
import Home from "./Componants/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
