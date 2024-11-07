import React from "react";
import "./App.css";

//components
import {Route, Routes} from "react-router-dom";
import Read from "./components/Read";
import Home from "./components/Home";

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home/>} name="Home"/>
        <Route path="/read" element={<Read/>} name="Read"/>
      </Routes>
    </div>
  );

}

export default App;
