import React, { useContext, useState, useEffect } from "react";

import { FaAngleDown } from "react-icons/fa";
import { languageOptions } from "../../assets/languages/index";
import { LanguageContext } from "../context/Language";

import russia from "../../assets/icons/ruflag.png";
import england from "../../assets/icons/ukflag.png";
import germany from "../../assets/icons/deflag.png";
import "./LanguageSelector.css";

export default function LanguageSelector(props) {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("ru");
  const [selectedFlag, setSelectedFlag] = useState();

  useEffect(() => {
    const defaultLanguage = localStorage.getItem("rcml-lang");
    setSelectedOption(defaultLanguage);
    if (defaultLanguage === "ru") {
      setSelectedFlag(russia);
    } else if (defaultLanguage === "en") {
      setSelectedFlag(england);
    } else if (defaultLanguage === "de") {
      setSelectedFlag(germany);
    }
  }, [userLanguage]);
  const langListFiltered = React.useMemo(() => {
    return Object.fromEntries(
      Object.entries(languageOptions).filter(
        ([key]) => !key.includes(selectedOption)
      )
    );
  }, [selectedOption]);

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const setSelectedThenCloseDropdown = (index) => {
    setSelectedOption(index);
    setIsOptionsOpen(false);
    userLanguageChange(index);

    if (index === "ru") {
      setSelectedFlag(russia);
    } else if (index === "en") {
      setSelectedFlag(england);
    } else if (index === "de") {
      setSelectedFlag(germany);
    }
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="select-lang">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOptionsOpen}
        className={isOptionsOpen ? "expanded" : ""}
        onClick={toggleOptions}
        style={props.style}
      >
        <img src={selectedFlag} alt="flag" />
        <span>{selectedOption && capitalizeFirstLetter(selectedOption)}</span>
      </button>
      <ul
        className={`options ${isOptionsOpen ? "show" : ""}`}
        role="listbox"
        aria-activedescendant={selectedOption}
        tabIndex={-1}
      >
        {Object.entries(langListFiltered).map(([id, name]) => (
          <li
            key={id}
            id={id}
            role="option"
            aria-selected={selectedOption === id}
            tabIndex={0}
            onClick={() => {
              setSelectedThenCloseDropdown(id);
            }}
          >
            <img src={name.flag} alt="flag" />
            <span>{name.country}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
