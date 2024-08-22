import React from "react";
import "./Home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import image from "../../images/logo/MC.png";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="homeContainer" id="home">
      <div className="info">
        <div className="name">
          <h1>{t("name")}</h1>
          <h1> {t("lastName")} </h1>
        </div>
        <div className="title">
          <p> {t("title")} </p>
        </div>
        <div className="contactLinkIcons">
          <FaGithub />
          <FaLinkedin />
        </div>
        <p className="about-me-text">
          {t("aboutMeText")}
        </p>
        <div className="resume">
          <a href="/resume.pdf" download>
            <button className="resumeButton"> {t("resume")} </button>
          </a>
        </div>
      </div>
      <div className="image">
        <img src={image} alt="musa" />
      </div>
    </div>
  );
}

export default Home;
