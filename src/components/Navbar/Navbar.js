import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../data/BarDepartmentlogo.png";

export const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScrollColor = () => {
      const sectionIds = [
        "home",
        "whyus",
        "services",
        "about",
        "reviews",
        "contact",
        "getAQuote",
      ];
      const scrollPosition = window.scrollY;

      let active = "";
      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.clientHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            active = sectionId;
            break;
          }
        }
      }

      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScrollColor);

    return () => {
      window.removeEventListener("scroll", handleScrollColor);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolling ? "scroll" : ""}`}>
      <div className='nav-link-container'>
        <div className='first'>
          <Link
            className='nav-bar-link'
            offset={-100}
            to='home'
            spy={true}
            smooth='true'
            activeClass={activeSection === "home" ? "active" : ""}
          >
            HOME
          </Link>
          <Link
            className='nav-bar-link'
            offset={-100}
            to='whyus'
            spy={true}
            smooth='true'
            activeClass={activeSection === "whyus" ? "active" : ""}
          >
            WHY US
          </Link>
          <Link
            className='nav-bar-link'
            offset={-100}
            to='services'
            spy={true}
            smooth='true'
            activeClass={activeSection === "services" ? "active" : ""}
          >
            SERVICES
          </Link>
        </div>
        <img className='logo' src={logo} alt='BarDepLogo'></img>
        <div className='second'>
        <Link
          className='nav-bar-link'
          offset={-100}
          to='reviews'
          spy={true}
          smooth='true'
          activeClass={activeSection === "reviews" ? "active" : ""}
        >
          REVIEWS
        </Link>
        <Link
          className='nav-bar-link'
          offset={-100}
          to='contact'
          spy={true}
          smooth='true'
          activeClass={activeSection === "contact" ? "active" : ""}
        >
          CONTACT US
        </Link>{" "}
        
          <button id='getaquotebutton'>
            <Link
              className='nav-bar-link'
              id='linkgetaquote'
              to='getAQuote'
              spy={true}
              smooth={true}
              offset={-250}
              activeClass={activeSection === "getAQuote" ? "active" : ""}
            >
              GET A QUOTE
            </Link>
          </button>
      </div>
    </nav>
  );
};
