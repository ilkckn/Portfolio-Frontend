import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";
import { useTranslation } from "react-i18next";
import project1 from "../../images/projects/project1.jpg";
import project2 from "../../images/projects/project2.jpg";
import project3 from "../../images/projects/project3.jpg";

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
        {[project1, project2, project3].map((project, index) => (
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
                ? "An online flower and marriage organization site where you can shop online, design your marriage organization as you wish, with the most beautiful flowers, bouquets and gifts you can send to your loved ones."
                : index === 1
                ? "It's a great bookstore where you can find all types of books, buy them online, search for specific books with a wide search option, become a member and get discounts and be informed about all offers."
                : "A watch store with many watch brands, where you can shop online, where you can find the watch you are looking for specifically with a wide search option, with a user-friendly interface with men's and women's watches."}
            </p>
            <div className="github-liveDemo" target="_blank">
              <a
                href={`https://github.com/ilkckn/${
                  index === 0
                    ? "Bloomora"
                    : index === 1
                    ? "Book-Shop"
                    : "WatchE-Commerce"
                }`}
              >
                <button className="github">{t("projects.github")}</button>
              </a>
              <a
                href={`https://${
                  index === 0
                    ? "final-project-jran.onrender.com"
                    : index === 1
                    ? "book-shop-zc44.onrender.com"
                    : "watche-commerce.onrender.com"
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
