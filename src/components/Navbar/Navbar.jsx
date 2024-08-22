import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-scroll";
import { BsMoonStars } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";

function Navbar({ toggleTheme, currentTheme }) {
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <aside className="navbarContainer">
      <nav className="links">
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
          <li>
            <li className="themeToggleButton" onClick={toggleTheme}>
              {currentTheme === "light" ? (
                <BsMoonStars className="darkIcon" />
              ) : (
                <IoSunnyOutline className="lightIcon" />
              )}
            </li>
          </li>
        </div>
        <ul>
          <li>
            <Link className="link" to="home" smooth={true} duration={1000}>
              {t("home")}
            </Link>
          </li>
          <li>
            <Link className="link" to="about" smooth={true} duration={1000}>
              {t("about.header")}
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="experience"
              smooth={true}
              duration={1000}
            >
              {t("experience.header1")}
            </Link>
          </li>
          <li>
            <Link className="link" to="projects" smooth={true} duration={1000}>
              {t("projects.header1")}
            </Link>
          </li>
          <li>
            <Link className="link" to="contact" smooth={true} duration={1000}>
              {t("contact.header1")}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Navbar;
