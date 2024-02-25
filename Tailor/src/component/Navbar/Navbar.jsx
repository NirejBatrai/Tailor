import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='navbar'>
      <img src={logo} alt='icon-logo' className='logo' />
      <h1>Tailor Made</h1>
      <div className='menu-toggle' onClick={toggleMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>

      <ul className={showMenu ? "nav-links active" : "nav-links"}>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/products'>
          <li>Products</li>
        </Link>
        <Link to='/contact'>
          <li>Contact Us</li>
        </Link>
        <Link to='/about'>
          <li>About Us</li>
        </Link>
        <Link to='/gallery'>
          <li>Gallery</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
