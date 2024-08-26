import React from "react";
import "./Projects.css";
import { useTranslation } from "react-i18next";
import project1 from "../../images/projects/project1.jpg";
import project2 from "../../images/projects/project2.jpg";
import project3 from "../../images/projects/project3.jpg";

function Projects() {
  const { t } = useTranslation();

  return (
    <div className="projectsContainer" id="projects">
      <div className="headers">
        <p>{t("projects.header2")}</p>
        <h1>{t("projects.header1")}</h1>
      </div>

      <div className="projectsContent">
        <div className="projectBox">
          <img src={project1} alt="project1" />
          <h2>{t("projects.project1")}</h2>
          <p>
            It's a great bookstore where you can find all types of books, buy
            them online, search for specific books with a wide search option,
            become a member and get discounts and be informed about all offers.{" "}
          </p>
          <div className="github-liveDemo" target="_blank">
            <a href="https://github.com/ilkckn/Book-Shop">
              <button className="github">{t("projects.github")}</button>
            </a>
            <a href="https://book-shop-zc44.onrender.com/" target="_blank">
              <button className="liveDemo">{t("projects.liveDemo")}</button>
            </a>
          </div>
        </div>

        <div className="projectBox">
          <img src={project2} alt="project2" />
          <h2>{t("projects.project2")}</h2>
          <p>
            A watch store with many watch brands, where you can shop online,
            where you can find the watch you are looking for specifically with a
            wide search option, with a user-friendly interface with men's and
            women's watches.{" "}
          </p>
          <div className="github-liveDemo" target="_blank">
            <a href="https://github.com/ilkckn/WatchE-Commerce">
              <button className="github">{t("projects.github")}</button>
            </a>
            <a href="https://watche-commerce.onrender.com/" target="_blank">
              <button className="liveDemo">{t("projects.liveDemo")}</button>
            </a>
          </div>
        </div>

        <div className="projectBox">
          <img src={project3} alt="project2" />
          <h2>{t("projects.project2")}</h2>
          <p>
            A watch store with many watch brands, where you can shop online,
            where you can find the watch you are looking for specifically with a
            wide search option, with a user-friendly interface with men's and
            women's watches.{" "}
          </p>
          <div className="github-liveDemo" target="_blank">
            <a href="https://github.com/ilkckn/Bloomora">
              <button className="github">{t("projects.github")}</button>
            </a>
            <a href="https://final-project-jran.onrender.com/" target="_blank">
              <button className="liveDemo">{t("projects.liveDemo")}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
