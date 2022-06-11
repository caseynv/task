import './App.css';
import Home from './Components/Home';
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Welcome from "./Components/Welcome";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/Welcome" element={<Welcome />} />
      </Routes>
    </>
  );
}

export default App;
