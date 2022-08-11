import React from "react";

import "./MainHeader.css";

const MainHeader = (props) => {
  return <header id="home" className={`header full-screen-block ${props.className}`}>{props.children}</header>;
};

export default MainHeader;
