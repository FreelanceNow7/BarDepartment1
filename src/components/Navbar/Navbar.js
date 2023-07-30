import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className='nav-bar-container'>
      <div className='nav-title-container'>
        <img
          className='logo-img'
          src={"../../public/logo-navbar.jpg"}
          alt='Bar Department logo'
        ></img>
      </div>
      <div className='nav-link-container'>
        <Link
          className='nav-bar-link'
          offset={-100}
          to='home'
          spy={true}
          smooth='true'
        >
          Home
        </Link>
        <Link
          className='nav-bar-link'
          offset={-100}
          to='services'
          spy={true}
          smooth='true'
        >
          Services
        </Link>
        <Link
          className='nav-bar-link'
          offset={-100}
          to='about'
          spy={true}
          smooth='true'
        >
          About Us
        </Link>
        <Link
          className='nav-bar-link'
          offset={-100}
          to='reviews'
          spy={true}
          smooth='true'
        >
          Reviews
        </Link>
        <Link className='nav-bar-link' to='getAQuote' spy={true} smooth='true'>
          Get a Quote
        </Link>
      </div>
    </nav>
  );
};
