import React from "react";
import { Header, Welcome, About } from "./containers";
import { Footer, NavBar } from "./components";
import "./App.css";
import { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import SupEd from "./containers/suped/SupEd";

const App = () => {
  const aboutRef = useRef();
  return (
    <div className="App">
      <div className="background">
        <NavBar />
        <Routes>
          <Route path="#" element={<App />} />
          <Route path="#suped" Component={SupEd} />
        </Routes>
      </div>
      <div className="header_bg">
        <Header />
        <Welcome aboutRef={aboutRef} />
        <About ref={aboutRef} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
