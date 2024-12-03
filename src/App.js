import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom"; //components
import Read from "./components/Read";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/upload" element={<Home />} name="Home" />
        <Route path="/read" element={<Read />} name="Read" />
      </Routes>
    </div>
  );
}

export default App;
