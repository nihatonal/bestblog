import React from "react";

import "./Logo.css";

const Logo = (props) => {
  return (
    <div className="logo">
      <img className="logo_destkop" src={props.logo} alt='logo' />
      <img className="logo_mobile" src={props.logo_mobile} alt='logo'/>
    </div>
  );
};

export default Logo;
