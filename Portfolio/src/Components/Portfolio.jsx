import React from "react";
import image from "../Images/studying.jpg";

const imageAltText = "student coding";
const projectList = [
  {
    title: "Introduction to Github ",
    description: "Knowing how to create repos,commit amd merging conflicts",
    url: "https://github.com/Exp-Intro-to-GitHub-Flow-Cohort-1/series-intro-to-github-flow-Brandon-Isaac",
  },
  {
    title: "Web Development for Beginners",
    description:
      "Collaboration to create a beginner friendly article to help explain Markdown in Github,and pulling requests and Deploment using github pages.",
    url: "https://exp-communicate-using-markdown-cohort-1.github.io/series-communicate-using-markdown-Brandon-Isaac/",
  },
  {
    title: "",
    description: "",
    url: "",
  },
  {
    title: "",
    description: "",
    url: "",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div
        style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}
      >
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
