import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";
import { useTranslation } from "react-i18next";
import project1 from "../../images/projects/project1.jpg";
import project2 from "../../images/projects/project2.jpg";
import project3 from "../../images/projects/project3.jpg";
import project4 from "../../images/projects/project4.jpg";

function Projects() {
  const { t } = useTranslation();
  const projectRefs = useRef([]);
  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(entry.target);
            setVisibleProjects((prevVisibleProjects) =>
              prevVisibleProjects.includes(index)
                ? prevVisibleProjects
                : [...prevVisibleProjects, index]
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="projectsContainer" id="projects">
      <div className="headers">
        <p>{t("projects.header2")}</p>
        <h1>{t("projects.header1")}</h1>
      </div>

      <div className="projectsContent">
        {[project1, project2, project3, project4].map((project, index) => (
          <div
            key={index}
            className={`projectBox ${
              visibleProjects.includes(index) ? "visible" : ""
            }`}
            ref={(el) => (projectRefs.current[index] = el)}
          >
            <img src={project} alt={`project${index + 1}`} />
            <h2>{t(`projects.project${index + 1}`)}</h2>
            <p>
              {index === 0
                ? t("projects.project1Info")
                : index === 1
                ? t("projects.project2Info")
                : index === 2
                ? t("projects.project3Info")
                : t("projects.project4Info")}
            </p>
            <div className="github-liveDemo">
              <a
                href={`https://github.com/ilkckn/${
                  index === 0
                    ? "Book-Shop"
                    : index === 1
                    ? "WatchE-Commerce"
                    : index === 2
                    ? "Bloomora"
                    : "Jewellery-ECommerce"
                }`}
                target="_blank"
              >
                <button className="github">{t("projects.github")}</button>
              </a>
              <a
                href={`https://${
                  index === 0
                    ? "book-shop-zc44.onrender.com"
                    : index === 1
                    ? "watche-commerce.onrender.com"
                    : index === 2
                    ? "final-project-jran.onrender.com"
                    : "ilkckn.github.io/Jewellery-ECommerce/"
                }`}
                target="_blank"
              >
                <button className="liveDemo">{t("projects.liveDemo")}</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
