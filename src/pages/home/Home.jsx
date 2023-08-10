import React from "react";
import { Footer, NavBar } from "../../components";
import { Header, Welcome, About } from "../../containers";
import { useRef } from "react";

const Home = () => {
  const aboutRef = useRef();
  return (
    <div className="Home">
      <div className="background">
        <NavBar />
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

export default Home;
