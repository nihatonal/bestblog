import React, { useState, useContext } from "react";
import shortid from "shortid";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { Text, LanguageContext } from "../../shared/context/Language";
import Socialicons from "../IU/Socialicons";

import { HiOutlineMail } from "react-icons/hi";
import { MdAlarm } from "react-icons/md";
import "./SideMenu.css";

const SideMenu = (props) => {
  const location = useLocation();
  const lang = useContext(LanguageContext);
  const [selectedMenu, setSelectedMenu] = useState("service-contract");
  const [isActive, setActive] = useState("work-items");
  const toggleClass = (e) => {
    setActive(e.target.id);
    // console.log(e.target.id);
  };
  const content = (
    <div className="mobile_side_menu">
      <ul className="mobile-menu-items">
        {lang.dictionary[isActive] &&
          lang.dictionary[isActive].map((val) => (
            <li
              key={shortid.generate()}
              onClick={() => {
                setSelectedMenu(val.menuCode);
              }}
            >
              {val.title}
            </li>
          ))}
        {isActive === "service-menu" && (
          <ul className="service-menu-item-customs">
            {lang.dictionary["service-customs-menu"] &&
              lang.dictionary["service-customs-menu"].map((val) => (
                <li key={shortid.generate()}>{val.title}</li>
              ))}
          </ul>
        )}
      </ul>
    </div>
  );
  return (
    <div className="side-menu-wrapper" style={props.style}>
      <div className={"side-menu-items"}>
        <div className="side-menu-item-wrapper">
          <p
            id="work-items"
            className={
              isActive === "work-items"
                ? "side-menu-item active-menu-item"
                : "side-menu-item"
            }
            onClick={toggleClass}
          >
            <Text tid="aboutus" />
          </p>
          {isActive === "work-items" && content}
        </div>
        <div className="side-menu-item-wrapper">
          <p
            id="service-menu"
            className={
              isActive === "service-menu"
                ? "side-menu-item active-menu-item"
                : "side-menu-item"
            }
            onClick={toggleClass}
          >
            <Text tid="services" />
          </p>
          {isActive === "service-menu" && content}
        </div>
        <div className="side-menu-item-wrapper">
          <p
            id="transportation-items"
            className={
              isActive === "transportation-items"
                ? "side-menu-item active-menu-item"
                : "side-menu-item"
            }
            onClick={toggleClass}
          >
            <Text tid="shipping" />
          </p>
          {isActive === "transportation-items" && content}
        </div>
        <div className="side-menu-item-wrapper">
          <p
            id="business-items"
            className={
              isActive === "business-items"
                ? "side-menu-item active-menu-item"
                : "side-menu-item"
            }
            onClick={toggleClass}
          >
            <Text tid="solution" />
          </p>
          {isActive === "business-items" && content}
        </div>
        <div className="side-menu-item-wrapper">
          <p
            id="groupage-cargo-items"
            className={
              isActive === "groupage-cargo-items"
                ? "side-menu-item active-menu-item"
                : "side-menu-item"
            }
            onClick={toggleClass}
          >
            <Text tid="cargo" />
          </p>
          {isActive === "groupage-cargo-items" && content}
        </div>
        <div className="side-menu-item-wrapper">
          <p
            id="docs-items"
            className={
              isActive === "docs-items"
                ? "side-menu-item active-menu-item"
                : "side-menu-item"
            }
            onClick={toggleClass}
          >
            <Text tid="docs" />
          </p>
          {isActive === "docs-items" && content}
        </div>
        <div className="side-menu-item-wrapper">
          <p
            id="info-items"
            className={
              isActive === "info-items"
                ? "side-menu-item active-menu-item"
                : "side-menu-item"
            }
            onClick={toggleClass}
          >
            <Text tid="info" />
          </p>
          {isActive === "info-items" && content}
        </div>
      </div>
      <div className="side-menu-item-content">
        <ul className="service-menu-items">
          {lang.dictionary[isActive] &&
            lang.dictionary[isActive].map((val) => (
              <li
                key={shortid.generate()}
                onClick={() => {
                  setSelectedMenu(val.menuCode);
                }}
              >
                {val.title}
              </li>
            ))}
          {isActive === "service-menu" && (
            <ul className="service-menu-item-customs">
              {lang.dictionary["service-customs-menu"] &&
                lang.dictionary["service-customs-menu"].map((val) => (
                  <li key={shortid.generate()}>{val.title}</li>
                ))}
            </ul>
          )}
        </ul>
      </div>

      <Socialicons className="dropmenu-social-icons" />

      <div className="side-menu-info-content">
        <div className="contact-item">
          <HiOutlineMail className="dropmenu-icon" />
          <p className="footer-item-text">
            <Text tid="email" />
          </p>
        </div>
        <div className="contact-item">
          <MdAlarm className="dropmenu-icon" />
          <p className="footer-item-text">
            <Text tid="schedule" />
          </p>
        </div>
      </div>
      <p className="side-menu-phone">+7 499 350 10 12</p>
    </div>
  );
};

export default SideMenu;
