import React, { useState, useEffect, useRef } from "react";
import "./Experience.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useTranslation } from "react-i18next";

function Experience() {
  const { t } = useTranslation();
  const contentRef = useRef(null);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsContentVisible(true);
            observer.unobserve(contentRef.current); 
          }
        });
      },
      { threshold: 0.5 } 
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div className="experienceContainer" id="experience">
      <div className="headers">
        <p>{t("experience.header2")}</p>
        <h1>{t("experience.header1")}</h1>
      </div>
      <div
        ref={contentRef}
        className={`experienceContent ${isContentVisible ? "visible" : ""}`}
      >
        <div className="box1">
          <h2>{t("experience.frontendDevelopment")}</h2>
          <div className="skillsContainer">
            <div className="couple">
              <div className="mySkills">
                <div className="icon">
                  <IoMdCheckmarkCircleOutline />
                </div>
                <div className="skill">
                  <h3>{t("experience.skills")}</h3>
                </div>
              </div>
              <div className="mySkills">
                <div className="icon">
                  <IoMdCheckmarkCircleOutline />
                </div>
                <div className="skill">
                  <h3>{t("experience.skills1")}</h3>
                </div>
              </div>
            </div>

            <div className="couple">
              <div className="mySkills">
                <div className="icon">
                  <IoMdCheckmarkCircleOutline />
                </div>
                <div className="skill">
                  <h3>{t("experience.skills2")}</h3>
                </div>
              </div>
              <div className="mySkills">
                <div className="icon">
                  <IoMdCheckmarkCircleOutline />
                </div>
                <div className="skill">
                  <h3>{t("experience.skills3")}</h3>
                </div>
              </div>
            </div>

            <div className="couple">
              <div className="mySkills">
                <div className="icon">
                  <IoMdCheckmarkCircleOutline />
                </div>
                <div className="skill">
                  <h3>{t("experience.skills4")}</h3>
                </div>
              </div>
              <div className="mySkills">
                <div className="icon">
                  <IoMdCheckmarkCircleOutline />
                </div>
                <div className="skill">
                  <h3>{t("experience.skills5")}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box2">
          <h2>{t("experience.backendDevelopment")}</h2>
          <div className="skillsContainer">
            <div className="couple">
              <div className="mySkills">
                <div className="icon">
                  <IoMdCheckmarkCircleOutline />
                </div>
                <div className="skill">
                  <h3>{t("experience.skills6")}</h3>
                </div>
              </div>
              <div className="mySkills">
                <div className="icon">
                  <IoMdCheckmarkCircleOutline />
                </div>
                <div className="skill">
                  <h3>{t("experience.skills7")}</h3>
                </div>
              </div>
            </div>
            <div className="couple">
              <div className="mySkills">
                <div className="icon">
                  <IoMdCheckmarkCircleOutline />
                </div>
                <div className="skill">
                  <h3>{t("experience.skills8")}</h3>
                </div>
              </div>
              <div className="mySkills">
                <div className="icon">
                  <IoMdCheckmarkCircleOutline />
                </div>
                <div className="skill">
                  <h3>{t("experience.skills9")}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
