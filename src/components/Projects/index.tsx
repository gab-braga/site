import Project from "./project/index.js";
import { projects } from "../../data/projects.js";
import "./style.css";

export default function Projects() {
  return (
    <div className="projects section">
      <div className="container">
        <h2 className="title">Projetos</h2>
        <div className="grid">
          {projects.map((project) => {
            return (
              <Project
                key={project.title}
                image={project.image}
                title={project.title}
                link={project.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
