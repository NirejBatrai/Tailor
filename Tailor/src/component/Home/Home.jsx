import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import Contact from "../Contact/Contact";
import About from "../About/About";
import Footer from "../footer/Footer";
import shirt from "../../assets/shirt.png";
function Home() {
  return (
    <>
      <div className='container'>
        <section className='home-container'></section>
        <h1>Welcome to our tailor</h1>
        <img src={shirt} alt='My Image' className='img' />
      </div>
    </>
  );
}

export default Home;
