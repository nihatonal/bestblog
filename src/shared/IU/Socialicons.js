import React from "react";

import { FaVk } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import "./Socialicons.css";
const Socialicons = (props) => {
  return (
    <div className={`social-icons ${props.className}`}>
      <div className="social-icon-item-wrapper">
        <FaVk className="social-icon-item" />
      </div>
      <div className="social-icon-item-wrapper">
        <FaFacebookF className="social-icon-item" />
      </div>
      <div className="social-icon-item-wrapper">
        <FaYoutube className="social-icon-item" />
      </div>
    </div>
  );
};

export default Socialicons;
