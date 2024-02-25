import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import Contact from "../Contact/Contact";
import About from "../About/About";
import Footer from "../footer/Footer";

function Home() {
  return (
    <>
      <div className='container'>
        <section className='home-container'>Home Page</section>
      </div>
      <About />
      <Contact />
    </>
  );
}

export default Home;
