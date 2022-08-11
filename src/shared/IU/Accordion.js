import React, { useState } from "react";

import "./Accordion.css";

const Accordion = ({ heading, heading_number, content, props }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className="accordion-item" >
      <div className="accordion-toggle" onClick={() => setIsActive(!isActive)}>
        <p>{heading_number}</p>
        <h3>{heading}</h3>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </li>
  );
};

export default Accordion;
