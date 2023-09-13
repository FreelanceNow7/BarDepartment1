import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../data/BarDepartmentlogo.png";
// import { GetAQuote } from "../GetAQuote/GetAQuote";

export const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`navbar ${scrolling ? "scroll" : ""}`}>
      <div className='nav-title-container'>
        <div className='nav-title-inner'>
          <img className='logo' src={logo} alt='BarDepLogo'></img>
        </div>
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
          to='whyus'
          spy={true}
          smooth='true'
        >
          Why Us
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
        <Link
          className='nav-bar-link'
          offset={-100}
          to='contact'
          spy={true}
          smooth='true'
        >
          Contact Us
        </Link>
        <button>
          {" "}
          <Link
            className='nav-bar-link'
            to='getAQuote'
            spy={true}
            smooth='true'
          >
            Get a Quote
          </Link>
        </button>
      </div>
    </nav>
  );
};
