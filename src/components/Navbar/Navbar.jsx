import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import {
  BsMoonStars,
  BsHouse,
  BsPerson,
  BsBriefcase,
  BsFolder,
  BsEnvelope,
} from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { LuArrowRightFromLine, LuArrowLeftFromLine } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";

function Navbar({ toggleTheme, currentTheme }) {
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <aside className={`navbarContainer ${expanded ? "expanded" : ""}`}>
      <div className="navbarTop">
        {expanded ? (
          <LuArrowLeftFromLine className="arrowIcon" onClick={toggleExpanded} />
        ) : (
          <LuArrowRightFromLine
            className="arrowIcon"
            onClick={toggleExpanded}
          />
        )}
      </div>
      <nav className={`links ${expanded ? "expanded" : ""}`}>
        <ul>
          <li>
            <Link
              className={`link ${expanded ? "expanded" : ""}`}
              to="home"
              smooth={true}
              duration={1000}
            >
              <BsHouse className="link-icon" />
              {expanded && <span>{t("home")}</span>}
            </Link>
          </li>
          <li>
            <Link
              className={`link ${expanded ? "expanded" : ""}`}
              to="about"
              smooth={true}
              duration={1000}
            >
              <BsPerson className="link-icon" />
              {expanded && <span>{t("about.header")}</span>}
            </Link>
          </li>
          <li>
            <Link
              className={`link ${expanded ? "expanded" : ""}`}
              to="experience"
              smooth={true}
              duration={1000}
            >
              <BsBriefcase className="link-icon" />
              {expanded && <span>{t("experience.header1")}</span>}
            </Link>
          </li>
          <li>
            <Link
              className={`link ${expanded ? "expanded" : ""}`}
              to="projects"
              smooth={true}
              duration={1000}
            >
              <BsFolder className="link-icon" />
              {expanded && <span>{t("projects.header1")}</span>}
            </Link>
          </li>
          <li>
            <Link
              className={`link ${expanded ? "expanded" : ""}`}
              to="contact"
              smooth={true}
              duration={1000}
            >
              <BsEnvelope className="link-icon" />
              {expanded && <span>{t("contact.header1")}</span>}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="language-theme">
        <div className="language-switcher">
          <TfiWorld className="language" onClick={toggleLanguageMenu} />
          {languageMenuOpen && (
            <div className="language-menu">
              <button onClick={() => changeLanguage("en")}>EN</button>
              <button onClick={() => changeLanguage("de")}>DE</button>
            </div>
          )}
        </div>
        <li className="themeToggleButton" onClick={toggleTheme}>
          {currentTheme === "light" ? (
            <BsMoonStars className="darkIcon" />
          ) : (
            <IoSunnyOutline className="lightIcon" />
          )}
        </li>
      </div>
    </aside>
  );
}

export default Navbar;
