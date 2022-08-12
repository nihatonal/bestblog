import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

import MainHeader from "./MainHeader";
import Logo from "./Logo";
import Hamburger from "./Hamburger";

import LanguageSelector from "../../shared/IU/LanguageSelector";

import SimpleSlider from "../IU/SimpleSlider";

import "./MainNavigation.css";

const MainNavigation = (props) => {
  const location = useLocation();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [fixHeader, setFixed] = useState(false);

  const fixedHeader = () => {
    if (window.innerWidth > 768) {
      if (window.scrollY >= window.innerHeight - 100) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    } else {
      setFixed(false);
    }
  };

  window.addEventListener("scroll", fixedHeader);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <MainHeader>
      <header id="header" className={fixHeader ? "header-top-fixed" : ""}>
        <div className="full-screen-block">
          <div
            className={
              fixHeader ? "header-body header-body-fixed" : "header-body"
            }
          >
            <Hamburger show={navbarOpen} onClick={handleToggle} />
            <div id="container-fixed">
              <nav className="navbar navbar-default">
                <ul className="navbar-nav">
                  <li
                    className={
                      navbarOpen ? "home show-nav-item" : "home fade-nav-item"
                    }
                    onClick={()=> setNavbarOpen(!navbarOpen)}
                  >
                    <span className="bg-icon">1</span>
                    <span className="rotated-title">Home</span>
                    <Link
                      className={fixHeader ? "link-item show-nav" : "link-item"}
                      to="#home"
                      smooth
                    >
                      Home
                    </Link>
                  </li>
                  <li
                    className={
                      navbarOpen ? "about show-nav-item" : "about fade-nav-item"
                    }
                    onClick={()=> setNavbarOpen(!navbarOpen)}
                  >
                    <span className="bg-icon">2</span>
                    <span className="rotated-title">About</span>
                    <Link
                      className={fixHeader ? "link-item show-nav" : "link-item"}
                      to="/#about"
                      smooth
                    >
                      About
                    </Link>
                  </li>
                  <li
                    className={
                      navbarOpen
                        ? "skills show-nav-item"
                        : "skills fade-nav-item"
                    }
                    onClick={()=> setNavbarOpen(!navbarOpen)}
                  >
                    <span className="bg-icon">3</span>
                    <span className="rotated-title">Skills</span>
                    <Link
                      className={fixHeader ? "link-item show-nav" : "link-item"}
                      to="#skills"
                      smooth
                    >
                      Skills
                    </Link>
                  </li>
                  <li
                    className={
                      navbarOpen
                        ? "portfolio show-nav-item"
                        : "portfolio fade-nav-item"
                    }
                    onClick={()=> setNavbarOpen(!navbarOpen)}
                  >
                    <span className="bg-icon">4</span>
                    <span className="rotated-title">Works</span>
                    <Link
                      className={fixHeader ? "link-item show-nav" : "link-item"}
                      to="#portfolio"
                      onClick={handleToggle}
                      smooth
                    >
                      Works
                    </Link>
                  </li>
                  <li
                    className={
                      navbarOpen
                        ? "contact show-nav-item"
                        : "contact fade-nav-item"
                    }
                    onClick={()=> setNavbarOpen(!navbarOpen)}
                  >
                    <span className="bg-icon">5</span>
                    <span className="rotated-title">Contacts</span>
                    <Link
                      className={fixHeader ? "link-item show-nav" : "link-item"}
                      to="/#contact"
                      smooth
                    >
                      Contacts
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <SimpleSlider />
    </MainHeader>
  );
};

export default MainNavigation;
