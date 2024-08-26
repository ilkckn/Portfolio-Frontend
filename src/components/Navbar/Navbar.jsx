import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { BsMoonStars } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";

function Navbar({ toggleTheme, currentTheme }) {
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // Varsayılan olarak "home" aktif

  const { t } = useTranslation();

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleSetActive = (to) => {
    setActiveLink(to); // Tıklanan linki aktif yap
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
          <li className="themeToggleButton" onClick={toggleTheme}>
            {currentTheme === "light" ? (
              <BsMoonStars className="darkIcon" />
            ) : (
              <IoSunnyOutline className="lightIcon" />
            )}
          </li>
        </div>
        <ul>
          <li>
            <Link
              className={`link ${activeLink === "home" ? "active" : ""}`}
              to="home"
              smooth={true}
              duration={1000}
              onSetActive={() => handleSetActive("home")}
              onClick={() => handleSetActive("home")}
            >
              {t("home")}
            </Link>
          </li>
          <li>
            <Link
              className={`link ${activeLink === "about" ? "active" : ""}`}
              to="about"
              smooth={true}
              duration={1000}
              onSetActive={() => handleSetActive("about")}
              onClick={() => handleSetActive("about")}
            >
              {t("about.header")}
            </Link>
          </li>
          <li>
            <Link
              className={`link ${activeLink === "experience" ? "active" : ""}`}
              to="experience"
              smooth={true}
              duration={1000}
              onSetActive={() => handleSetActive("experience")}
              onClick={() => handleSetActive("experience")}
            >
              {t("experience.header1")}
            </Link>
          </li>
          <li>
            <Link
              className={`link ${activeLink === "projects" ? "active" : ""}`}
              to="projects"
              smooth={true}
              duration={1000}
              onSetActive={() => handleSetActive("projects")}
              onClick={() => handleSetActive("projects")}
            >
              {t("projects.header1")}
            </Link>
          </li>
          <li>
            <Link
              className={`link ${activeLink === "contact" ? "active" : ""}`}
              to="contact"
              smooth={true}
              duration={1000}
              onSetActive={() => handleSetActive("contact")}
              onClick={() => handleSetActive("contact")}
            >
              {t("contact.header1")}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Navbar;
