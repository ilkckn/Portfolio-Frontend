import React, { useState, useEffect, useRef } from "react";
import "./About.css";
import image from "../../images/logo/MC1.png";
import { IoIosRibbon } from "react-icons/io";
import { RiGraduationCapFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Observer'ı durdur, sadece bir kez animasyon yapmasını sağla
          }
        });
      },
      { threshold: 1 } // Görüntünün %100'ü görünür olduğunda animasyonu tetikler
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
    <div className="aboutContainer" id="about">
      <div className="headers">
        <p>{t("about.getToKnowMore")}</p>
        <h1>{t("about.aboutMe")}</h1>
      </div>

      <div className="aboutContent">
        <div className={`image ${isVisible ? "animate" : ""}`} ref={imageRef}>
          <img src={image} alt="Profile" />
        </div>
        <div className="experience-education-text">
          <div className="exp-edu">
            <div className="exp">
              <IoIosRibbon />
              <h2>{t("about.experience")}</h2>
              <p>{t("about.experience1")}</p>
              <p>{t("about.experience2")}</p>
            </div>
            <div className="edu">
              <RiGraduationCapFill />
              <h2>{t("about.education")}</h2>
              <p>{t("about.education1")}</p>
              <p>{t("about.education2")}</p>
            </div>
          </div>
          <div className="text">
            <p>{t("about.text")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
