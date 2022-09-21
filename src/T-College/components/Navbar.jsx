import React, { useState } from "react";
import { FaStream, FaTimes } from "react-icons/fa";
import "../Assets/css/Navbar.css";
import Logo from "../Assets/img/logo.png";
import CustomLink from "../T-bookin-page/components/CustomLink";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hambclick, setHambclick] = useState(false);

  const hambclickhandler = () => {
    setHambclick(!hambclick);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <ul className={hambclick ? "nav-menu active" : "nav-menu"}>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/contact">Contact Us</CustomLink>
        <li className="nav-item book">
          <Link to="/">Book An Apointment</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={hambclickhandler}>
        {!hambclick ? <FaStream size={20} /> : <FaTimes size={20} />}
      </div>
    </div>
  );
};

export default Navbar;
