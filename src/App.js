import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Componants/About/About";
import GoogleSign from "./Componants/GoogleSign/GoogleSign";
import Header from "./Componants/Header/Header";
import Home from "./Componants/Home/Home";
import Notfound from "./Componants/Notfound/Notfound";
import PeopleDetails from "./Componants/PeopleDetails/PeopleDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/about/:aboutID" element={<PeopleDetails />}></Route>
        <Route path="/login" element={<GoogleSign />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
