import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Text } from "../../shared/context/Language";
import { useLocation } from "react-router-dom";
import "./NavLinks.css";
const NavLinks = (props) => {
  const location = useLocation();

  return (
    <div className={`nav-wrapper ${props.className}`}>
      <Link
        className={
          location.hash === "#aboutus" ? `nav-item selected` : `nav-item`
        }
        to="/#aboutus"
        activeclassname="selected"
        onClick={props.onClickNavItem}
        smooth
      >
        <Text tid="aboutus" />
      </Link>
      <Link
        className={
          location.hash === "#services" ? `nav-item selected` : `nav-item`
        }
        activeclassname="selected"
        to="/#services"
        onClick={props.onClickNavItem}
        smooth
      >
        <Text tid="services" />
      </Link>
      <Link
        className={
          location.hash === "#internationaltransport"
            ? `nav-item selected`
            : `nav-item`
        }
        to="/#internationaltransport"
        activeclassname="selected"
        onClick={props.onClickNavItem}
        smooth
      >
        <Text tid="shipping" />
      </Link>
      <Link
        className={
          location.hash === "#businesssolution"
            ? `nav-item selected`
            : `nav-item`
        }
        to="/#businesssolution"
        activeclassname="selected"
        onClick={props.onClickNavItem}
        smooth
      >
        <Text tid="solution" />
      </Link>
      <Link
        className={
          location.hash === "#footer" ? `nav-item selected` : `nav-item`
        }
        to="/#footer"
        activeclassname="selected"
        onClick={props.onClickNavItem}
        smooth
      >
        <Text tid="cargo" />
      </Link>
      <Link
        className={
          location.hash === "#footer"
            ? `nav-item selected side-menu`
            : `nav-item side-menu `
        }
        to="/#footer"
        activeclassname="selected"
        onClick={props.onClickNavItem}
        smooth
      >
        <Text tid="docs" />
      </Link>
      <Link
        className={
          location.hash === "#footer"
            ? `nav-item selected side-menu`
            : `nav-item side-menu`
        }
        to="/#footer"
        activeclassname="selected"
        onClick={props.onClickNavItem}
        smooth
      >
        <Text tid="info" />
      </Link>
    </div>
  );
};

export default NavLinks;
