import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import image from "../../images/logo/MC.png";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  const imageRef = useRef(null);
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsImageVisible(true);
            observer.unobserve(imageRef.current); 
          }
        });
      },
      { threshold: 0.5 } 
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

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
          <a href="https://github.com/ilkckn?tab=repositories" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/musacekcen-webdeveloper"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="about-me-text">{t("aboutMeText")}</p>
        <div className="resume">
          <a href="/resume.pdf" download>
            <button className="resumeButton"> {t("resume")} </button>
          </a>
        </div>
      </div>
      <div className="image">
        <img
          ref={imageRef}
          src={image}
          alt="musa"
          className={isImageVisible ? "visible" : ""}
        />
      </div>
    </div>
  );
}

export default Home;
