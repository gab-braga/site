import Project from "../../components/Project";
import Title from "../../components/Title";
import { projects } from "../../data/projects";
import "./style.css";

export default function Portfolio() {
  return (
    <div className="container portfolio">
      <Title>Portfólio</Title>
      <div className="portfolio-projects">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </div>
  );
}
