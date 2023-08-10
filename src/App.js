import React from "react";
import { Home, SupEd } from "./pages";
import "./App.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route exact path="/suped" element={<SupEd />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
